module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            release:{
              files: {
                'dist/register.js': 'register.js'
              }
            }       
        },
        cssmin: {  
            'dist/register.css': 'register.css'
        },
        htmlmin: {
            options: {
              collapseWhitespace: true,
              preserveLineBreaks: false
            },
            files: {
              src: 'index.html',
              dest: 'dist/index.html'
            }
        }
        
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    
    grunt.registerTask('default', ['htmlmin']);
    grunt.registerTask('default', ['uglify:release']);
    grunt.registerTask('default', ['cssmin']); 
};