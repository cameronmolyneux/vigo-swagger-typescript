/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { writeFileSync, existsSync, mkdirSync, readFileSync } from 'fs';
import { format } from 'prettier';
import { SwaggerJson, SwaggerConfig, Config } from './types';
import { HTTP_REQUEST, CONFIG, FILE_HOOKS_CONFIG } from './strings';
import { getJson } from './getJson';
import { generator } from './generator';
import { majorVersionsCheck } from './utils';
import { swaggerToOpenApi } from './utilities/swaggerToOpenApi';
import { generateMock } from './mock';
import chalk from 'chalk';

/** @param config If isn't defined will be use swagger.config.json instead */
async function generate(config?: SwaggerConfig, cli?: Partial<Config>) {
  config = config ?? getSwaggerConfig();
  const configs = Array.isArray(config) ? config : [config];
  configs.forEach(con => {
    generateService(con, cli);
  });
}

const generateService = async (config: Config, cli?: Partial<Config>) => {
  config = {
    ...config,
    tag: cli?.tag ?? config.tag,
    local: cli?.local ?? config.local
  };

  const { swaggerUrl, modelsFolder, serviceRootFolder, storeFolder, prettierPath, mock, local, serviceName } = config;

  const serviceFolder = serviceRootFolder + '/' + serviceName;

  // if we are building models, create folder
  if (modelsFolder !== undefined && !existsSync(modelsFolder)) {
    mkdirSync(modelsFolder);
  }

  // if we are building services, create folder
  if (serviceRootFolder !== undefined && !existsSync(serviceRootFolder)) {
    mkdirSync(serviceRootFolder);
  }
  // and build the actual service folder if it does not exsit
  if (serviceFolder !== undefined && !existsSync(serviceFolder)) {
    mkdirSync(serviceFolder);
  }

  // if we are building store, create folder
  if (storeFolder !== undefined && !existsSync(storeFolder)) {
    mkdirSync(storeFolder);
  }

  const prettierOptions = getPrettierOptions(prettierPath);

  try {
    let input: SwaggerJson;

    if (local) {
      input = getLocalJson(serviceRootFolder);
    } else {
      if (!swaggerUrl) {
        throw new Error('Add url in swagger.config.json ');
      }

      input = await getJson(swaggerUrl);

      if (input.swagger) {
        majorVersionsCheck('2.0.0', input.swagger);
        // convert swagger v2 to openApi v3
        input = await swaggerToOpenApi(input);
      } else {
        majorVersionsCheck('3.0.0', input.openapi);
      }
    }

    const { code, hooks, type } = generator(input, config);

    if (mock) {
      generateMock(input, config);
    }

    // write out the models
    if (modelsFolder !== undefined) {
      writeFileSync(`${modelsFolder}/${serviceName}.ts`, type);
      formatFile(`${modelsFolder}/${serviceName}.ts`, prettierOptions);
      console.log(chalk.yellowBright('Models Completed'));
    }

    // write out the services
    if (serviceRootFolder !== undefined) {
      writeFileSync(`${serviceFolder}/index.ts`, code);
      formatFile(`${serviceFolder}/index.ts`, prettierOptions);
      if (!existsSync(`${serviceRootFolder}/config.ts"`)) {
        writeFileSync(
          `${serviceRootFolder}/config.ts`,
          CONFIG.replace('${AUTO_REPLACE_SERVICE_LOCATION}', serviceName || '')
        );
        formatFile(`${serviceRootFolder}/config.ts`, prettierOptions);
        writeFileSync(`${serviceRootFolder}/httpRequest.ts`, HTTP_REQUEST);
        formatFile(`${serviceRootFolder}/httpRequest.ts`, prettierOptions);
      }
      console.log(chalk.yellowBright('Services Completed'));
    }

    // write out the store
    if (storeFolder !== undefined) {
      writeFileSync(`${storeFolder}/hooks.ts`, hooks);
      if (!existsSync(`${storeFolder}/hooksConfig.ts"`)) {
        writeFileSync(`${storeFolder}/hooksConfig.ts`, FILE_HOOKS_CONFIG);
      }
      console.log(chalk.yellowBright('Redux stores Completed'));
    }
    console.log(chalk.greenBright('All Completed'));
  } catch (error) {
    console.log(chalk.redBright(error));
    console.log(chalk.redBright('failed'));
  }
};

function formatFile(filePath: string, prettierOptions: any) {
  const code = readFileSync(filePath).toString();
  writeFileSync(filePath, format(code, prettierOptions));
}

function getSwaggerConfig(): SwaggerConfig {
  try {
    const config = JSON.parse(readFileSync('swagger.config.json').toString());

    if (!config) {
      throw '';
    }

    return config;
  } catch (error) {
    try {
      return JSON.parse(readFileSync('./swaggerConfig.json').toString()); // backward compatible for  v1
    } catch {
      throw new Error('Please define swagger.config.json');
    }
  }
}

function getPrettierOptions(prettierPath?: string) {
  let prettierOptions: any = {};
  if (prettierPath && existsSync(prettierPath)) {
    prettierOptions = JSON.parse(readFileSync(prettierPath).toString());
  } else {
    if (existsSync('.prettierrc')) {
      prettierOptions = JSON.parse(readFileSync('.prettierrc').toString());
    } else if (existsSync('prettier.json')) {
      prettierOptions = JSON.parse(readFileSync('prettier.json').toString());
    }
  }

  if (!prettierOptions.parser) {
    prettierOptions.parser = 'typescript';
  }

  return prettierOptions;
}

function getLocalJson(dir: string) {
  const swaggerJsonPath = `${dir}/swagger.json`;

  try {
    const old = readFileSync(swaggerJsonPath).toString();
    return JSON.parse(old);
  } catch (error) {
    chalk.red(
      'swagger.json file not found. You should set keepJson true to save json then run vigo-swag-ts without tag to save that'
    );
    throw error;
  }
}

export { generate };
