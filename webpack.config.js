module.exports = {  
    entry: {
        js: [
            'babel-polyfill',
            './src/app.jsx'
        ]
    },
    output: {    
        publicPath: '/',    
        path: __dirname + '/public',    
        filename: 'bundle.js'  
    },  
    devServer: {    
        contentBase: './public',  
    },
    devtool: 'inline-source-map',
    module: {    
        rules: [    
            {      
                test: /\.(js|jsx)$/,      
                exclude: /node_modules/,      
                use: [
                    'babel-loader', 
                    'eslint-loader'
                ]    
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]  
    },
};
