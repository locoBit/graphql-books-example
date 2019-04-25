const Sequelize = require('sequelize');

const BookModel = {
  attributes: {
    title: {
      type: Sequelize.STRING
    },
    createdAt: {
      type: Sequelize.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: 'updated_at'
    },
    authorId: {
      type: Sequelize.INTEGER,
      field: 'author_id',
      allowNull: false,
      references: {
        table: 'authors',
        key: 'id'
      }
    }
  },
  options: {
    tableName: 'books',
    underscored: true,
    paranoid: true,
    classMethods: {
      associate: function(models) {
        this.belongsTo(models.Author, {
          foreignKey: 'authorId',
          targetKey: 'id',
          as: 'Author'
        });
      }
    }
  }
};

module.exports = BookModel;
