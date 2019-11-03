import grpc from 'grpc';
import { mongo } from '@database/mongo';
import { grpcServer } from '@config/grpc';

async function start() {
  await mongo.connect();

  const port = process.env.PORT || '50051';

  grpcServer.bind(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure());
  grpcServer.start();

  // console.log(`server stated at port ${port}`);
}

start();
