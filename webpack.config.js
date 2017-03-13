module.exports = {
    entry: { app: './example/index.js' },
    output: {
        filename: './example/bundle.js',
        publicPath: ''
    },
    module: {
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
          { test: /\.json$/, loader: 'json-loader' }
        ]
    }
}
