module.exports = function(grunt) {
    // grunt.loadNpmTasks('grunt-webpack');
    
    require('load-grunt-config')(grunt);

    grunt.registerTask('compileJS', function(target) {
        grunt.task.run([
            'webpack:' + target
        ]);
    });
    
    grunt.registerTask('compileCSS', function() {
        grunt.task.run([
            'sass',
            'cssmin',
            'autoprefixer'
        ]);
    });

    grunt.registerTask('lint', function() {
        grunt.task.run(['eslint']);
    });
    
    grunt.registerTask('night', function() {
        grunt.task.run(['nightwatch']);
    });
};