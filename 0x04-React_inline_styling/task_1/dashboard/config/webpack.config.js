const path = require('path');

module.exports = {
    // Set the build mode to 'development'
    mode: 'development',

    // Entry point for the application
    entry: './src/index.js',

    // Output configuration for bundled files
    output: {
        filename: 'bundle.js',
        // Resolve the path for the output directory
        path: path.resolve('./dist')
    },

    // Module rules for handling different file types
    module: {
        rules: [
            // CSS file handling
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // Image file handling
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true
                        },
                    },
                ],
            },
            // JavaScript and JSX file handling using Babel
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },

    // Source map configuration for debugging
    devtool: 'inline-source-map',

    // Development server configuration
    devServer: {
        // Set the static content directory
        static: path.resolve('./dist'),
        // Enable compression for faster serving
        compress: true,
        // Specify the port for the development server
        port: 8564,
    },
};
