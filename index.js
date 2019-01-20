
'use strict'

const logger = require('winston')
require('dotenv').config();

const type = process.env.PROCESS_TYPE

logger.info(`Starting '${type}' process`, { pid: process.pid })

if (type === 'app') {
  require('./app')
} else if (type === 'social-preprocessor-worker') {
  require('./worker')
} else {
  throw new Error(`
    ${type} is an unsupported process type. 
    Use one of: 'app', 'social-preprocessor-worker'!
  `)
}
