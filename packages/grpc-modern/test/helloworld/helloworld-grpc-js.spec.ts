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

    await expect(
      client.sayHello(
        set(SayHelloReq, {
          name,
        })
      )
    ).resolves.toEqual({
      message: `Hello, ${name}`,
    });

    await expect(
      client.sayHello(
        set(SayHelloReq, {
          name,
        }),
        new grpc.Metadata()
      )
    ).resolves.toEqual({
      message: `Hello, ${name}`,
    });

    await expect(
      client.sayHello(
        set(SayHelloReq, {
          name,
        }),
        new grpc.Metadata(),
        {
          deadline: Date.now() + 1000,
        }
      )
    ).resolves.toEqual({
      message: `Hello, ${name}`,
    });

    await expect(client.throw(set(ThrowReq, {}))).rejects.toEqual(
      new Error("13 INTERNAL: Error example")
    );
  });

  afterAll(() => {
    server.shutdown();
  });
});
