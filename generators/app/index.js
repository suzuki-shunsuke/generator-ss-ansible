'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  writing: function () {
    this.fs.copy(
      this.templatePath('production'),
      this.destinationPath('production')
    );
    this.fs.copy(
      this.templatePath('site.yml'),
      this.destinationPath('site.yml')
    );
    this.fs.copy(
      this.templatePath('webservers.yml'),
      this.destinationPath('webservers.yml')
    );
    this.fs.copy(
      this.templatePath('group_vars/.gitkeep'),
      this.destinationPath('group_vars/.gitkeep')
    );
    this.fs.copy(
      this.templatePath('host_vars/.gitkeep'),
      this.destinationPath('host_vars/.gitkeep')
    );
    this.fs.directory(
      this.templatePath('roles'),
      this.destinationPath('roles')
    );
  }
});
