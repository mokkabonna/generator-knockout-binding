'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');


var UpdateGenerator = yeoman.generators.Base.extend({
  init: function() {
    var self = this;
    var existingBower = path.join(process.cwd(), 'bower.json');
    var existingReadme = path.join(process.cwd(), 'README.md');

    this.pkg = require('../package.json');

    try {
      this.name = require(existingBower).name.split('.').pop();
      this.username = this.readFileAsString(existingReadme).match(/travis-ci\.org\/([^\/]+)\//)[1];
      this.prettyName = this.name[0].toUpperCase() + this.name.substr(1);
    } catch (e) {
      throw new Error('Could not read bower or readme');
    }
  },
  app: function app() {
    this.mkdir('src');
    this.mkdir('spec');

    this.copy('../../app/templates/_package.json', 'package.json');
    this.copy('../../app/templates/_karma.conf.js', 'karma.conf.js');
    this.copy('../../app/templates/_Gruntfile.js', 'Gruntfile.js');
  },

  projectfiles: function projectfiles() {
    this.copy('../../app/templates/travis.yml', '.travis.yml');
    this.copy('../../app/templates/editorconfig', '.editorconfig');
    this.copy('../../app/templates/gitignore', '.gitignore');
    this.copy('../../app/templates/jshintrc', '.jshintrc');
    this.copy('../../app/templates/spec/jshintrc', 'spec/.jshintrc');
  },


});

module.exports = UpdateGenerator;
