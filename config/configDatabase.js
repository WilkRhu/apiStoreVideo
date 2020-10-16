require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});
module.exports = {
    dialect: process.env.DIALECT,
    storage: process.env.STORAGE
};