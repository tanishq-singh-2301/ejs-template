import React from 'react';
const io = require("socket.io-client");
import '../assets/css/dashboard.scss';
import Header from './components/header.jsx';

const Dashboard = () => {
    const socket = io();
    socket.on('user', res => document.getElementById('current-users').innerText = `online users: ${res.user}`);

    return (
        <section id='dashboard-page'>
            <Header />
            <h1 id='greeting'>Dashboard</h1>
            <h1 id='current-users'></h1>
        </section>
    )
};

export default Dashboard;