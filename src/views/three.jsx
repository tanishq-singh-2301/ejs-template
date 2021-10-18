import React, { useEffect } from 'react';
import '../scss/three.scss';
import Header from './components/header.jsx';
import Experience from '../models/Experience';
import * as THREE from 'three';

class World extends Experience {
    constructor({ targetElement }) {
        super({ targetElement });

        this.setInstance();
    };

    setInstance() {
        this.box = new THREE.Mesh(
            new THREE.SphereBufferGeometry(4, 20, 20),
            new THREE.MeshBasicMaterial({
                color: 'dimgray',
                wireframe: true
            })
        );

        this.scene.add(this.box);
    };
};

const Three = () => {
    useEffect(() => {
        const world = new World({ targetElement: 'three-canvas' });
    }, []);

    return (
        <section id='three-page'>
            <Header heading={{ title: 'Three', imoji: '🐽' }} />
            <canvas id='three-canvas'></canvas>
        </section>
    );
};

export default Three;