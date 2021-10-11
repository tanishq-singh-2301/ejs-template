const THREE = require('three');
const { OrbitControls } = require('three/examples/jsm/controls/OrbitControls');
const socket = io();

socket.on('user', res => document.getElementById('current-users').innerText = `online users: ${res.user}`);

class CANVAS {
    constructor(_options) {
        this.targetCanvas = _options.targetCanvas;
        this.clock = new THREE.Clock();
        this.oldElapsedTime = 0;
        this.debugObject = {
            clearColor: '#070404'
        };

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
        this.orbitControl = new OrbitControls(this.camera, document.getElementById('home-webgl'));

        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGL1Renderer({
            canvas: document.getElementById('home-webgl'),
            antialias: true,
            alpha: false
        });

        this.config();
        this.update();
    };

    config() {
        this.scene.background = new THREE.Color(this.debugObject.clearColor);

        this.camera.position.set(4, 10, 13);
        this.scene.add(this.camera);
        this.orbitControl.enableDamping = true;

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.physicallyCorrectLights = true;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        // this.renderer.outputEncoding = THREE.sRGBEncoding;
        // this.renderer.toneMapping = THREE.LinearToneMapping;
        // this.renderer.toneMappingExposure = 3;
    };

    update() {
        this.elapsedTime = this.clock.getElapsedTime();
        this.deltaTime = this.elapsedTime - this.oldElapsedTime;
        this.oldElapsedTime = this.elapsedTime;

        this.orbitControl.update();

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.render(this.scene, this.camera);

        window.requestAnimationFrame(() => this.update());
    };
};

const canvas = new CANVAS({
    targetCanvas: 'home-webgl'
});

const box = new THREE.Mesh(
    new THREE.BoxBufferGeometry(5, 5, 5),
    new THREE.MeshBasicMaterial({
        color: 'dimgray',
        wireframe: true
    })
);

canvas.scene.add(box);