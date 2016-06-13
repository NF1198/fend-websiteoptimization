module.exports = function(grunt) {

    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        copy: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.css'],
                    dest: 'dist/'
                }],
            },
        },
        uglify: {
            options: {},
            build: {
                expand: true,
                cwd: 'src/',
                src: '**/*.js',
                dest: 'dist/'
            }
        },
        cssmin: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'dist/',
                    src: ['**/*.css', '!*.min.css'],
                    dest: 'dist/',
                    ext: '.min.css'
                }]
            }
        },
        htmlmin: {
            build: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'src/index.html', // 'destination': 'source'
                    'dist/views/pizza.html': 'src/views/pizza.html'
                }
            },
        },
        responsive_images: {
            options: {
                engine: "im",
                upscale: false
            },
            build: {
                options: {
                    sizes: [{
                        width: 100,
                        quality: 60,
                        suffix: "_thumb",
                        rename: false
                    }, {
                        width: 320,
                        quality: 60,
                    }, {
                        name: 'large',
                        width: 640,
                        quality: 60
                    }, {
                        name: "large",
                        width: 1024,
                        suffix: "_x2",
                        quality: 60
                    }]
                },
                files: [{
                    expand: true,
                    src: ['**/*.{jpg,gif,png}', '!**/profilepic.jpg'],
                    cwd: 'src/',
                    dest: 'dist/'
                }]
            }
        },
        clean: {
            build: {
                src: ["dist/*"]
            },
            images: {
                src: ["dist/**/*.{jpg,gif,png}"]
            }
        }
    });



    // Default task(s).
    grunt.registerTask('default', ['copy', 'uglify', 'cssmin', 'htmlmin', 'responsive_images']);

};
