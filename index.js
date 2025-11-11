require('dotenv').config();

const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schemas/tasksSchemas');
const resolvers = require('./controllers/tasksController');

const server = new ApolloServer({typeDefs, resolvers});

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

server.listen().then(({url}) => {
    console.log(`Servidor GraphQL ejecutandose en ${url}`);
});