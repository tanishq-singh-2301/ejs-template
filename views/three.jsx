import React from 'react';
import '../assets/css/three.scss';
import Header from './components/header.jsx';

const Three = () => {
    return (
        <section id='three-page'>
            <Header />
            <canvas id='three-canvas'></canvas>
        </section>
    );
};

export default Three;