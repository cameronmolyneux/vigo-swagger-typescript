/* eslint-disable prettier/prettier */
import { generator } from "../../src/generator";
import swaggerJson from "./swagger.json";

describe("generate", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { code, hooks, type } = generator(swaggerJson as any, {
    serviceFolder: "",
    serviceName: "",
    methodName: "",
    reactHooks: true,
  });

  it("generate Code", () => {
    expect(code).toMatchSnapshot();
  });
  it("generate hooks", () => {
    expect(hooks).toMatchSnapshot();
  });
  it("generate type", () => {
    expect(type).toMatchSnapshot();
  });
});
