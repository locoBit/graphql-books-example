const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./app/resolvers');

const typeDefs = gql`
  type Book {
    id: Int!
    title: String!
    createdAt: String
    updatedAt: String
    author: Author
  }

  type Author {
    id: Int!
    name: String!
    createdAt: String
    updatedAt: String
    books: [ Book ]
  }

  type Query {
    books: [ Book ]
    book(id: Int!): Book

    authors: [ Author ]
    author(id: Int!): Author
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => req,
  formatResponse: response => {
    console.log(response);
    return response;
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
