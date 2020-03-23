import AWS from 'aws-sdk';
import { MongoClient } from 'mongodb';

import server from './server';
import config from './config';

AWS.config.update({
  region: 'us-east-1',
});

server.listen(config.PORT, err => {
  console.log(`express:listen:succesful:port:${config.PORT}`);
});

// import { injectDB as WhatsAppModel } from './dao/whatsapp.dao';
// import { injectDB as RateLimitModel } from './dao/ratelimit.dao';

/**
Ticket: Connection Pooling
Please change the configuration of the MongoClient object by setting the
maximum connection pool size to 50 active connections.
*/

/**
Ticket: Timeouts
Please prevent the program from waiting indefinitely by setting the write
concern timeout limit to 2500 milliseconds.
*/

// MongoClient.connect(
//   config.DB_URI,
//   // TODO: Connection Pooling
//   // Set the poolSize to 50 connections.
//   // TODO: Timeouts
//   // Set the write timeout limit to 2500 milliseconds.
//   { useNewUrlParser: true, useUnifiedTopology: true },
// )
//   .catch(err => {
//     console.error(err.stack);
//     process.exit(1);
//   })
//   .then(client => {
//     // Database
//     const database = client.db(config.DB_NAME);
//     // Insert database to initial dao
//     WhatsAppModel(database);
//     RateLimitModel(database);
//     // Start Server
//     server.listen(config.PORT, () => {
//       console.log(`express:listen:succesful:port:${config.PORT}`);
//     });
//   });
