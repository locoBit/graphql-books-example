const { Author, Book } = require('../db/models');

const AuthorsController = {
  authors: async (parent, args, context, info) => {
    const authors = await Author.findAll();
    const response = authors.map(author => author.getRaw());

    return response;
  },

  author: async (parent, args, context, info) => {
    const { id } = args;
    const author = await Author.findOne({
      where: {
        id
      }
    });

    if(!author) {
      const error = {
        message: 'Not found',
        path: 'author'
      };

      throw error;
    }

    return author.getRaw();
  },

  authorFromBook: async (parent, args, context, info) => {
    const { id } = parent;
    const author = await Author.findOne({
      include: [ {
        model: Book,
        as: 'Books',
        where: {
          id
        }
      } ]
    });

    if(!author) {
      return null;
    }

    return author.getRaw();
  }
};

module.exports = AuthorsController;
