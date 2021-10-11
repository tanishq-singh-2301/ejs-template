const THREE = require('three');
const { scene } = require('./scene');
const { OrbitControls } = require('three/examples/jsm/controls/OrbitControls');

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
camera.position.set(4, 10, 13);
scene.add(camera);

const orbitControl = new OrbitControls(camera, document.querySelector('.experience'))
orbitControl.enableDamping = true;

export {
    camera,
    orbitControl
};