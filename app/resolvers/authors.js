const authors = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const resolvers = {
  Query: {
    authors: () => {
      console.log('data');
      return authors;
    },
  },
};

module.exports = resolvers;
