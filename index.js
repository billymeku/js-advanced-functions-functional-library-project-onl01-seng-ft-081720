const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function() {
      fi.each({ one: 1, two: 2, three: 3 }, alert);
    },

    map: function() {
      let arr = [1,2,3]
      fi.map(arr, function (num) { return num * 3; });
    },

    reduce: function() {
      var sum = fi.reduce([1, 2, 3], function (acc, val, collection) { return acc + val; }, 0);
    },

    functions: function() {
      fi.functions(fi);
    },


  }
})()

fi.libraryMethod()
