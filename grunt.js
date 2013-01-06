/*global module:false*/
module.exports = function(grunt) { 
  // Project configuration.
  grunt.initConfig({
    pkg : '<json:package.json>',
    meta : {
      banner : '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    lint: {
      files: ['grunt.js', 'js/*.js', 'spec/javascripts/*Spec.js']
    },
    jasmine : {
      src     : ['js/libs/**/*.js', 'js/*[^(min)].js', 'spec/javascripts/libs/**/*.js'],
      helpers : 'spec/javascripts/helpers/**/*.js',
      specs   : 'spec/javascripts/**/*.js'
    },
    watch : {
      files: ['spec/javascripts/helpers/*.js', 'spec/javascripts/*Spec.js', 'js/*.js'],
      tasks: 'lint jasmine growl:jasmine'
    },
    growl : {
      jasmine : {
        title   : 'Jasmine',
        message : 'Tests passed successfully'
      }
    },
    min : {
      dist : {
        src  : ['<banner:meta.banner>', 'js/<%= pkg.name %>.js'],
        dest : 'js/<%= pkg.name %>.min.js'
      }
    }
  });

  // Lib tasks.
  grunt.loadNpmTasks('grunt-growl');
  grunt.loadNpmTasks('grunt-jasmine-runner');

  // Default task.
  grunt.registerTask('default', 'lint jasmine growl:jasmine');  

  // Travis CI task.
  grunt.registerTask('travis', 'coffee jasmine');
};
