const { Book } = require('../db/models');

const BooksController = {
  books: async (parent, args, context, info) => {
    const books = await Book.findAll({
      raw: true
    });

    return books;
  }
};

module.exports = BooksController;
