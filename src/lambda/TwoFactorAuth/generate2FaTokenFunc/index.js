const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// Import Twilio's Node Helper library
// Create an authenticated Twilio Client instance
const twilio = require('twilio')(accountSid, authToken);

// Import library to generate a 6 digit string.
const randomize = require('randomize');

exports.handler = (event, context, callback) => {
  console.log('console.log generate2FaTokenFunc');
  callback(null, 'generate2FaTokenFunc');
};
