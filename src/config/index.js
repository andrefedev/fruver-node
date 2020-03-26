const dotenv = require('dotev');

dotenv.config();

exports = {
  SITE_NAME: process.env.SITE_NAME,
  ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  SECRET_KEY: process.env.SECRET_KEY,
  // MongoDB Atlas
  DB_URI: process.env.DB_URI,
  DB_NAME: process.env.DB_NAME,
  // Twilio
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
  TWILIO_VERIFY_SERVICES_SID: process.env.TWILIO_VERIFY_SERVICES_SID,
  TWILIO_PHONE_NUMBER: process.env.TWILIO_PHONE_NUMBER,
  TWILIO_COUNTRY_CODE: process.env.TWILIO_COUNTRY_CODE,
};
