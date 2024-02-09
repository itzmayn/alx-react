// Import required webpack plugins and modules
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

// Webpack configuration
module.exports = {
    // Entry point for the application
    entry: "./src/index.js",
    
    // Output configuration
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    
    // Development server configuration
    devServer: {
        hot: true,        // Enable Hot Module Replacement (HMR)
        contentBase: path.resolve("./dist"), // Serve static files from the 'dist' directory
        compress: true,   // Enable gzip compression
        port: 8564,        // Set the port number
    },
    
    // Set the mode to development
    mode: 'development',
    
    // Module rules for file processing
    module: {
        rules: [
            {
                use: "babel-loader",        // Use Babel for JavaScript and JSX files
                test: /\.(js|jsx)$/,        // Match JavaScript and JSX files
                exclude: /node_modules/     // Exclude the 'node_modules' directory
            },
            {
                use: ["style-loader", "css-loader"],  // Use style-loader and css-loader for CSS files
                test: /\.css$/i                       // Match CSS files
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,      // Match image files (GIF, PNG, JPEG, SVG)
                use: [
                    "file-loader",                   // Use file-loader for image files
                    {
                        loader: "image-webpack-loader", // Use image-webpack-loader for image optimization
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true,       // webpack@2.x and newer
                        },
                    },
                ],
            }
        ]
    },
    
    // Resolve file extensions automatically
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    
    // Enable inline source maps for better debugging
    devtool: "inline-source-map",
};
