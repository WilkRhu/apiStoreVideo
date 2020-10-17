require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});
const { test } = require('../envDatabase');

module.exports = {
  test: {
    dialect: test.dialect,
    storage: test.storage
  },

  prod: {
    dialect: process.env.DIALECT,
    storage: process.env.STORAGE
  }
    
}