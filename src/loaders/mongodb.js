import { MongoClient } from 'mongodb';

import config from '../config';

export default () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(
      config.databaseURL,
      // TODO: Connection Pooling
      // Set the poolSize to 50 connections.
      // TODO: Timeouts
      // Set the write timeout limit to 2500 milliseconds.
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      },
    );
  });
};

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
