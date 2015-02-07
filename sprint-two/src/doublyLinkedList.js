var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.nodes = [];

  list.addToTail = function(value){
    var newNode = Node(value);
    var length = list.nodes.length;
    if (length === 0) {
      list.head = newNode;
    }else{
      newNode.previous = list.tail;
      list.tail.next = newNode;
    }
    list.nodes.push(newNode);
    list.tail = newNode;
  };

  list.removeHead = function(){
    if(list.nodes.length <= 1){
      list.tail = null;
      list.head = null;
    } else {
      var oldHead = list.head;
      var oldHeadValue = list.head.value;

      list.head = list.head.next;
      list.head.previous = null;
    }

    // if length is one, stop here
    if(list.nodes.length !== 0){
      return list.nodes.shift().value;
    }

  };

  list.contains = function(target){
    for (var i = 0; i < list.nodes.length; i++) {
      if (list.nodes[i].value === target) return true;
    }
    return false;
  };

  list.addToHead = function(value){
    var newNode = Node(value);
    var length = list.nodes.length;
    if(length === 0) {
      list.tail = newNode;
    }else{
      newNode.next = list.head;
      list.head.previous = newNode;
    }
    list.head = newNode;
    list.nodes.unshift(newNode);
  };

  list.removeTail = function(){
    if(list.nodes.length <= 1){
      list.tail = null;
      list.head = null;
    }else{
      var oldTail = list.tail;
      var oldTailValue = list.tail.value;
      list.tail = list.tail.previous;
      list.tail.next = null;
    }

    if(list.nodes.length !== 0){
      return list.nodes.pop().value;
    }
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  addToTail - big O notation O(1)

  removeHead - big O notation O(1)

  contains - big O notation O(n)

 */
