var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.last = 0;
  someInstance.storage = {};

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


