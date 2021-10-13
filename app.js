require('dotenv').config();
const express = require('express');
const path = require('path')
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());
app.use('/', require('./server/routes/router'));

var user = 0;
io.on('connection', socket => {
    user += 1;
    io.emit('user', { user });
    socket.on('disconnect', () => {
        user -= 1;
        io.emit('user', { user });
    });
});

server.listen(port, () => console.log(`App is live at port http://localhost:${port}`));