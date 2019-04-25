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
    deletedAt: {
      type: Sequelize.DATE,
      field: 'deleted_at'
    }
    // sessionId: {
    //   type: Sequelize.INTEGER,
    //   field: 'session_id',
    //   allowNull: false
    // },
    // deletedAt: {
    //   type: Sequelize.DATE,
    //   field: 'deleted_at'
    // }
  },
  options: {
    tableName: 'books',
    underscored: true,
    paranoid: true,
    classMethods: {
      // associate: function(models) {
      //   this.belongsTo(models.Session, {
      //     foreignKey: 'sessionId',
      //     targetKey: 'id',
      //     as: 'Session'
      //   });
      // }
    }
  }
};

module.exports = BookModel;
