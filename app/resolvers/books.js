const {
  books
} = require('../controllers/BooksController');

const resolvers = {
  Query: {
    books
  },
};

module.exports = resolvers;
