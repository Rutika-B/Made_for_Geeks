function Node(val, id) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.id = id;
  }
  
  function Tree(rootNode, id) {
    this.root = null;
    this.visited = []; //keeps the sequence of the nodes in which they are visited
  
    if (typeof rootNode !== "undefined") {
      this.root = new Node(rootNode, id);
    } else {
      throw new Error("Enter valid root element. Root node can't be empty");
    }
    /*Inserts a new node to the tree. if targetnode is provided then adds the newNode to its left/right based on the value of direction
      provided as an argument and if not provided then set it as roots left or right child*/
    this.add = function (value, dir, id, targetNode = null) {
      const newNode = new Node(value, id);
  
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
  
      while (queue.length > 0) {
        currentNode = queue.shift();
        if (currentNode !== null) {
          if (currentNode.id === searchNode && searchNode !== -1) {
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
  
    this.preorderTraversal = function (node = this.root) {
      if (node === this.root && this.visited.length > 0) this.visited = [];
  
      if (node !== null) {
        this.visited.push(node.id);
        this.preorderTraversal(node.left);
        this.vec.pop();
        this.preorderTraversal(node.right);
      }
    };
    this.getTraversalOrder = function () {
      return this.visited;
    };
    this.vec = [];
    this.ans = [];
    this.arr = [1, 2, 3];
    let index = 0;
    this.subSequence = function (node = this.root) {
      if (node.value === "3") {
        this.ans.push([...this.vec]);
        return;
      }
      if (node !== null) {
        this.vec.push(this.arr[node.value]);
  
        this.subSequence(node.left);
        this.vec.pop();
        this.subSequence(node.right);
      }
    };
    // this.vec = [];
    // this.ans = [];
    // this.arr = [1, 2, 3];
    // let index=0;
    // this.subSequence = function (node = this.root) {
    //   if (node.value === "3") {
    //     this.ans.push([...this.vec]);
    //     return;
    //   }
    //   if (node !== null) {
    //     this.vec.push(this.arr[node.value]);
    //     this.subSequence(node.left);
    //     this.vec.pop();
    //     this.subSequence(node.right);
    //   }
    // };
    this.getRecursionOrder = function () {
      return this.ans;
    };
  }
  
  export default Tree;
  