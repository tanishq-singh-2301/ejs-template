const route = require('express').Router();
const path = require('path');
const controller = require('../controller/controller');

route.get('/api/test/', controller.test);
route.get('*', (req, res) => res.sendFile(path.join(__dirname, '../../dist/index.html')));

module.exports = route;