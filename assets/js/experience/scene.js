const THREE = require('three');
const scene = new THREE.Scene();

var debugObject = {
    clearColor: '#070404'
};

scene.background = new THREE.Color(debugObject.clearColor);

export {
    scene
};