const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./app/resolvers');

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Author {
    title: String
    author: String
  }

  type Query {
    books: [ Book ]
    authors: [ Author ]
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => req
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
