const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const gql = require('graphql-tag');
const {
    ApolloServerPluginLandingPageLocalDefault
} = require('@apollo/server/plugin/landingPage/default');
const axios = require('axios');

const todos = [
    { id: '1', title: 'Learn GraphQL', completed: false },
    { id: '2', title: 'Build Apollo Server', completed: true }
];

const typeDefs = gql`
  type User { id: ID! name: String! username: String! email: String! phone: String! website: String! }
  type Todo { id: ID! title: String! completed: Boolean user: User }
  type Query  { getTodos: [Todo] getAllUsers: [User] getUser(id: ID!): User }
`;

const resolvers = {
    Todo: {
        user: async (todo) => (
            await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.userId}`)
        ).data,
    },
    Query: {
        getTodos: async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            return response.data;
        },
        getAllUsers: async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            return response.data;
        },
        getUser: async (_, { id }) => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            return response.data;
        }
    }
};

async function startServer() {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
    });
    await server.start();
    app.get('/graphql', (req, res) => {
        res.redirect('https://studio.apollographql.com/sandbox/explorer');
    });

    app.post(
        '/graphql',
        cors(),
        express.json(),
        expressMiddleware(server)
    );

    app.use(
        '/graphql',
        cors(),
        express.text({ type: '*/*' }),
        express.json(),
        expressMiddleware(server)
    );

    app.listen(8000, () =>
        console.log('Server ready at http://localhost:8000/graphql')
    );
}

startServer();