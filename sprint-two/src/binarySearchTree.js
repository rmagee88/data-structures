var BinarySearchTree = function(value){
  var someInstance = Object.create(BinarySearchTree.prototype);
  someInstance.left = null;
  someInstance.right = null;
  someInstance.value = value;


  return someInstance;

};

BinarySearchTree.prototype.left = function() {
  return this.left;
};

BinarySearchTree.prototype.right = function() {
  return this.right;
};

BinarySearchTree.prototype.insert = function(value) {
  // if value greater than current value
  if (value > this.value) {
    if (this.right === null) {
      // there isn't anything
      this.right = BinarySearchTree(value);
    } else {
      // there is something
      this.right.insert(value);
    }
  } else if (value < this.value) {
  // if value less than current value
    if (this.left === null) {
      // there isn't anything
      this.left = BinarySearchTree(value);
    } else {
      // there is something
      this.left.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (value > this.value) {
    if (this.right === null) {
      return false;
    }else {
      return false || this.right.contains(value);
    }
  } else {
    if (this.left === null) {
      return false;
    }else {
      return false || this.left.contains(value);
    }
  }
  return false;


};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);

  if(this.left) this.left.depthFirstLog(callback);

  if(this.right) this.right.depthFirstLog(callback);
};

BinarySearchTree.prototype.breadthFirstLog = function(callback){

  var queue = [];

  queue.push(this);
  var getLineUp = function(context) {

    context.left && queue.push(context.left);
    context.right && queue.push(context.right);

    context.left && getLineUp(context.left);
    context.right && getLineUp(context.right);

  };
  getLineUp(this);

  while(queue.length !== 0){
    callback(queue.shift().value);
  }

};
/*
 * Complexity: What is the time complexity of the above functions?
 insert - O(log(n))
 contains - O(log(n))
 depthFirstLog - O(n)
 */
