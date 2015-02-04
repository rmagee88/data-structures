var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    // var last = Object.keys(storage)[Object.keys(storage).length-1];

    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    // var result = storage[Object.keys(storage)[0]];
    var result = storage[0];

    for(var key in storage) {
      storage[key-1] = storage[key];
    }
    delete storage[-1];
    size && size--;
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
