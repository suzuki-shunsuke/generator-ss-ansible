'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  writing: function () {
    this.fs.directory(
      this.templatePath('.'),
      this.destinationPath('.')
    );
  }
});
