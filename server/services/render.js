const THREE = require('three');

exports.home = (req, res) => res.render('home', { scene: new THREE.Scene() });