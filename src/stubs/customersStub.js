const path = require('path');
const grpc = require('grpc');
require('dotenv').config();
const protoLoader = require('@grpc/proto-loader');

const HorusClientWrapper = require('@horustracer/clientwrapper');

const PROTO_PATH = path.join(__dirname, '../protos/customers.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});

const CustomersService = grpc.loadPackageDefinition(packageDefinition)
  .CustomersService;

const client = new CustomersService(
  'localhost:40043',
  grpc.credentials.createInsecure(),
);

// The Client Wrapper "wraps" all the methods within the client object
// The first parameter is the actual gRPC client object, the second is the service, and the third is the output file
// Your invocations of the client at whenever you export this module to can remain entirely the same
const ClientWrapper = new HorusClientWrapper(
  client,
  CustomersService,
  'customers.txt',
  'main',
  `${process.env.HORUS_DB}`,
  `${process.env.SLACK_URL}`,
);

// Export the Client Wrapper rather than the server object
module.exports = ClientWrapper;
