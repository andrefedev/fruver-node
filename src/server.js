import express from 'express';
import bodyParser from 'body-parser';

// Express Server
const server = express();

// Install Middlewares
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// // Install Routers

// The error handler must be before any other error middleware

// Optional fallthrough error handler

export default server;
