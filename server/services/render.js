const axios = require('axios');
const { v4 } = require('uuid');

exports.home = (req, res) => res.redirect(`/game/${v4()}`);
exports.game = (req, res) => res.render('game');