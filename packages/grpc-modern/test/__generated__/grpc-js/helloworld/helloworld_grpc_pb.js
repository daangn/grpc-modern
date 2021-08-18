// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var helloworld_helloworld_pb = require('../helloworld/helloworld_pb.js');

function serialize_helloworld_HelloReq(arg) {
  if (!(arg instanceof helloworld_helloworld_pb.HelloReq)) {
    throw new Error('Expected argument of type helloworld.HelloReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_HelloReq(buffer_arg) {
  return helloworld_helloworld_pb.HelloReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_HelloRes(arg) {
  if (!(arg instanceof helloworld_helloworld_pb.HelloRes)) {
    throw new Error('Expected argument of type helloworld.HelloRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_HelloRes(buffer_arg) {
  return helloworld_helloworld_pb.HelloRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreeterService = exports.GreeterService = {
  sayHello: {
    path: '/helloworld.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: helloworld_helloworld_pb.HelloReq,
    responseType: helloworld_helloworld_pb.HelloRes,
    requestSerialize: serialize_helloworld_HelloReq,
    requestDeserialize: deserialize_helloworld_HelloReq,
    responseSerialize: serialize_helloworld_HelloRes,
    responseDeserialize: deserialize_helloworld_HelloRes,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
