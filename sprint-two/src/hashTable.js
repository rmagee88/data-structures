var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  console.log("k: " +k);
  console.log("v: "+v)
  var i = getIndexBelowMaxForKey(k, this._limit);

  if(this._storage.get(i) !== undefined){
    var previous = this._storage.get(i);
    if(!Array.isArray(previous)){
      previous = [previous];
    }
    this._storage.set(i,previous.concat(v));
  }else{
  //   this._limit = this._limit*2;

  //   var oldStorage = this._storage;
  //   this._storage = LimitedArray(this._limit);

  //   oldStorage.each(function(value, key, array){
  //     this.insert(value, value);
  //   });

  //   this.insert(k,v);
  //   // return   //redo index for imput
  // }else{
    this._storage.set(i, v);
  }
  // }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(i);
  if(Array.isArray(result)){

    for(var i = 0; i < result.length; i++){
      if(result[i] === k){
        return k;
      }
    }
  }
  // ["hello", "hi", "what", "adsfasd", "Adsfasdf "]
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  this._storage.set(i, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
