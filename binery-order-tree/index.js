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
  this.search = function(val) {
    searchNode(root, val);
  }
  this.remove = function(val) {
    if(root===null)return null;
    removeNode(root, val)
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

// Search Node
function searchNode(node, val) {
  if(node === null) {
    console.log(val + ' is not here')
  }else {
    if(val < node.val) {
      searchNode(node.left,val)
    }else if(val > node.val) {
      searchNode(node.right, val)
    }else{
      console.log('Yes, find it! This is '+ node.val)
    }
  }
}

// Remove Node
function removeNode(node, val) {
  if(node === null) return null;
  if(val < node.val) {
    node.left = removeNode(node.left, val)
  }else if(val > node.val) {
    node.right = removeNode(node.right, val)
  }else {
    if(node.left === null && node.right === null){
      node = null;
      return node;
    }else if(node.right === null) {
      node = node.left;
      return node;
    }else if(node.left === null) {
      node = node.right;
      return node;
    }else {
      var axu = minNode(node.right);
      node.val = axu.val;
      removeNode(node.right, axu.val)
      return node;
    }
  }
}

// The minimum node
function minNode(node) {
 if(node) {
   while(node && node.left !== null) {
     node = node.left
   }
   return node;
 }
}


// The maximum node
function maxNode(node) {
  if(node) {
    while(node && node.right !== null){
      node = node.right;
    }
    return node;
  }
}


//------------------------------------------------test--------------------------------------

// Creation a binery order tree
var nodes = [8,3,10,1,2,6,14,4,7,13];
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

console.log('----------------Search Node-----------------')
bineryOrderTree.search(3);
bineryOrderTree.search(43);


console.log('----------------Remove Node-----------------')
bineryOrderTree.remove(3);

console.log('----------------Parents in the middle traverse-----------------')
bineryOrderTree.inOrderTraverse(callback)