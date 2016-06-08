//var Promise = require('bluebird');
exports = typeof window === 'undefined' ? global : window;


exports.asyncAnswers = {
  async: function(value) {
    console.log("value ", value); //evalates to TRUE
    // var promise = new Promise(
    //   function(resolve, reject){
    //     if(value){
    //      resolve("success");
    //     } else {
    //       reject(Error("NO"));
    //     }
    //   });
    // console.log("Here is promise: ", promise);
    // promise.then(function(val){
    //   console.log(val);
    //   return val;
    //});
    // promise.then(
    //     function(result){
    //       console.log(result);
    // })
    // .catch(function(err){
    //   console.log(err);
    // });
  },

  manipulateRemoteData: function(url) {

  }
};
