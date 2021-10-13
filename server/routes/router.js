const route = require('express').Router();
const path = require('path');
const HTML_FILE = path.resolve(__dirname, './dist/index.html')

const controller = require('../controller/controller');

route.get('/', (req, res) => res.sendFile(HTML_FILE));
route.get('/api/test/', controller.test);

module.exports = route;