const { camera, orbitControl } = require('./camera');
const { renderer } = require('./render');
const { scene } = require('./scene');
const { test } = require('./utils/test');
const THREE = require('three');

test();

const clock = new THREE.Clock();
let oldElapsedTime = 0;

const Experience = () => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - oldElapsedTime;
    oldElapsedTime = elapsedTime;

    orbitControl.update();

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    requestAnimationFrame(Experience);
    renderer.render(scene, camera);
};

export {
    Experience
}