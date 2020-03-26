const chalk = require('chalk');
var AWS = require('aws-sdk');

cloudformation.createStack(params, function (err, data) {
  if (err) console.log(err, err.stack);
  // an error occurred
  else console.log(data); // successful response
});

AWS.config.getCredentials(function (err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log(chalk.blue('Access key:'), AWS.config.credentials.accessKeyId);
    console.log('Secret access key:', AWS.config.credentials.secretAccessKey);
  }
});

console.log(
  `CPU: ${chalk.red('90%')} RAM: ${chalk.green('40%')} DISK: ${chalk.yellow('70%')}`,
);
