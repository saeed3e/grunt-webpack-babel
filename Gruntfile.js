module.exports = function(grunt) {
    grunt.initConfig({
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
    });

    grunt.file.expand('./node_modules/grunt-*/tasks').forEach(grunt.loadTasks);
    require('./node_modules/grunt-config-merge')(grunt);
    require('./grunt-default.js')(grunt);
};
