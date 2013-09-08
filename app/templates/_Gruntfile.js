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
            //Task for installing bower packages, used in travis
            bower: {
                options: {
                    copy: false,
                },
                install: {},
            },
            //This task will install all versions of dependencies defined in bower.json and run the tests for all of them
            "bower-verify": {
                options: {
                    showTasksOutput: false,
                    completeOnError: true,
                },
                test: {
                    tasks: ['karma:once']
                }
            },
            "gh-pages": {
                options: {
                    base: 'dist'
                },
                src: ['**']
            },
            copy: {
                demo: {
                    files: [{
                        expand: true,
                        src: ['lib/bootstrap/dist/css/bootstrap.min.css'],
                        dest: 'dist/'
                    }]
                }
            },
            replace: {
                example: {
                    src: 'demo.html', // source files array (supports minimatch)
                    dest: 'dist/index.html', // destination directory or file
                    replacements: [{
                        from: /<script.*demo.*\/script>/g, // regex replacement ('Fooo' to 'Mooo')
                        to: '<script src="demo.js"></script>'
                    }]
                }
            },
            requirejs: {
                demo: {
                    options: {
                        name: 'lib/almond/almond',
                        include: 'demo',
                        insertRequire: ['demo'],
                        wrap: true,
                        baseUrl: "./",
                        optimize: 'none',
                        mainConfigFile: "demo.js",
                        out: "dist/demo.js"
                    }
                }
            },
            karma: {
                options: {
                    configFile: 'karma.conf.js',
                    browsers: ['PhantomJS']
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

        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-text-replace');
        grunt.loadNpmTasks('grunt-contrib-requirejs');
        grunt.loadNpmTasks('grunt-bower-task');
        grunt.loadNpmTasks('grunt-bower-verify');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-gh-pages');
        grunt.loadNpmTasks('grunt-karma');


        //For development
        grunt.registerTask('develop', ['jshint', 'karma:server', 'watch:scripts']);

        //For testing
        grunt.registerTask('test', ['jshint', 'karma:once']);
        grunt.registerTask('test:full', ['jshint', 'bower-verify']);

        //For publishing demo to github pages
        grunt.registerTask('publish', ['requirejs', 'replace', 'copy', 'gh-pages']);
    };
})();
