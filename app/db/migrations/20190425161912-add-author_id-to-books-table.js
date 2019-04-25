'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'books',
      'author_id',
      Sequelize.INTEGER
    ).then(() => {
      return queryInterface.addConstraint(
        'books',
        [ 'author_id' ],
        {
          type: 'foreign key',
          name: 'books_author_id_authors_fk',
          references: {
            table: 'authors',
            field: 'id'
          }
        }
      );
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('books', 'author_id');
  }
};
