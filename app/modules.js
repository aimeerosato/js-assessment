exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
  //   var module = function(str1, str2) {
  //     this.greeting = str1;
  //     this.name = str2;
  //   };
  //   console.log(module);
  //   module.prototype.sayIt = function() {
  //     return this.greeting + ", " + this.name;
  //   };
  //   console.log(module.prototype.sayIt);
  // }
      this.greeting = str1;
      this.name = str2;
      this.sayIt = function() {
        return this.greeting + ", " + this.name;
      };
}

};
