function BineryOrderTree() {
  var root = null;
  this.insert = function(val) {
    if(root == null) {
      root = new Node(val)
    }else {
      insertNode(root, val)
    }
  }
  this.inOrderTraverse = function(callback) {
    inOrderTraverseNode(root, callback)
  }
  this.preOrderTraverse = function(callback) {
    preOrderTraverseNode(root, callback)
  }
  this.postOrderTraverse = function(callback) {
    postOrderTraverseNode(root, callback)
  }
}

// Creating node
function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

//Inserting node
function insertNode(node,val) {
  let newNode = new Node(val);
  if(val < node.val) {
    if(node.left === null){
      node.left = newNode
    }else {
      insertNode(node.left,val)
    }
  }else if(val > node.val) {
    if(node.right === null) {
      node.right = newNode
    }else {
      insertNode(node.right, val)
    }
  }
}


// Traverse Node with parents in middle
function inOrderTraverseNode(node, callback) {
 if(node !== null) {
   inOrderTraverseNode(node.left, callback);
   callback(node.val);
   inOrderTraverseNode(node.right, callback);
 }
}

// Traverse node with parents at the begining
function preOrderTraverseNode(node, callback) {
  if(node !== null) {
    callback(node.val);
    preOrderTraverseNode(node.left, callback);
    preOrderTraverseNode(node.right, callback);
  }
}

// Traverse node with parents in the end
function postOrderTraverseNode(node, callback) {
  if(node !== null) {
    postOrderTraverseNode(node.left, callback);
    postOrderTraverseNode(node.right, callback);
    callback(node.val)
  }
}
function callback(val) {
  console.log(val);
}

//------------------------------------------------test--------------------------------------

// Creation a binery order tree
var nodes = [8,3,10,1,6,14,4,7,13];
var bineryOrderTree = new BineryOrderTree();
nodes.forEach(function(val){
  bineryOrderTree.insert(val);
})



console.log('----------------Parents start traverse-----------------')
bineryOrderTree.preOrderTraverse(callback)

console.log('----------------Parents in the middle traverse-----------------')
bineryOrderTree.inOrderTraverse(callback)

console.log('----------------Parents in the end traverse-----------------')
bineryOrderTree.postOrderTraverse(callback)
