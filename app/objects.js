exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    obj.fn = fn;
    return obj.fn(this.greeting, this.name);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    var values = Object.keys(obj);
    var iterated = [];
    values.forEach(function(objKey) {
      for(var key in obj){
        if(key === objKey){
          iterated.push(objKey + ": " + obj[key]);
        }
      }
    });
    return iterated;
  }
};
