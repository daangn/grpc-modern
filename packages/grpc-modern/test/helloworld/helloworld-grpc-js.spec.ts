import * as grpc from "@grpc/grpc-js";

import { makeModernClient, ModernClient, set } from "../../src";
import { GreeterClient } from "../__generated__/grpc-js/helloworld/helloworld_grpc_pb";
import {
  SayHelloReq,
  ThrowReq,
} from "../__generated__/grpc-js/helloworld/helloworld_pb";
import { makeServer } from "./grpc-js-server";

let server: ReturnType<typeof makeServer>;
let client: ModernClient<GreeterClient>;

describe("helloworld (grpc-js)", () => {
  beforeAll(async () => {
    const PORT = 50010;

    server = makeServer({ port: PORT });
    client = makeModernClient(GreeterClient, {
      address: `0.0.0.0:${PORT}`,
      credential: grpc.credentials.createInsecure(),
    });

    await server.listen();
  });

  test("sayHello", async () => {
    const name = "Tony";

    const [err1, resp1] = await client.sayHello(
      set(SayHelloReq, {
        name,
      })
    );

    expect(err1).toBeNull();
    expect(resp1?.message).toEqual(`Hello, ${name}`);

    const [err2, resp2] = await client.sayHello(
      set(SayHelloReq, {
        name,
      }),
      new grpc.Metadata()
    );

    expect(err2).toBeNull();
    expect(resp2?.message).toEqual(`Hello, ${name}`);

    const [err3, resp3] = await client.sayHello(
      set(SayHelloReq, {
        name,
      }),
      new grpc.Metadata(),
      {
        deadline: Date.now() + 1000,
      }
    );

    expect(err3).toBeNull();
    expect(resp3?.message).toEqual(`Hello, ${name}`);

    const [err4, resp4] = await client.throw(set(ThrowReq, {}));

    expect(err4.message).toEqual("13 INTERNAL: Error example");
    expect(resp4).toBeUndefined();
  });

  afterAll(() => {
    server.shutdown();
  });
});
