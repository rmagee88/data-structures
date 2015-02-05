var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.last = 0;
  // this
};

Stack.prototype.push = function(value) {
  this.storage[this.last] = value;
  this.last++;
};

Stack.prototype.pop = function() {
  var result = this.storage[this.last-1];
  delete this.storage[this.last-1];
  this.last && this.last--;
  return result;
};

Stack.prototype.size = function() {
  return this.last;
};
