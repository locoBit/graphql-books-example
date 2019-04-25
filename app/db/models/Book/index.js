const fs = require('fs');
const path = require('path');
const Book = {
  options: {}
};
const modelName = __dirname.split(path.sep).pop();

Object.defineProperty(Book, 'name', {
  value: modelName,
  writable: false,
  enumerable: false
});

fs.readdirSync(__dirname)
  .filter(directory => !directory.includes('.js'))
  .forEach(directory => {
    Book.options[directory] = require('.' + directory);
  });

module.exports = Book;
