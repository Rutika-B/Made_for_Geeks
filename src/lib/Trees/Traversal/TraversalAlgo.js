/*A tree data-structure which create a static binary tree
This is used to get expected traversal order given the tree structure
*/

function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function Tree(rootNode) {
  this.root = null;
  this.visited = []; //keeps the sequence of the nodes in which they are visited

  if (typeof rootNode !== "undefined") {
    this.root = new Node(rootNode);
  } else {
    throw new Error("Enter valid root element. Root node can't be empty");
  }
  /*Inserts a new node to the tree. if targetnode is provided then adds the newNode to its left/right based on the value of direction
    provided as an argument and if not provided then set it as roots left or right child*/
  this.add = function (value, dir, targetNode = null) {
    const newNode = new Node(value);

    if (targetNode === null) {
      this.root[dir] = newNode;
    } else {
      const position = this.levelorderTraversal(targetNode); //returns the position of the targetNode
      position[dir] = newNode;
    }
  };

  /*performs level order traversal. If given any node as an argument then return that node's position else
    updates the sequence of the visited nodes*/
  this.levelorderTraversal = function (searchNode = -1) {
    const queue = [];
    let currentNode = this.root;
    queue.push(currentNode);
    if (this.visited.length > 0) this.visited = [];
    while (queue.length > 0) {
      currentNode = queue.shift();
      if (currentNode !== null) {
        if (searchNode === -1) {
          this.visited.push(currentNode.value);
        }
        if (currentNode.value === searchNode && searchNode !== -1) {
          return currentNode;
        }
        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }
        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }
    }
  };

  this.zigzagTraversal = function () {
    const queue = [];
    let currentNode = this.root;
    queue.push(currentNode);
    let flag = 0;
    if (this.visited.length > 0) this.visited = [];
    while (queue.length > 0) {
      let l = queue.length;
      const ds = [];
      for (let i = 0; i < l; i++) {
        currentNode = queue.shift();
        if (currentNode !== null) {
          ds.push(currentNode.value);

          if (currentNode.left !== null) {
            queue.push(currentNode.left);
          }
          if (currentNode.right !== null) {
            queue.push(currentNode.right);
          }
        }
      }
      if (flag == 0) {
        for (let i = 0; i < ds.length; i++) {
          const element = ds[i];
          this.visited.push(element);
        }

        flag = 1;
      } else {
        ds.reverse();
        for (let i = 0; i < ds.length; i++) {
          const element = ds[i];
          this.visited.push(element);
        }

        flag = 0;
      }
    }
    console.log(this.visited);
  };

  /*Recursively performs inorder traversal and updates the sequence of visited node*/
  this.inorderTraversal = function (node = this.root) {
    if (node === this.root && this.visited.length > 0) this.visited = [];
    if (node !== null) {
      this.inorderTraversal(node.left);
      this.visited.push(node.value);
      this.inorderTraversal(node.right);
    }
  };

  /*Recursively performs preorder traversal and updates the sequence of visited node*/
  this.preorderTraversal = function (node = this.root) {
    if (node === this.root && this.visited.length > 0) this.visited = [];
    if (node !== null) {
      this.visited.push(node.value);
      this.preorderTraversal(node.left);
      this.preorderTraversal(node.right);
    }
  };

  /*Recursively performs postorder traversal and updates the sequence of visited node*/
  this.postorderTraversal = function (node = this.root) {
    if (node === this.root && this.visited.length > 0) this.visited = [];
    if (node !== null) {
      this.postorderTraversal(node.left);
      this.postorderTraversal(node.right);
      this.visited.push(node.value);
    }
  };
  // Boundary Traversal-----------------------------------
  this.isLeaf = function (tmp = this.root) {
    return tmp.left === null && tmp.right === null;
  };
  this.leftBoundary = function () {
    let tmp = this.root.left;
    while (tmp) {
      if (!this.isLeaf(tmp)) {
        this.visited.push(tmp.value);
      }
      if (tmp.left) {
        tmp = tmp.left;
      } else {
        tmp = tmp.right;
      }
    }
  };
  this.rightBoundary = function () {
    let tmp = this.root.right;
    const ds = [];
    while (tmp) {
      if (!this.isLeaf(tmp)) {
        ds.push(tmp.value);
      }
      if (tmp.right) {
        tmp = tmp.right;
      } else {
        tmp = tmp.left;
      }
    }
    ds.reverse();
    for (let i = 0; i < ds.length; i++) {
      const element = ds[i];
      this.visited.push(element);
    }
  };
  this.addLeaves = function (node = this.root) {
    if (this.isLeaf(node)) {
      this.visited.push(node.value);
    }
    if (node.left) {
      this.addLeaves(node.left);
    }
    if (node.right) {
      this.addLeaves(node.right);
    }
  };

  this.boundaryTraversal = function () {
    this.visited = [];
    this.visited.push(this.root.value);
    this.leftBoundary();
    this.addLeaves();
    this.rightBoundary();
  };
  this.getTraversalOrder = function () {
    console.log(`${this.visited}`);
    return this.visited;
  };
}

export default Tree;
