/*global module:false*/
module.exports = function(grunt) { 
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: "/*!\n" +
        " *  Project: <%= pkg.title || pkg.name %>\n" +
        " *  Version: <%= pkg.version %> (<%= grunt.template.today('yyyy-mm-dd') %>)\n" +
        " *  Description: <%= pkg.description %>\n" +
        " *  Author: <%= pkg.author.name %> <<%= pkg.author.email %>>\n" +
        "<%= pkg.homepage ? ' *  Homepage: ' + pkg.homepage + '\\n' : '' %>" +
        " *  License: <%= _.pluck(pkg.licenses, 'type').join(', ') %>\n" +
        "*/\n"
    },
    jshint: {
      files: ['Gruntfile.js', 'js/*[^(min)].js', 'spec/javascripts/*Spec.js']
    },
    jasmine: {
      src: ['js/*[^(min)].js', 'spec/javascripts/libs/**/*.js'],
      options: {
        specs: 'spec/javascripts/*Spec.js',
        helpers: 'spec/javascripts/helpers/**/*.js',
        vendor: 'js/vendor/**/*.js'
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'jasmine']
    },
    clean: {
      uglify: ['js/<%= pkg.name %>.min.js']
    },
    uglify: {
      options: {
        banner: '<%= meta.banner %>'
      },
      dist: {
        files: {
          'js/<%= pkg.name %>.min.js': ['js/<%= pkg.name %>.js']
        }
      }
    },
    notify: {
      uglify: {
        options: {
          title: 'UglifyJS',
          message: 'Files compressed successfully'
        }
      },
      jasmine: {
        options: {
          title: 'Jasmine',
          message: 'Tests passed successfully'
        }
      }
    }
  });

  // Lib tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-notify');

  // Default task.
  grunt.registerTask('default', ['jshint', 'jasmine', 'notify:jasmine']);
  grunt.registerTask('compress', ['clean:uglify', 'jshint', 'uglify:dist', 'notify:uglify']);

  // Travis CI task.
//  grunt.registerTask('travis', 'coffee jasmine');
};
