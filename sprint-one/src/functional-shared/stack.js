var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage : {},
    last : 0
  };

  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push : function(value) {
    this.storage[this.last] = value;
    this.last++;
  },

  pop : function() {
    var result = this.storage[this.last-1];
    delete this.storage[this.last-1];
    this.last && this.last--;
    return result;
  },

  size : function() {
    return this.last;
  }
};


