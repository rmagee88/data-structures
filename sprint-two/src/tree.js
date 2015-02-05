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
  var val = false;
  if(this.value === target){
    val = true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      val = val || this.children[i].contains(target);
    }
  }
  return val;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
