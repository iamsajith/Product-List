const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
target:'node',
 resolve:{
  fallback: {
    "url": require.resolve("url/"),
    "fs": false,
    "tls": false,
    "net": false,
    "path": false,
    "zlib": false,
    "http": false,
    "https": false,
    "stream": false,
    "crypto": false,
    "querystring": false

            }
 },
 plugins: [
        new NodePolyfillPlugin()
    ]
}
