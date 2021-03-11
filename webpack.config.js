"use strict";

const path = require(`path`);

module.exports = {
    mode: `development`,
    entry: {
        bundle: `./js/script.js`
    },
    output: {
        filename: `[name].js`,
        path: path.resolve(__dirname, `./dist/js`)
    },
    devtool: `source-map`,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: `babel-loader`,
                    options: {
                        presets: [['@babel/preset-env', {
                            debug: true,
                            corejs: 2,
                            useBuiltIns: "usage"
                        }]]
                    }
                }
            }
        ]
    }
};