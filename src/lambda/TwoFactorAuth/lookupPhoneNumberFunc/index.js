// const accountSid = process.env('TWILIO_ACCOUNT_SID');
// const accountToken = process.env('TWILIO_ACCOUNT_TOKEN');

const aws = require('./node_modules/aws-sdk');
const client = require('./node_modules/twilio')('accountSid', 'accountToken');

// Load the AWS SDK
var AWS = require('./node_modules/aws-sdk'),
  region = 'us-east-1',
  secretName = 'dev/Twilio',
  secret,
  decodedBinarySecret;

// Create a Secrets Manager client
var client = new AWS.SecretsManager({
  region: region,
});

exports.handler = (event, context, callback) => {};
