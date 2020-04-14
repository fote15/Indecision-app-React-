const path = require('path');

module.exports = {
    entry: __dirname+"/src/app.js",
    output: {
        path:path.join(__dirname,'public'),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            use: 'babel-loader',
            test: /.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/,
            use: ['style-loader',
             
            'css-loader',
            'sass-loader',
            ]
            
        }

    ]
    },
    devtool: "eval-cheap-module-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'public')
      },
}