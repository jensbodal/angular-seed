module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-angular-file-loader');

  grunt.initConfig({
    wiredep: {
      task: {
        src: ['src/client/index.html'],
        // aboslute paths instead of relative paths http://stackoverflow.com/a/26024882/679716
        ignorePath: /^(\/|\.+(?!\/[^\.]))+\.+/ 
      }
    },
    watch: {
      file: ['bower_components/*'],
      tasks: ['wiredep']
    },
    angularFileLoader: {
      options: {
        scripts: ['src/client/app/**/*.js'],
        relative: false
      },
      your_target: {
        src: ['src/client/index.html']
      }
    }
  });

  grunt.registerTask('default', ['wiredep']);
  grunt.registerTask('default', ['angularFileLoader']);
  grunt.registerTask('changes', ['watch']);
};
