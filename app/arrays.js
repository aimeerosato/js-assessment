exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === item){
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    return arr.reduce(function(a,b) {
      return a+b;
    });
  },

  remove: function(arr, item) {
    var removed = [];
    arr.forEach(function(value){
      if(value !== item){
        removed.push(value);
      }
    });
    return removed;
  },

  removeWithoutCopy: function(arr, item) {
    arr.sort(function(a,b){
      return a > b;
    });
    var counter = 0;
    var toggle = false;
    var firstIndex = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item && !toggle) {
        counter++;
        firstIndex = i;
        toggle = true;
      } else if(arr[i] === item){
        counter++;
      }
    }
    arr.splice(firstIndex, counter);
    return arr;
  },

  append: function(arr, item) {
    return arr.concat(item);
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    var sub1 = arr.slice(0, arr.length - index);
    var sub2 = arr.slice(index, arr.length);
    sub1.push(item);
    var inserted = sub1.concat(sub2);
    return inserted;
  },

  count: function(arr, item) {
    var counter = 0;
    arr.forEach(function(value){
      if(value === item){
        counter++;
      }
    });
    return counter;
  },

  duplicates: function(arr) {
    var sorted = arr.sort(function(a,b) {
      return a > b;
    });
    var results = [];
    for(var i = 0; i < sorted.length; i++){
      if(sorted[i] === sorted[i+1] && results.indexOf(sorted[i]) === -1){
        results.push(sorted[i]);
      }
    }
    return results;
  },

  square: function(arr) {
    return arr.map(function(value) {
      return value * value;
    });
  },

  findAllOccurrences: function(arr, target) {
    var occurrences = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === target){
        occurrences.push(i);
      }
    }
    return occurrences;
  }
};
