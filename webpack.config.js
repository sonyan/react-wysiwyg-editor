/**
 * Webpack configuration file.
 */

module.exports = [ 
    {
        entry: './test.js',
        output: {
            filename: 'bundle.js',
            path: './public'
        },
        module: {
            loaders: [[{ test: /\.jsx$/, loader: 'jsx-loader' }]]
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    }
];