exports = typeof window === 'undefined' ? global : window;


exports.asyncAnswers = {
  async: function(value) {
    var promise = jQuery.Deferred();
    setTimeout(function(){
        promise.resolve(value);
    }, 500);
    return promise.promise();

  },

  manipulateRemoteData: function(url) {
    var promise = jQuery.Deferred();
    $.get(url).done(function(data) {
        var sorted = [];
        for(var i = 0; i < data.people.length; i++){
            sorted.push(data.people[i].name);
        }
        sorted.sort();
        promise.resolve(sorted);
    });
    return promise.promise();
  }
};
