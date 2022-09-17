const { Signale } = require('signale');

const logger = new Signale({
  scope: `Testing`,
  secrets: ['$Fails', 'It works'],
})

logger.info('Hello $Fails It works')
