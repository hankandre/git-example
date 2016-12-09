var path = require('path');

module.exports = {
    devtool: 'sourcemap',
    context: __dirname + '/src',
    entry: './app/app.js',
    output: {
        path: path.resolve(__dirname, 'src/'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.scss$/, loader: 'style!css!sass!autoprefixer?{browsers: ">5%"}' },
            { test: /\.css$/, loader: 'style!css' }
            // { test: /\.(ttf|otf|eot|svg|woff(2)?)$/, loader: 'url' }
        ]
    }
}