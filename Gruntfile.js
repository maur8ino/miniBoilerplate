/*global module:false*/
module.exports = function(grunt) { 
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // meta: {
    //   banner : '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
    //     '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
    //     '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
    //     '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
    //     ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    // },
    jshint: {
      files: ['Gruntfile.js', 'js/*.js', 'spec/javascripts/*Spec.js']
    },
    // jasmine : {
    //   src     : ['js/libs/**/*.js', 'js/*[^(min)].js', 'spec/javascripts/libs/**/*.js'],
    //   helpers : 'spec/javascripts/helpers/**/*.js',
    //   specs   : 'spec/javascripts/**/*.js'
    // },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
    // watch : {
    //   files: ['spec/javascripts/helpers/*.js', 'spec/javascripts/*Spec.js', 'js/*.js'],
    //   tasks: 'lint jasmine growl:jasmine'
    // },
    // growl : {
    //   jasmine : {
    //     title   : 'Jasmine',
    //     message : 'Tests passed successfully'
    //   }
    // },
    // min : {
    //   dist : {
    //     src  : ['<banner:meta.banner>', 'js/<%= pkg.name %>.js'],
    //     dest : 'js/<%= pkg.name %>.min.js'
    //   }
    // }
  });

  // Lib tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');
  // grunt.loadNpmTasks('grunt-growl');
  // grunt.loadNpmTasks('grunt-jasmine-runner');

  // Default task.
  grunt.registerTask('default', 'jshint');  

  // Travis CI task.
//  grunt.registerTask('travis', 'coffee jasmine');
};
