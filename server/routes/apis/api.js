const route = require('express').Router();
const fun = require('../../functions/function');

route.get('/', fun.home);
route.get('/test', fun.test);

module.exports = route;