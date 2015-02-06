var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  // space is not open
  if(this._storage.get(i) !== undefined){
    var result = this._storage.get(i);
    result.push([k,v]);
    this._storage.set(i, result);
  }else{
    //space is open
    this._storage.set(i, [[k, v]]);
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(i);

  for(var i = 0; i < result.length; i++){
    if(result[i][0] === k){
      return result[i][1];
    }
  }

  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var result = this._storage.get(i);
  if(result !== undefined) {
    for(var j = 0; j < result.length; j++){
      if(result[j][0] === k){
        var newArray = result.slice(0,j-1).concat(result.slice(j+1));
        this._storage.set(i, newArray);
      }
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
