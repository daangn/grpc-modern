import * as grpc from "grpc";

import { makeModernClient, ModernClient, set } from "../../src";
import { GreeterClient } from "../__generated__/grpc/helloworld/helloworld_grpc_pb";
import { HelloReq } from "../__generated__/grpc/helloworld/helloworld_pb";
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
    const [err, resp] = await client.sayHello(
      set(HelloReq, {
        name: "Tony",
      })
    );

    expect(resp?.message).toEqual(`Hello, Tony`);
  });

  afterAll(() => {
    server.shutdown();
  });
});
