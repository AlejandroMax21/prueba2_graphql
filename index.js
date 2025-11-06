const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schemas/tasksSchemas');
const resolvers = require('./controllers/tasksController');

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`Servidor GraphQL ejecutandose en ${url}`);
});