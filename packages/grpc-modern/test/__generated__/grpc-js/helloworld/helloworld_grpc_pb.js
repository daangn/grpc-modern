// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var helloworld_helloworld_pb = require('../helloworld/helloworld_pb.js');

function serialize_helloworld_SayHelloReq(arg) {
  if (!(arg instanceof helloworld_helloworld_pb.SayHelloReq)) {
    throw new Error('Expected argument of type helloworld.SayHelloReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_SayHelloReq(buffer_arg) {
  return helloworld_helloworld_pb.SayHelloReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_SayHelloRes(arg) {
  if (!(arg instanceof helloworld_helloworld_pb.SayHelloRes)) {
    throw new Error('Expected argument of type helloworld.SayHelloRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_SayHelloRes(buffer_arg) {
  return helloworld_helloworld_pb.SayHelloRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_ThrowReq(arg) {
  if (!(arg instanceof helloworld_helloworld_pb.ThrowReq)) {
    throw new Error('Expected argument of type helloworld.ThrowReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_ThrowReq(buffer_arg) {
  return helloworld_helloworld_pb.ThrowReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_ThrowRes(arg) {
  if (!(arg instanceof helloworld_helloworld_pb.ThrowRes)) {
    throw new Error('Expected argument of type helloworld.ThrowRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_ThrowRes(buffer_arg) {
  return helloworld_helloworld_pb.ThrowRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_ThrowTwoTimesReq(arg) {
  if (!(arg instanceof helloworld_helloworld_pb.ThrowTwoTimesReq)) {
    throw new Error('Expected argument of type helloworld.ThrowTwoTimesReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_ThrowTwoTimesReq(buffer_arg) {
  return helloworld_helloworld_pb.ThrowTwoTimesReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_ThrowTwoTimesRes(arg) {
  if (!(arg instanceof helloworld_helloworld_pb.ThrowTwoTimesRes)) {
    throw new Error('Expected argument of type helloworld.ThrowTwoTimesRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_ThrowTwoTimesRes(buffer_arg) {
  return helloworld_helloworld_pb.ThrowTwoTimesRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreeterService = exports.GreeterService = {
  sayHello: {
    path: '/helloworld.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: helloworld_helloworld_pb.SayHelloReq,
    responseType: helloworld_helloworld_pb.SayHelloRes,
    requestSerialize: serialize_helloworld_SayHelloReq,
    requestDeserialize: deserialize_helloworld_SayHelloReq,
    responseSerialize: serialize_helloworld_SayHelloRes,
    responseDeserialize: deserialize_helloworld_SayHelloRes,
  },
  throw: {
    path: '/helloworld.Greeter/Throw',
    requestStream: false,
    responseStream: false,
    requestType: helloworld_helloworld_pb.ThrowReq,
    responseType: helloworld_helloworld_pb.ThrowRes,
    requestSerialize: serialize_helloworld_ThrowReq,
    requestDeserialize: deserialize_helloworld_ThrowReq,
    responseSerialize: serialize_helloworld_ThrowRes,
    responseDeserialize: deserialize_helloworld_ThrowRes,
  },
  throwTwoTimes: {
    path: '/helloworld.Greeter/ThrowTwoTimes',
    requestStream: false,
    responseStream: false,
    requestType: helloworld_helloworld_pb.ThrowTwoTimesReq,
    responseType: helloworld_helloworld_pb.ThrowTwoTimesRes,
    requestSerialize: serialize_helloworld_ThrowTwoTimesReq,
    requestDeserialize: deserialize_helloworld_ThrowTwoTimesReq,
    responseSerialize: serialize_helloworld_ThrowTwoTimesRes,
    responseDeserialize: deserialize_helloworld_ThrowTwoTimesRes,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
