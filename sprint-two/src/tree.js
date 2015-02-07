var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);

  newTree.children = [];
  newTree.parent = null;

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  // create child
  var newTree = Tree(value);

  // Sent Part of child, to this (tree)
  newTree.parent = this;

  // adds child to this tree's children
  this.children.push(newTree);
};

treeMethods.contains = function(target){
  var isFound = false;
  if(this.value === target){
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      isFound = isFound || this.children[i].contains(target);
    }
  }
  return isFound;
};

treeMethods.removeFromParent = function() {
  if (this.parent) {
    // find the parent of current tree
    var parentTree = this.parent;
    // remove from parentTree.children
    for (var i = 0; i < parentTree.children.length; i++){
      if (parentTree.children[i] === this) {
        parentTree.children.splice(i, 1);
      }
    }
    // set current tree's parent value to null
    this.parent = null;

  }


};


/*
 * Complexity: What is the time complexity of the above functions?
addChild - big O notation O(1)

contains - big O notation

 */
