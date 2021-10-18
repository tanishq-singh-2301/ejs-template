require('dotenv').config();
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const { Server } = require('socket.io');
const port = process.env.PORT || 3000;

app
    .use(require('cors')({ origin: 'https://react-webpack-express.herokuapp.com' }))
    .use(express.json())
    .use('/', require('./server/routes/router'));

require('./server/connection/socket-io').socket(new Server(server));

server.listen(port, () => console.log(`App is live at port http://localhost:${port}`));