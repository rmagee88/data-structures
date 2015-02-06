var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(!this.contains(item)){
    this._storage.push(item);
  }
};

setPrototype.contains = function(item){
  for(var i = 0; i < this._storage.length; i++){
    if(this._storage[i] === item){
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item){
  for(var i = 0; i < this._storage.length; i++){
    if(this._storage[i] === item){
      this._storage = this._storage.slice(0, i-1).concat(this._storage.slice(i+1));
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
