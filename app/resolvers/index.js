const { merge } = require('lodash');
const fs = require('fs');
const resolvers = {};

fs.readdirSync(__dirname)
  .filter(fileName => fileName != 'index.js')
  .forEach(fileName => {
    const resolver = require(`./${fileName}`);

    merge(resolvers, resolver);
  });

module.exports = resolvers;

