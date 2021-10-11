const route = require('express').Router();
const services = require('../services/render');
const controller = require('../controller/controller');

route.get('/', services.home);
route.get('/api/test/', controller.test);

module.exports = route;