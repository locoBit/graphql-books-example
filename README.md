# graphql-books-example 

Simple sample about how to implement [graphql](https://graphql.org/) facebook library in order to fetch data from our database. In this example we use [postgresql](https://www.postgresql.org/) as database and [sequelize](http://docs.sequelizejs.com/) as ORM. 

## Getting Started

### Prerequisites

In order to run project you must have installed this software on your local environment:
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Docker Compose](https://docs.docker.com/compose/install/)
* [Node](https://nodejs.org/es/download/)

### Starting server

Clone this repository
```
$ git clone https://github.com/locoBit/graphql-books-example.git
```

Go into directory
```
$ cd graphql-books-example
```

Install dependencies

```
$ npm install
```

Give life to postgresql database

```
$ docker-compose -f docker-compose.yml up
```

Run migrations to create tables on database

```
$ npm run db:migrate
```

Populate tables

```
$ npm run db:seed
```

Wake up apollo server

```
$ node index.js
```

Go to http://localhost:4000/ to test queries

## Executing queries

Now you can run these queries

### Fetching books

Query books

```js
query {
  books{
    id
    title
    author {
      id
      name
    }
  }
}
```

Books response

```js
{
  "data": {
    "books": [
      {
        "id": 1,
        "title": "Kaggle minim elit officia",
        "author": {
          "id": 1,
          "name": "Duffy Cotton"
        }
      },
      {
        "id": 2,
        "title": "Darwinium ut ad excepteur",
        "author": {
          "id": 2,
          "name": "Gloria Chavez"
        }
      },
      .
      .
      .
```

Query book

```js
query {
  book(id: 1){
    id
    title
    createdAt
    updatedAt
    author {
      id
      name
      updatedAt
    }
  }
}
```

Book response

```js
{
  "data": {
    "book": {
      "id": 1,
      "title": "Kaggle minim elit officia",
      "createdAt": "2019-04-25T16:17:30.248Z",
      "updatedAt": "2019-04-25T16:17:30.248Z",
      "author": {
        "id": 1,
        "name": "Duffy Cotton",
        "updatedAt": "2019-04-25T16:04:42.557Z"
      }
    }
  }
}
```

Query authors

```js
query {
  authors{
    id
    name
    createdAt
    updatedAt
    books {
      id
      title
      updatedAt
    }
  }
}
```

Authors response

```js
{
  "data": {
    "authors": [
      {
        "id": 1,
        "name": "Duffy Cotton",
        "createdAt": "2019-04-25T16:04:42.557Z",
        "updatedAt": "2019-04-25T16:04:42.557Z",
        "books": [
          {
            "id": 1,
            "title": "Kaggle minim elit officia",
            "updatedAt": "2019-04-25T16:17:30.248Z"
          },
          {
            "id": 21,
            "title": "Digirang ex tempor consequat",
            "updatedAt": "2019-04-25T16:51:12.455Z"
          }
        ]
      },
      {
        "id": 2,
        "name": "Gloria Chavez",
        "createdAt": "2019-04-25T16:04:42.557Z",
        "updatedAt": "2019-04-25T16:04:42.558Z",
        "books": [
          {
            "id": 2,
            "title": "Darwinium ut ad excepteur",
            "updatedAt": "2019-04-25T16:17:30.248Z"
          },
          {
            "id": 22,
            "title": "Miraclis duis amet quis",
            "updatedAt": "2019-04-25T16:51:12.455Z"
          }
        ]
      },
      .
      .
      .
```

Query author

```js
query {
  author(id: 1){
    id
    name
    createdAt
    updatedAt
    books {
      id
      title
      updatedAt
    }
  }
}
```

Authors response

```js
{
  "data": {
    "author": {
      "id": 1,
      "name": "Duffy Cotton",
      "createdAt": "2019-04-25T16:04:42.557Z",
      "updatedAt": "2019-04-25T16:04:42.557Z",
      "books": [
        {
          "id": 1,
          "title": "Kaggle minim elit officia",
          "updatedAt": "2019-04-25T16:17:30.248Z"
        },
        {
          "id": 21,
          "title": "Digirang ex tempor consequat",
          "updatedAt": "2019-04-25T16:51:12.455Z"
        }
      ]
    }
  }
}
```
