var webpack = require("./tasks/webpack.js");

module.exports = function(grunt) {
    grunt.mergeConfig({
        
    });
    grunt.registerTask('default', [ 'webpack']);
    webpack(grunt);
};
    