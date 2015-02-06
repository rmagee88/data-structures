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

BinarySearchTree.prototype.depthFirstLog = function() {

};

/*
 * Complexity: What is the time complexity of the above functions?
 insert -
 contains -
 depthFirstLog -
 */
