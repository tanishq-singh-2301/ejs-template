import React from 'react';
const io = require("socket.io-client");
import '../scss/home.scss';
import Header from './components/header.jsx';

const Home = () => {
    const socket = io();
    socket.on('user', res => document.getElementById('current-users').innerText = `online users: ${res.user}`);

    return (
        <section id='home-page'>
            <Header heading={{ title: 'react webpack express', imoji: '👻' }} />
            <h1 id='greeting' onClick={() => window.open('https://tanishq-singh.herokuapp.com', '_blank')} >made by tanishq singh 🐒</h1>
            <h1 id='current-users'></h1>
        </section>
    );
};

export default Home;