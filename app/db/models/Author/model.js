const Sequelize = require('sequelize');

const AuthorModel = {
  attributes: {
    name: {
      type: Sequelize.STRING
    },
    createdAt: {
      type: Sequelize.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: 'updated_at'
    }
  },
  options: {
    tableName: 'authors',
    underscored: true,
    paranoid: true,
    classMethods: {
      associate: function(models) {
        this.hasMany(models.Book, {
          foreignKey: 'authorId',
          targetKey: 'id',
          as: 'Books'
        });
      }
    }
  }
};

module.exports = AuthorModel;
