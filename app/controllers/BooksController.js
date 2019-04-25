const { Book, Author } = require('../db/models');

const BooksController = {
  books: async (parent, args, context, info) => {
    const books = await Book.findAll();
    const response = books.map(book => book.getRaw());

    return response;
  },

  booksFromAuthor: async (parent, args, context, info) => {
    const { id } = parent;
    const books = await Book.findAll({
      where: {
        authorId: id
      }
    });
    const response = books.map(book => book.getRaw());

    return response;
  },

  book: async (parent, args, context, info) => {
    const { id } = args;
    const book = await Book.findOne({
      where: {
        id
      }
    });

    if(!book) {
      const error = {
        message: 'Not found',
        path: 'books'
      };

      throw error;
    }

    return book.getRaw();
  }
};

module.exports = BooksController;
