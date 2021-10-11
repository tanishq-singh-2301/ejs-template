const io = require('socket.io-client');
const THREE = require('three');
const socket = io();

const add = document.querySelector('#add');
const clear = document.querySelector('#clear');
const data = document.querySelector('#data');
const user = document.querySelector('#user');

console.log({ THREE });

add.addEventListener('click', e => {
    e.preventDefault();
    socket.emit('btn', { value: 'add' });
});

clear.addEventListener('click', e => {
    e.preventDefault();
    socket.emit('btn', { value: 'clear' });
});

socket.on('btn', res => {
    data.innerHTML = res.value;
});

socket.on('user', res => {
    user.innerHTML = `user connected : ${res.user}`
});
