import React, { useEffect } from 'react';
import '../assets/css/three.scss';
import Header from './components/header.jsx';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

class Experience {
    constructor({ targetElement }) {
        this.targetElement = document.getElementById(targetElement);

        this.setScene();
        this.setCamera();
        this.setRenderer();

        this.update();
        window.addEventListener('resize', () => this.resize());
    };

    setScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x000000);

        this.world = new World({ scene: this.scene });
    };

    setCamera() {
        this.camera = new Camera({ targetElement: this.targetElement, scene: this.scene });
    };

    setRenderer() {
        this.renderer = new Renderer({ targetElement: this.targetElement, scene: this.scene, camera: this.camera.instance });
    };

    resize() {
        this.renderer ? this.renderer.resize() : null;
        this.camera ? this.camera.resize() : null;
    };

    update() {
        this.camera ? this.camera.update() : null;
        this.renderer ? this.renderer.update() : null;

        window.requestAnimationFrame(() => this.update());
    };
};

class World {
    constructor({ scene }) {
        this.scene = scene;
        this.setDummy();
    };

    setDummy() {
        this.box = new THREE.Mesh(
            new THREE.BoxGeometry(5, 5, 5),
            new THREE.MeshBasicMaterial({
                color: 'dimgray',
                wireframe: true
            })
        );

        this.scene.add(this.box);
    };
};

class Camera {
    constructor({ targetElement, scene }) {
        this.targetElement = targetElement;
        this.scene = scene;

        this.setInstance();
    };

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
        this.instance.position.set(4, 10, 13);
        this.scene.add(this.instance);

        this.orbitControl = new OrbitControls(this.instance, this.targetElement)
        this.orbitControl.enableDamping = true;
    };

    resize() {
        this.instance.aspect = window.innerWidth / window.innerHeight;
    };

    update() {
        this.instance.updateProjectionMatrix();
        this.orbitControl.update();
    };
};

class Renderer {
    constructor({ targetElement, scene, camera }) {
        this.targetElement = targetElement;
        this.scene = scene;
        this.camera = camera;

        this.setInstance();
    };

    setInstance() {
        this.instance = new THREE.WebGL1Renderer({
            canvas: this.targetElement,
            alpha: false,
            antialias: true
        });
        this.instance.setSize(window.innerWidth, window.innerHeight);
        this.instance.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        this.instance.physicallyCorrectLights = true;
        this.instance.shadowMap.enabled = true;
        this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
        // this.instance.gammaOutPut = true
        // this.instance.outputEncoding = THREE.sRGBEncoding
        // this.instance.toneMapping = THREE.ReinhardToneMapping
        // this.instance.toneMapping = THREE.ReinhardToneMapping
        // this.instance.toneMappingExposure = 1.3
        this.instance.render(this.scene, this.camera);
    };

    resize() {
        this.instance.setSize(window.innerWidth, window.innerHeight);
        this.instance.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    update() {
        this.instance.render(this.scene, this.camera);
    };

    destroy() {
        this.instance.renderLists.dispose();
        this.instance.dispose();
    };
};

const Three = () => {
    useEffect(() => {
        const experience = new Experience({ targetElement: 'three-canvas' });
    }, []);

    return (
        <section id='three-page'>
            <Header />
            <canvas id='three-canvas'></canvas>
        </section>
    );
};

export default Three;