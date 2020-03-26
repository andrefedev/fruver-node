const config = require('../../config');

exports = {
  StackName: 'TwoFactorAuth',
  Capabilities: ['CAPABILITY_AUTO_EXPAND'],
  ClientRequestToken: 'STRING_VALUE',
  NotificationARNs: [],
  OnFailure: 'DELETE',
  Parameters: [
    {
      ParameterKey: 'TWILIO_ACCOUNT_ID',
      ParameterValue: config.TWILIO_ACCOUNT_ID,
    },
    {
      ParameterKey: 'TWILIO_TOKEN_AUTH',
      ParameterValue: config.TWILIO_TOKEN_AUTH,
    },
    /* more items */
  ],
  ResourceTypes: ['AWS::Serverless::Function'],
  TemplateBody: 'file::/template.json',
};
