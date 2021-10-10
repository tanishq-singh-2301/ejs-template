const axios = require('axios');
const { v4 } = require('uuid');

exports.home = (req, res) => res.render('home');