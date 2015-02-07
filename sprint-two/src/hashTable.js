var HashTable = function(){
  this._limit = 8;
  this._size = 0;
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
  this._size++;

  if((this._size/this._limit) >= .75){
    this._limit = this._limit * 2;
    this.resize();
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(i);

  if(Array.isArray(result)) {
    for(var i = 0; i < result.length; i++){
      if(result[i][0] === k){
        return result[i][1];
      }
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
        result.splice(j, 1);
        this._storage.set(i, result);

        this._size--;

        if((this._size/this._limit) <= .25 && this._limit > 8){
          this._limit = this._limit / 2;
          this.resize();
        }
      }
    }
  }

};

HashTable.prototype.resize = function(){
  var oldStorage = this._storage;
  this._storage = LimitedArray(this._limit);
  this._size = 0;

  var this_context = this;
  oldStorage.each(function(value, key, array){
    if(Array.isArray(value)){
      for(var i = 0; i < value.length; i++){
        this_context.insert(value[i][0], value[i][1]);
      }
    }
  });

};


/*
 * Complexity: What is the time complexity of the above functions?
  Insert - O(1)
  Retrieve - O(1)
  Remove - O(1)
 */
