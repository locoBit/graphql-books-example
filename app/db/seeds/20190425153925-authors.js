'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'authors',
      [
        {
          "id": 1,
          "name": "Duffy Cotton",
          "created_at": "2019-04-25T16:04:42.557Z",
          "updated_at": "2019-04-25T16:04:42.557Z"
        },
        {
          "id": 2,
          "name": "Gloria Chavez",
          "created_at": "2019-04-25T16:04:42.557Z",
          "updated_at": "2019-04-25T16:04:42.558Z"
        },
        {
          "id": 3,
          "name": "Branch Stevenson",
          "created_at": "2019-04-25T16:04:42.558Z",
          "updated_at": "2019-04-25T16:04:42.558Z"
        },
        {
          "id": 4,
          "name": "Carey Kinney",
          "created_at": "2019-04-25T16:04:42.558Z",
          "updated_at": "2019-04-25T16:04:42.558Z"
        },
        {
          "id": 5,
          "name": "May Rowland",
          "created_at": "2019-04-25T16:04:42.558Z",
          "updated_at": "2019-04-25T16:04:42.558Z"
        },
        {
          "id": 6,
          "name": "Katie Nichols",
          "created_at": "2019-04-25T16:04:42.558Z",
          "updated_at": "2019-04-25T16:04:42.558Z"
        },
        {
          "id": 7,
          "name": "Le Wagner",
          "created_at": "2019-04-25T16:04:42.558Z",
          "updated_at": "2019-04-25T16:04:42.558Z"
        },
        {
          "id": 8,
          "name": "Marta Davenport",
          "created_at": "2019-04-25T16:04:42.558Z",
          "updated_at": "2019-04-25T16:04:42.558Z"
        },
        {
          "id": 9,
          "name": "Madeleine Parks",
          "created_at": "2019-04-25T16:04:42.558Z",
          "updated_at": "2019-04-25T16:04:42.558Z"
        },
        {
          "id": 10,
          "name": "Lucia Beard",
          "created_at": "2019-04-25T16:04:42.558Z",
          "updated_at": "2019-04-25T16:04:42.558Z"
        },
        {
          "id": 11,
          "name": "Lindsay Fisher",
          "created_at": "2019-04-25T16:04:42.558Z",
          "updated_at": "2019-04-25T16:04:42.558Z"
        },
        {
          "id": 12,
          "name": "Prince Thomas",
          "created_at": "2019-04-25T16:04:42.558Z",
          "updated_at": "2019-04-25T16:04:42.558Z"
        },
        {
          "id": 13,
          "name": "Singleton Navarro",
          "created_at": "2019-04-25T16:04:42.558Z",
          "updated_at": "2019-04-25T16:04:42.558Z"
        },
        {
          "id": 14,
          "name": "Lucinda Dickerson",
          "created_at": "2019-04-25T16:04:42.558Z",
          "updated_at": "2019-04-25T16:04:42.558Z"
        },
        {
          "id": 15,
          "name": "Janice Yates",
          "created_at": "2019-04-25T16:04:42.558Z",
          "updated_at": "2019-04-25T16:04:42.558Z"
        },
        {
          "id": 16,
          "name": "Weiss Kelly",
          "created_at": "2019-04-25T16:04:42.558Z",
          "updated_at": "2019-04-25T16:04:42.558Z"
        },
        {
          "id": 17,
          "name": "Riggs Freeman",
          "created_at": "2019-04-25T16:04:42.558Z",
          "updated_at": "2019-04-25T16:04:42.558Z"
        },
        {
          "id": 18,
          "name": "Browning Marquez",
          "created_at": "2019-04-25T16:04:42.558Z",
          "updated_at": "2019-04-25T16:04:42.558Z"
        },
        {
          "id": 19,
          "name": "Mullins Dorsey",
          "created_at": "2019-04-25T16:04:42.558Z",
          "updated_at": "2019-04-25T16:04:42.558Z"
        },
        {
          "id": 20,
          "name": "Lynn Webster",
          "created_at": "2019-04-25T16:04:42.558Z",
          "updated_at": "2019-04-25T16:04:42.558Z"
        }
      ]
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('authors', null, {});
  }
};
