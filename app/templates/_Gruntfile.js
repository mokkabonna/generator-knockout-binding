/*jshint node:true, es3:false*/
(function() {
  'use strict';
  module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      jshint: {
        all: ['Gruntfile.js', 'src/**/*.js', 'tests/*.js']
      },
      watch: {
        options: {
          spawn: false
        },
        //watches all scripts an rerun hinting and the tests immediately
        scripts: {
          files: ['<%= jshint.all %>'],
          tasks: ['jshint', 'karma:server:run']
        }
      },
      karma: {
        options: {
          configFile: 'karma.conf.js'
        },
        //for a single run of test
        once: {
          singleRun: true,
        },
        //for use while developing and in combination with watch task
        server: {
          background: true,
        },
      }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');

    //For development
    grunt.registerTask('develop', ['jshint', 'karma:server', 'watch:scripts']);

    //For testing
    grunt.registerTask('test', ['jshint', 'karma:once']);
  };
})();
