const THREE = require('three');

const renderer = new THREE.WebGL1Renderer({
    canvas: document.querySelector('.experience'),
    antialias: true,
    alpha: false
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.physicallyCorrectLights = true;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// renderer.outputEncoding = THREE.sRGBEncoding;
// renderer.toneMapping = THREE.LinearToneMapping;
// renderer.toneMappingExposure = 3;

export {
    renderer
};