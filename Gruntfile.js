module.exports=function (grunt) {  
  grunt.initConfig({
      htmlmin:{
          options:{
              collapseWhitespace: true,
              preserveLineBreaks: false
          },
          files:{
              src:'./dist/index.html',
              dest:'dist/index.html'
          }
      },
      concat: {
        js: {
          src: ['js/*.js', './com/**/*.js'],
          dest: 'dist/bundle.js'
        },
        css: {
          src: ['css/*.css', './com/**/*.css'],
          dest: 'dist/bundle.css'
        }
      },
      cssmin:{
        'dist/bundle.min.css': ['dist/bundle.css']
      },
      uglify:{
          'dist/bundle.min.js':['dist/bundle.js']
      },
      usemin: {
          html: ['dist/index.html']
      },
      copy: {
        html: {
          src: './index.html',
          dest: './dist/index.html'
        }
      }
    
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.registerTask('default', ['copy:html','concat', 'uglify', 'cssmin','usemin', 'htmlmin']);
}