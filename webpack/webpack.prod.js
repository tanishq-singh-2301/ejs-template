const path = require('path')

module.exports = [
    {
        name: "home-js",
        devtool: false,
        entry: path.resolve(__dirname, '../assets/js/home.js'),
        output: {
            filename: 'home.min.js',
            path: path.resolve(__dirname, '../build/js')
        },
        mode: "production"
    },
]