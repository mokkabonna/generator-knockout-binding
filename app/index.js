'use strict';
var fs = require('fs');
var path = require('path');
var yeoman = require('yeoman-generator');


var KnockoutBindingGenerator = yeoman.generators.Base.extend({
  init: function() {
    var self = this;
    var existingBower = path.join(process.cwd(), 'bower.json');
    var existingReadme = path.join(process.cwd(), 'README.md');

    this.pkg = require('../package.json');

    if (fs.existsSync(existingBower)) {
      this.existing = require(existingBower);
    }

    if (fs.existsSync(existingReadme)) {
      this.existingUsername = this.readFileAsString(existingReadme).match(/travis-ci\.org\/([^\/]+)\//)[1];
    }

    this.on('end', function() {
      if (!this.options['skip-install']) {
        this.installDependencies(function() {
          self.log('Installed dependencies.');
          self.log(self.readFileAsString(path.join(__dirname, 'instructions.txt')));
        });
      }
    });
  },
  askFor: function askFor() {
    var done = this.async();

    // have Yeoman greet the user.
    this.log(this.yeoman);

    var prompts = [{
      name: 'name',
      message: 'What is the name of your binding? knockout.bindingHandlers.',
      default: this.existing ? this.existing.name.split('.').pop() : ''
    }, {
      name: 'username',
      message: 'What is your github username? Used for travis build images.',
      default: this.existingUsername
    }];

    this.prompt(prompts, function(props) {
      this.name = props.name.toLowerCase();
      this.prettyName = this.name[0].toUpperCase() + this.name.substr(1);
      this.username = props.username;

      done();
    }.bind(this));
  },
  app: function app() {
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
  },

  projectfiles: function projectfiles() {
    this.copy('travis.yml', '.travis.yml');
    this.copy('editorconfig', '.editorconfig');
    this.copy('gitignore', '.gitignore');
    this.copy('jshintrc', '.jshintrc');
    this.copy('spec/jshintrc', 'spec/.jshintrc');
  },
});

module.exports = KnockoutBindingGenerator;
