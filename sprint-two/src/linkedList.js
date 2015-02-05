var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.nodes = [];

  list.addToTail = function(value){
    var newNode = Node(value);
    var length = list.nodes.length;
    if (length === 0) {
      list.head = newNode;
      list.tail = newNode;
    }
    list.nodes[length] = newNode;
    list.tail.next = newNode;
    list.tail = newNode;

  };

  list.removeHead = function(){
    var oldHead = list.head;
    var oldHeadValue = list.head.value;
    list.head = list.head.next;
    return list.nodes.shift().value;

  };

  list.contains = function(target){
    for (var i = 0; i < list.nodes.length; i++) {
      if (list.nodes[i].value === target) return true;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
