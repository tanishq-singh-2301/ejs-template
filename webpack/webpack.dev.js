const path = require('path');

module.exports = [
    {
        name: "home-js",
        devtool: "source-map",
        mode: "development",
        entry: path.resolve(__dirname, '../assets/js/home.js'),
        output: {
            filename: 'home.min.js',
            path: path.resolve(__dirname, '../build/js')
        },
        watch: true
    }
]