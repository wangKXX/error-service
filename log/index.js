const log4js = require("log4js");

log4js.configure({
  appenders: {
   everything: { type: 'file', filename: './public/all-the-logs.txt' }
  },
  categories: {
   default: { appenders: [ 'everything' ], level: 'debug' }
  }
});
  
const logger = log4js.getLogger();
module.exports = logger;