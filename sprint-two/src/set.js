var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  set._limit = 8;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  var i = getIndexBelowMaxForKey(item, this._limit);

  if(!this.contains(item)){
    this._storage[i] = item;
  }

};

setPrototype.contains = function(item){
  var i = getIndexBelowMaxForKey(item, this._limit);
  if(this._storage[i] === undefined){
    return false;
  }

  return true ;
};

setPrototype.remove = function(item){
  var i = getIndexBelowMaxForKey(item, this._limit);

  if(this._storage[i] === item){
    this._storage.splice(i, 1);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * add: O(n) -> O(1)
 * contains: O(n) -> O(1)
 * remove: 0(n) -> O(1)
 */
