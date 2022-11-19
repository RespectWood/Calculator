import { type Configuration } from "webpack"
import CopyPlugin from "copy-webpack-plugin"
import { resolve } from "path"

const config: Configuration = {
    entry: {
        "index": resolve("src", "index.ts")
    },
    output: {
        filename: '[name].js',
        path: resolve('dist'),
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.ts'],
        alias: { 
            src: resolve("src"), 
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, 
                loader: 'ts-loader'
            },
        ]
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: resolve("static"),
                    to: resolve("dist")
                }
            ]
        })
    ]
}

export default config