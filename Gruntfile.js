module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);
  
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
    },
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'src/client/styles/main.css': 'src/client/styles/main.scss'
        }
      }
    }
  });

  grunt.registerTask('default', [
    'wiredep',
    'angularFileLoader',
    'watch'
  ]);
};
