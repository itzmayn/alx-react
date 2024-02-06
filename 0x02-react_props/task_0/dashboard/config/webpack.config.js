// Import the 'path' module to handle file paths
const path = require('path');

// Webpack configuration object
module.exports = {
  // Set the mode to 'development' for easier debugging
  mode: 'development',

  // Entry point of the application
  entry: './src/index.js',

  // Output configuration
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve('./dist') // Output directory path
  },

  // Module rules for handling different file types
  module: {
    rules: [
      {
        test: /\.css$/, // Use style-loader and css-loader for CSS files
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Use file-loader and image-webpack-loader for image files
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // Skip image processing during debugging
              disable: true // Disable image optimization
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/, // Use babel-loader for JavaScript and JSX files
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

  // Generate inline source maps for better debugging
  devtool: 'inline-source-map',

  // Development server configuration
  devServer: {
    static: path.resolve('./dist'), // Serve static files from the 'dist' directory
    compress: true, // Enable gzip compression
    port: 8564, // Set the port for the development server
  },
};
