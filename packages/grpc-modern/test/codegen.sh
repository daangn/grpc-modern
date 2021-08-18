yarn grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:./__generated__/grpc/ \
  --grpc_out=grpc:./__generated__/grpc \
  ./helloworld/helloworld.proto

yarn grpc_tools_node_protoc \
  --plugin=protoc-gen-ts=../../../.yarn/unplugged/grpc_tools_node_protoc_ts-npm-5.3.2-f9dc5fcda0/node_modules/grpc_tools_node_protoc_ts/bin/protoc-gen-ts \
  --ts_out=./__generated__/grpc \
  ./helloworld/helloworld.proto

yarn grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:./__generated__/grpc-js/ \
  --grpc_out=grpc_js:./__generated__/grpc-js \
  ./helloworld/helloworld.proto

yarn grpc_tools_node_protoc \
  --plugin=protoc-gen-ts=../../../.yarn/unplugged/grpc_tools_node_protoc_ts-npm-5.3.2-f9dc5fcda0/node_modules/grpc_tools_node_protoc_ts/bin/protoc-gen-ts \
  --ts_out=grpc_js:./__generated__/grpc-js \
  ./helloworld/helloworld.proto
