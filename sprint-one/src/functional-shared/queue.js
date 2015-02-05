var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage : {},
    first : 0,
    last : 0
  };

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue : function(value){
    console.log(this.last);
    console.log(this.storage);
    this.storage[this.last] = value;
    this.last++;
  },

  dequeue : function(){
    var result = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return result;
  },

  size : function() {
    console.log(this.first);
    console.log(this.last);
    return Math.max(0, this.last - this.first);
  }
};



