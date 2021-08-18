import * as grpc from "grpc";

import { makeModernClient, ModernClient, set } from "../../src";
import { GreeterClient } from "../__generated__/grpc/helloworld/helloworld_grpc_pb";
import { SayHelloReq } from "../__generated__/grpc/helloworld/helloworld_pb";
import { makeServer } from "./grpc-server";

let server: ReturnType<typeof makeServer>;
let client: ModernClient<GreeterClient>;

describe("helloworld (grpc)", () => {
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

    const [, resp1] = await client.sayHello(
      set(SayHelloReq, {
        name,
      })
    );

    expect(resp1?.message).toEqual(`Hello, ${name}`);

    const [, resp2] = await client.sayHello(
      set(SayHelloReq, {
        name,
      }),
      new grpc.Metadata()
    );

    expect(resp2?.message).toEqual(`Hello, ${name}`);

    const [, resp3] = await client.sayHello(
      set(SayHelloReq, {
        name,
      }),
      new grpc.Metadata(),
      {
        deadline: Date.now() + 1000,
      }
    );

    expect(resp3?.message).toEqual(`Hello, ${name}`);
  });

  afterAll(() => {
    server.shutdown();
  });
});
