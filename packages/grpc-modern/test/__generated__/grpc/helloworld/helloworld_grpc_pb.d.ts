// package: helloworld
// file: helloworld/helloworld.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as helloworld_helloworld_pb from "../helloworld/helloworld_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_ISayHello;
}

interface IGreeterService_ISayHello extends grpc.MethodDefinition<helloworld_helloworld_pb.HelloReq, helloworld_helloworld_pb.HelloRes> {
    path: "/helloworld.Greeter/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<helloworld_helloworld_pb.HelloReq>;
    requestDeserialize: grpc.deserialize<helloworld_helloworld_pb.HelloReq>;
    responseSerialize: grpc.serialize<helloworld_helloworld_pb.HelloRes>;
    responseDeserialize: grpc.deserialize<helloworld_helloworld_pb.HelloRes>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer {
    sayHello: grpc.handleUnaryCall<helloworld_helloworld_pb.HelloReq, helloworld_helloworld_pb.HelloRes>;
}

export interface IGreeterClient {
    sayHello(request: helloworld_helloworld_pb.HelloReq, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.HelloRes) => void): grpc.ClientUnaryCall;
    sayHello(request: helloworld_helloworld_pb.HelloReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.HelloRes) => void): grpc.ClientUnaryCall;
    sayHello(request: helloworld_helloworld_pb.HelloReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.HelloRes) => void): grpc.ClientUnaryCall;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: helloworld_helloworld_pb.HelloReq, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.HelloRes) => void): grpc.ClientUnaryCall;
    public sayHello(request: helloworld_helloworld_pb.HelloReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.HelloRes) => void): grpc.ClientUnaryCall;
    public sayHello(request: helloworld_helloworld_pb.HelloReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.HelloRes) => void): grpc.ClientUnaryCall;
}
