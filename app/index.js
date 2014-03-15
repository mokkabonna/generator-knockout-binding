'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var KnockoutBindingGenerator = module.exports = function KnockoutBindingGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
  var self = this;
  this.on('end', function() {
    this.installDependencies({
      skipInstall: options['skip-install'],
      callback: function() {
        console.log('Installed dependencies.');
        console.log(self.readFileAsString(path.join(__dirname, 'instructions.txt')));
      }
    });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(KnockoutBindingGenerator, yeoman.generators.Base);

KnockoutBindingGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'name',
    message: 'What is the name of your binding? knockout.bindingHandlers.',
  }, {
    name: 'username',
    message: 'What is your github username? Used for travis build images.',
  }];

  this.prompt(prompts, function(props) {
    this.name = props.name.toLowerCase();
    this.prettyName = this.name[0].toUpperCase() + this.name.substr(1);
    this.username = props.username;

    cb();
  }.bind(this));
};

KnockoutBindingGenerator.prototype.app = function app() {
  this.mkdir('src');
  this.mkdir('spec');

  this.copy('src/_binding.js', 'src/' + this.name + '.js');

  this.copy('spec/_binding.js', 'spec/' + this.name + '.js');
  this.copy('spec/_test-main.js', 'spec/test-main.js');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('_karma.conf.js', 'karma.conf.js');
  this.copy('_Gruntfile.js', 'Gruntfile.js');
  this.copy('_README.md', 'README.md');
};

KnockoutBindingGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('travis.yml', '.travis.yml');
  this.copy('editorconfig', '.editorconfig');
  this.copy('gitignore', '.gitignore');
  this.copy('jshintrc', '.jshintrc');
  this.copy('spec/jshintrc', 'spec/.jshintrc');
};
