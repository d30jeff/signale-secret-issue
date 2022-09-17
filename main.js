const { Signale } = require('signale');

const logger = new Signale({
  scope: `Testing`,
  secrets: ['$Fails', 'It works', '#Test'],
})

logger.info('Hello $Fails It works #Test')
