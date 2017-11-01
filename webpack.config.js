import path from 'path';

const config = {

    devtool: 'eval-source-map',

    // We add an entry to connect to the hot loading middleware from
    // the page
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, 'app/main.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },

    // This plugin activates hot loading
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.css?$/,
            loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
        }]
    }
};