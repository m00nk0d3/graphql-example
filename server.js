const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');
const products = require('./products/products.model');
const orders = require('./orders/orders.model');

const typesArray = loadFilesSync('**/*', {
    extensions: ['graphql'],
});
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray
})




app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})