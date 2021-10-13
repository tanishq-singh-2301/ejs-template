import React from 'react';
const io = require("socket.io-client");

const Dashboard = () => {
    const socket = io();

    window.onload = () => {
        socket.on('user', res => document.getElementById('current-users').innerText = `online users: ${res.user}`);
    };

    return (
        <>
            <h1>Dashboard</h1>
            <h1 id='current-users'></h1>
        </>
    )
};

export default Dashboard;