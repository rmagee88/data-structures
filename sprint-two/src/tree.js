var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  // your code here

  newTree.children = [];

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
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



/*
 * Complexity: What is the time complexity of the above functions?
addChild - big O notation O(1)

contains - big O notation

 */
