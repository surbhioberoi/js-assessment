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
    arr[arr.length] = item;
    return arr;

  },

  truncate : function(arr) {
    var newArr = arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    var newArr = [item];
    for (var i = 0; i<arr.length; i++) {
      newArr[newArr.length] = arr[i];

    }
    return newArr;
  },

  curtail : function(arr) {
    var newArr = [];
    for (var i = 1; i<arr.length; i++){
      newArr[i-1] = arr[i];
    }
    return newArr;
  },
  concat : function(arr1, arr2) {
    var arr1length = arr1.length;
    for (var i = 0; i < arr2.length; i++) {
      arr1[arr1length + i] = arr2[i];
    }
    return arr1;
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
