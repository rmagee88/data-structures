

var Graph = function(){
  this.storage = [];
  this.edges = [];

  // [[1,2], [1,3], [2,6]]

};

Graph.prototype.addNode = function(node){
  this.storage.push(node);
};

Graph.prototype.contains = function(node){
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === node) return true;
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  // delete from the storage array
  for (var i = 0; i < this.storage.length; i++) {
    if (node === this.storage[i]) {
      this.storage = this.storage.slice(0, i - 1).concat(this.storage.slice(i + 1));
    }
  }
  // call remove Edge with same node for both nodes
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i][0] === node || this.edges[i][1] === node) {
      this.removeEdge(this.edges[i][0], this.edges[i][1]);
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i][0] === fromNode && this.edges[i][1] === toNode ||
      this.edges[i][0] === toNode && this.edges[i][1] === fromNode) {
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (this.contains(fromNode) && this.contains(toNode)){
    this.edges.push([fromNode, toNode]);
  }

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i][0] === fromNode && this.edges[i][1] === toNode ||
      this.edges[i][0] === toNode && this.edges[i][1] === fromNode) {
      this.edges = this.edges.slice(0, i - 1).concat(this.edges.slice(i + 1));
    }
  }

};

Graph.prototype.forEachNode = function(cb){
  for (var i = 0; i < this.storage.length; i++) {
    cb(this.storage[i]);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */



