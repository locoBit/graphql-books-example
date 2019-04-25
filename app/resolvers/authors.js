const {
  author,
  authors
} = require('../controllers/AuthorsController');
const {
  booksFromAuthor
} = require('../controllers/BooksController');

const resolvers = {
  Query: {
    author,
    authors
  },
  Author: {
    books: booksFromAuthor
  }
};

module.exports = resolvers;
