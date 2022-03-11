import { getTsType, isAscending, getDefineParam, getParamString, getSchemaName, isMatchWholeWord } from './utils';
import { ApiAST, Config, TypeAST } from './types';
import { SERVICE_BEGINNING, DEPRECATED_WARM_MESSAGE } from './strings';
import { getJsdoc } from './utilities/jsdoc';

function generateApis(apis: ApiAST[], types: TypeAST[], config: Config): string {
  let code = SERVICE_BEGINNING;
  try {
    const service = config.modelsFolder + '/' + config.serviceName;
    const apisCode = apis
      .sort(({ serviceName }, { serviceName: _serviceName }) => isAscending(serviceName, _serviceName))
      .reduce(
        (
          prev,
          {
            contentType,
            summary,
            deprecated,
            serviceName,
            queryParamsTypeName,
            pathParams,
            requestBody,
            isQueryParamsNullable,
            responses,
            method,
            endPoint
          }
        ) => {
          return (
            prev +
            `
${getJsdoc({
  description: summary,
  deprecated: deprecated ? DEPRECATED_WARM_MESSAGE : undefined
})}export const ${serviceName} = async (
    ${
      /** Path parameters */
      pathParams
        .map(({ name, required, schema, description }) => getDefineParam(name, required, schema, description))
        .join(',')
    }${pathParams.length > 0 ? ',' : ''}${
              /** Request Body */
              requestBody ? `${getDefineParam('requestBody', true, requestBody)},` : ''
            }${
              /** Query parameters */
              queryParamsTypeName
                ? `${getParamString('queryParams', !isQueryParamsNullable, queryParamsTypeName)},`
                : ''
            }configOverride?:AxiosRequestConfig
): Promise<VigoResponse<${responses ? getTsType(responses) : 'any'}>> => {
  ${
    deprecated
      ? `
  if (__DEV__) {
    console.warn(
      "${serviceName}",
      "${DEPRECATED_WARM_MESSAGE}",
    );
  }`
      : ''
  }
  return await Http.${method}(ServiceLocation.${config.serviceName} + '${endPoint
              .replace('id', " ' + id + '")
              .replace('/api/v1', '')}',
    ${queryParamsTypeName ? 'queryParams' : 'undefined'},
    ${
      requestBody
        ? contentType === 'multipart/form-data' || contentType === 'application/x-www-form-urlencoded'
          ? 'objToForm(requestBody)'
          : 'requestBody'
        : 'undefined'
    },
    configOverride
    )
}
`
          );
        },
        ''
      );

    code +=
      types.reduce((prev, { name: _name }) => {
        const name = getSchemaName(_name);

        if (!isMatchWholeWord(apisCode, name)) {
          return prev;
        }

        return prev + ` ${name},`;
      }, 'import {') +
      '}  from "../../../' +
      service +
      '"\n';

    code += apisCode.replace(new RegExp('apiversion: string,', 'g'), () => '');
    return code;
  } catch (error) {
    console.error(error);
    return '';
  }
}

export { generateApis };
