const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../assets/js/main.js'),
    output: {
        path: path.resolve(__dirname, '../assets/js/'),
        filename: 'bundle.js',
    },
    watch: true,
    mode: "development"
};