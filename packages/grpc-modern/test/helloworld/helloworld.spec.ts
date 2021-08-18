import { set } from "../../src";
import { SayHelloReq } from "../__generated__/grpc-js/helloworld/helloworld_pb";

describe("set", () => {
  test("when unknown parameter is given", () => {
    const key = "notExists";

    expect(() => {
      set(SayHelloReq, {
        [key]: "hello",
      } as any);
    }).toThrowError(new Error(`Unknown parameter: ${key}`));
  });
});
