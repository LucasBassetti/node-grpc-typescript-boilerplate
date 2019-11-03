const protoLoader = require('@grpc/proto-loader');

import grpc from 'grpc';
import { serviceRequest } from '@middleware/service_request';
import {
  verifyModel,
  VerifyModelInput,
  VerifyModelResult,
} from '@services/example';

const exampleProto = `./protos/example.proto`;

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const examplePackageDefinition = protoLoader.loadSync(exampleProto, options);

const { examplepackage }: any = grpc.loadPackageDefinition(
  examplePackageDefinition,
);

const grpcServer = new grpc.Server();

grpcServer.addService(examplepackage.Example.service, {
  verifyModel: serviceRequest<VerifyModelInput, VerifyModelResult>(verifyModel),
});

export { grpcServer };

// server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
// server.start();
