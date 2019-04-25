const { Book, Author } = require('../db/models');

const BooksController = {
  books: async (parent, args, context, info) => {
    const books = await Book.findAll({
      // include: [ {
      //   model: Author,
      //   as: 'Author'
      // } ],
      raw: true
    });

    return books;
  }
};

module.exports = BooksController;
