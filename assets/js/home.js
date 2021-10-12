const io = require("socket.io-client");
const socket = io();

const canvas = document.getElementById('home-webgl');
const meaning = document.getElementById('meaning');

socket.on('user', res => document.getElementById('current-users').innerText = `online users: ${res.user}`);

var ctx = canvas.getContext('2d');
resize();

var pos = { x: 0, y: 0 };

window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

function setPosition(e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
}

function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

function draw(e) {
    if (meaning) meaning.innerText = '';
    if (e.buttons !== 1) return;

    ctx.beginPath(); // begin

    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'dimgray';

    ctx.moveTo(pos.x, pos.y); // from
    setPosition(e);
    ctx.lineTo(pos.x, pos.y); // to

    ctx.stroke(); // draw it!

    socket.emit('draw', { x: pos.x, y: pos.y });
};

socket.on('draw', res => {
    ctx.beginPath(); // begin

    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'white';

    ctx.moveTo(res.x, res.y);
    ctx.lineTo(res.x, res.y);

    ctx.stroke(); // draw it!
});