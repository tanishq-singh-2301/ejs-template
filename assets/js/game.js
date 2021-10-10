const socket = io();
const gameId = window.location.pathname.split('/game/')[1];
const boardBtns = [...document.getElementsByClassName('board-btns')];

boardBtns.forEach(element => {
    element.addEventListener('click', e => {
        e.preventDefault();
        const target = parseInt(element.outerHTML.toString().split('id="')[1].split('" class=')[0]);
        socket.emit('game', { gameId, target });
    });
});

socket.on('move', res => {
    console.log(res.target);
    document.getElementById(res.target).innerText = res.text;
});