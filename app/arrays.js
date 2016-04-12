exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var index = -1;
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === item) {
        index = i;
      }
    }
    return index;
  },

  sum : function(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;

  },

  remove : function(arr, item) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (!(arr[i] === item)){
        result.push(arr[i]);
      }

    }

    return result;

  },

  removeWithoutCopy : function(arr, item) {
    var indexOfItems = [];

    for (var i in arr) {
      if (arr[i] === item) {
        indexOfItems.push(i);
      }
    }

    for (var i in indexOfItems) {
      arr.splice(indexOfItems[i]-i, 1);
    }

    return arr;
  },

  append : function(arr, item) {

  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
