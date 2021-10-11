const { scene } = require('../scene');
const THREE = require('three');

const test = () => {
    scene.add(new THREE.Mesh(
        new THREE.BoxBufferGeometry(4, 4, 4),
        new THREE.MeshBasicMaterial({
            color: 'dimgray',
            wireframe: true
        })
    ));
};

export {
    test
};