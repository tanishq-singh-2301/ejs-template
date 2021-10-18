const express = require('express');
// const { graphqlHTTP } = require('express-graphql');
const route = express.Router();
const path = require('path');
// const { schema } = require('../graphql/graphql');

/** STATICS */
route.use('/assets', express.static(path.resolve(__dirname, '../../public/assets')));
route.use(express.static(path.resolve(__dirname, '../../dist')));

/** API */
route.use('/api', require('./apis/api'));
// route.use('/graphql', graphqlHTTP({ graphiql: true, schema: schema }));

/** ROUTES */
route.get('*', (req, res) => res.sendFile(path.join(__dirname, '../../dist/index.html')));

module.exports = route;