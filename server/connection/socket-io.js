exports.socket = (io) => {
    var user = 0;
    io.on('connection', socket => {
        user += 1;
        io.emit('user', { user });
        socket.on('disconnect', () => {
            user -= 1;
            io.emit('user', { user });
        });
    });
};