require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');
const { Server } = require("socket.io");
const io = new Server(server);

const PORT = process.env.PORT || 8080;

// parse request to body-parser
app.use(express.json());

// set view engine
app.set("view engine", "ejs");

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

// load routers
app.use('/', require('./server/routes/routes'));
var game = [];

io.on('connection', socket => {
    console.clear()
    var userData = {
        gameId: socket.handshake.headers.referer.split('/game/')[1],
        userId: socket.id
    };
    socket.join(userData.gameId);

    var search = game.findIndex(ele => ele.gameId.toString() === userData.gameId.toString());

    if (game.length !== 0 && search !== -1) {
        if (game[search].user2 === null) {
            game[search].user2 = userData.userId;
        } else if (game[search].user1 === null) {
            game[search].user1 = userData.userId;
        } else {
            game[search].spectator += 1;
        }
    } else {
        game.push({
            gameId: userData.gameId,
            user1: userData.userId,
            user2: null,
            spectator: 0
        });
    }

    socket.on('disconnect', () => {
        var search = game.findIndex(ele => ele.gameId.toString() === userData.gameId.toString());

        if (game[search].user1 === userData.userId) {
            game[search].user1 = null;
        } else if (game[search].user2 === userData.userId) {
            game[search].user2 = null;
        } else {
            game[search].spectator -= 1;
        }

        if (game[search].user1 === null && game[search].user2 === null) {
            game.splice(search, 1);
        }

        console.log(game);
    });

    // main sockets
    socket.on('game', res => {
        socket.to(res.gameId).emit('move', {
            target: res.target,
            text: 'X'
        });
    });

    console.log(game);
});

server.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) });