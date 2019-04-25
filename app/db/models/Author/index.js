const fs = require('fs');
const path = require('path');
const Author = {
  options: {}
};
const modelName = __dirname.split(path.sep).pop();

Object.defineProperty(Author, 'name', {
  value: modelName,
  writable: false,
  enumerable: false
});

fs.readdirSync(__dirname)
  .filter(directory => !directory.includes('.js'))
  .forEach(directory => {
    Author.options[directory] = require('./' + directory);
  });

module.exports = Author;
