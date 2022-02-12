
# Swagger-Typescript: Generate ts/js code from swagger/openApi JSON

Support OpenApi v3 and swagger v2

An auto typescript/javascript code generator from swagger.
Each endpoint will be created as a function, full type base.
Supported

- Generating a function for every apis
- Generating all types, interfaces and enums which used in apis
- React hooks.
- SignalR hub.
- Generating mock data.

## install

`$ yarn add vigo-swagger-typescript`

## get start

Before running, add your config to swagger.config.json

#### swagger.config.json

```json
{
  "url": "http://example.com/api/swagger.json",
  "dir": "./services",
  "prefix": "/api"
}
```

#### run

```
yarn vigo-swag-ts
```

#### config.ts

[more](#config)

baseConfig

```ts
const baseConfig: AxiosRequestConfig = {
  baseURL: "", // <--- Add your base url
  //other static configs
};
```

Now you can use APIs, So for advanced config read below.

## swagger.config.json

For Example:

```json
{
  "url": "http://example.com/api/swagger.json",
  "dir": "./services",
  "prettierPath": ".prettierrc",
  "language": "typescript"
}
```

    modelsFolder,
    modelsFileName,

| [`Key`]              | [`default`]      | Comment                                                                                                                                                                                                                                        |
| -------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`                | Required         | Address of swagger.json                                                                                                                                                                                                                        |
| `dir`                | Required         | Address of services output                                                                                                                                                                                                                     |
| `modelsFolder`       | Optional         | Address of models output                                                                                                                                                                                                                       |
| `modelsFileName`     | Optional         | Filename of the models file                                                                                                                                                                                                                    |
| `language`           | `typescript`     | export to "javascript" or "typescript"                                                                                                                                                                                                         |
| `methodName`         | `{method}{path}` | Supported mixed of "{method}{path}{operationId}". for Example: 'service{method}{path}'                                                                                                                                                         |
| `prefix`             | Optional         | prefix value will be removed from method name For example your endpoints is like "/api/v2/users", If you don't want add "/api/v2" to method name, add it to prefix                                                                             |
| `ignore`             | Optional         | Ignore headers from type for Example: `"ignore": { "headerParams": ["terminalId"]}`                                                                                                                                                            |
| `methodParamsByTag`  | false            | add add a tag insteadOf params name to generated method name (example: getUserP1P2 insteadOf getUserConnectionIdAccountId)                                                                                                                     |
| `mock`               | false            | For generate response mocks                                                                                                                                                                                                                    |
| `keepJson`           | false            | This code will keep previous JSON for updating partially. change it to true then generate service for creating your first json file then you can update a tag for example `$ yarn vigo-swag-ts User` will update your user APIs which have User tag |
| `reactHooks`         | false            | For generate react hooks of all APIs (using react-query under the hood)                                                                                                                                                                        |
| `useQuery`           | []               | List of apis which is get but developed with post methods (Is useful for rest apis) for Example: ["postTicketsGetall"] (Needed to enable `reactHooks`)                                                                                         |
| `useInfiniteQuery`   | []               | List of apis which is get and could be handle infinity (Needed to enable `reactHooks`) parameter should be one of `page`, `pageNo` or `pageNumber`                                                                                             |
| `local`              | false            | update swagger with local swagger.json located in your dir folder. add it to your config file or run it with cli `$ yarn vigo-swag-ts --local`                                                                                                      |
| `generateEnumAsType` | false            |

- `enum ReferralStatus {Successed="Successed","Error"="Error"} `
- `type ReferralStatus="Successed" | "Error"; // generateEnumAsType = true `
  |

## Config


The config.ts file automatically will be created after first run. You could change this file for customization. Don't change other files, if you want another config create Issue or PR.

- getAxiosInstance

  getAxiosInstance used for create an instance of axios request you can customize that for what you needed

- baseConfig

  baseConfig used for get static configs and headers. if you need some dynamic configs like add authentication to headers use `requestConfig.headers.authorization` into of `axiosInstance.interceptors.request.use` function.

## run by node

```js
const { generate } = require("vigo-swagger-typescript");

generate(config);
// or
generate(); // will be use ./swagger.config.json
```

## Conflict

In some situation teams have parallel backend development which cause conflict when updating swagger for solving this we have partially update, you can update your service just for a few tags and keep other old services codes.

For Doing this you need to add this to your swagger.config.json

```
"keepJson": true,
```

This code will keep previous JSON for updating partially.

Run `$ yarn vigo-swag-ts` with your base backend, for example develop branch

Others need to pull this changes

Now you can update Tag1 and Tag2 `$ yarn vigo-swag-ts Tag1 Tag2`.

## Multiple-Gateway

## swagger.config.json

swagger.config.json

```json
[
  {
    "url": "http://example1.com/api/swagger.json",
    "dir": "./service1",
    "prettierPath": ".prettierrc",
    "language": "typescript"
  },
  {
    "url": "http://example2.com/api/swagger.json",
    "dir": "./service2",
    "prettierPath": ".prettierrc",
    "language": "typescript"
  }
]
```