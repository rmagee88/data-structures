var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var last = 0;
  var start = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[last] = value;
    last++;
  };

  someInstance.dequeue = function(){
    var result = storage[start];

    delete storage[start];
    start++;
    return result;
  };

  someInstance.size = function(){

    return Math.max(0,last-start);
  };

  return someInstance;
};
