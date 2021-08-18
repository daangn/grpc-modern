// package: helloworld
// file: helloworld/helloworld.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as helloworld_helloworld_pb from "../helloworld/helloworld_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_ISayHello;
    throw: IGreeterService_IThrow;
}

interface IGreeterService_ISayHello extends grpc.MethodDefinition<helloworld_helloworld_pb.SayHelloReq, helloworld_helloworld_pb.SayHelloRes> {
    path: "/helloworld.Greeter/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<helloworld_helloworld_pb.SayHelloReq>;
    requestDeserialize: grpc.deserialize<helloworld_helloworld_pb.SayHelloReq>;
    responseSerialize: grpc.serialize<helloworld_helloworld_pb.SayHelloRes>;
    responseDeserialize: grpc.deserialize<helloworld_helloworld_pb.SayHelloRes>;
}
interface IGreeterService_IThrow extends grpc.MethodDefinition<helloworld_helloworld_pb.ThrowReq, helloworld_helloworld_pb.ThrowRes> {
    path: "/helloworld.Greeter/Throw";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<helloworld_helloworld_pb.ThrowReq>;
    requestDeserialize: grpc.deserialize<helloworld_helloworld_pb.ThrowReq>;
    responseSerialize: grpc.serialize<helloworld_helloworld_pb.ThrowRes>;
    responseDeserialize: grpc.deserialize<helloworld_helloworld_pb.ThrowRes>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer {
    sayHello: grpc.handleUnaryCall<helloworld_helloworld_pb.SayHelloReq, helloworld_helloworld_pb.SayHelloRes>;
    throw: grpc.handleUnaryCall<helloworld_helloworld_pb.ThrowReq, helloworld_helloworld_pb.ThrowRes>;
}

export interface IGreeterClient {
    sayHello(request: helloworld_helloworld_pb.SayHelloReq, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.SayHelloRes) => void): grpc.ClientUnaryCall;
    sayHello(request: helloworld_helloworld_pb.SayHelloReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.SayHelloRes) => void): grpc.ClientUnaryCall;
    sayHello(request: helloworld_helloworld_pb.SayHelloReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.SayHelloRes) => void): grpc.ClientUnaryCall;
    throw(request: helloworld_helloworld_pb.ThrowReq, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.ThrowRes) => void): grpc.ClientUnaryCall;
    throw(request: helloworld_helloworld_pb.ThrowReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.ThrowRes) => void): grpc.ClientUnaryCall;
    throw(request: helloworld_helloworld_pb.ThrowReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.ThrowRes) => void): grpc.ClientUnaryCall;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: helloworld_helloworld_pb.SayHelloReq, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.SayHelloRes) => void): grpc.ClientUnaryCall;
    public sayHello(request: helloworld_helloworld_pb.SayHelloReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.SayHelloRes) => void): grpc.ClientUnaryCall;
    public sayHello(request: helloworld_helloworld_pb.SayHelloReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.SayHelloRes) => void): grpc.ClientUnaryCall;
    public throw(request: helloworld_helloworld_pb.ThrowReq, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.ThrowRes) => void): grpc.ClientUnaryCall;
    public throw(request: helloworld_helloworld_pb.ThrowReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.ThrowRes) => void): grpc.ClientUnaryCall;
    public throw(request: helloworld_helloworld_pb.ThrowReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_helloworld_pb.ThrowRes) => void): grpc.ClientUnaryCall;
}
