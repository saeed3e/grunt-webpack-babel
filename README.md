# grunt-webpack-babel

Use [webpack](https://github.com/webpack/webpack) with grunt.

## Getting Started
### First step
Setup [grunt] (http://gruntjs.com) by following command
  * npm install -g grunt-cli
  * npm install grunt --save-dev
  * npm install grunt-contrib-jshint --save-dev
  
then add [Gruntfile.js](http://gruntjs.com/getting-started) file

Check wheather grunt is successfully installed or not by command
```
grunt --version
```

### Second step
Intall [webpack](https://webpack.github.io/) by command
```
npm install webpack --save-dev
```

### Third step
Install [Babel](https://babeljs.io/) and it's loader
  * npm install grunt-babel --save-dev 
  * npm install lodash --save-dev 
  * npm install babel-plugin-lodash babel-cli babel-preset-es2015 --save-dev 

### Config File
```
webpack: {
            babel: {
               entry: "./entry.js",
                output: {
                    path: "./src/j/",
                    filename: "output.js"
                },
                module: {
                    loaders: [{
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components)/,
                        loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                        query: {
                            //plugins: ['transform-runtime']  //https://babeljs.io/docs/plugins/transform-runtime/
                            presets: ['es2015'],
                        }
                    }]
                }
            }
        }
```
  

## License
Licensed under the MIT license.
