const {
  books,
  book
} = require('../controllers/BooksController');
const {
  authorFromBook,
} = require('../controllers/AuthorsController');

const resolvers = {
  Query: {
    books,
    book
  },
  Book: {
    author: authorFromBook
  }
};

module.exports = resolvers;
