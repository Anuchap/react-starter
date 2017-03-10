module.exports = {
    entry: { app: './src/app.js' },
    output: {
        filename: './dist/[name].js',
        publicPath: ''
    },
    module: {
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
          { test: /\.json$/, loader: 'json-loader' }
        ]
    }
}
