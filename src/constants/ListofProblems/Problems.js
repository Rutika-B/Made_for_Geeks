const problems = {
  tree: {
    preorder: {
      title: "preorder traversal of the tree",
      statement: {
        brief:
          "Given root of the tree, return preorder traversal of it's node value, Preorder traversal is defined as a type of tree traversal that follows the Root-Left-Right policy where:",
        points: [
          "The root node of the subtree is visited first.",
          "Then the left subtree  is traversed.",
          "At last, the right subtree is traversed.",
        ],
      },
      examples: { input: "root = [1, null, 2, 3]", output: "[1, 2, 3]" },

      approach: [
        "1.Follow step 2 to 4 until root != NULL",
        "2.Write root -> data",
        "3.Preorder (root -> left)",
        "4.Preorder (root -> right)",
        "5.End",
      ],
      cpp: `// C++ program for preorder traversals

      #include <bits/stdc++.h>
      using namespace std;
      
      // Structure of a Binary Tree Node
      struct Node {
          int data;
          struct Node *left, *right;
          Node(int v)
          {
              data = v;
              left = right = NULL;
          }
      };
      
      // Function to print preorder traversal
      void printPreorder(struct Node* node)
      {
          if (node == NULL)
              return;
      
          // Deal with the node
          cout << node->data << " ";
      
          // Recur on left subtree
          printPreorder(node->left);
      
          // Recur on right subtree
          printPreorder(node->right);
      }
      
      // Driver code
      int main()
      {
          struct Node* root = new Node(1);
          root->left = new Node(2);
          root->right = new Node(3);
          root->left->left = new Node(4);
          root->left->right = new Node(5);
          root->right->right = new Node(6);
      
          // Function call
          cout << "Preorder traversal of binary tree is:"<<endl;
          printPreorder(root);
      
          return 0;
      }`,
      java: `// Java program for preorder traversals

  class Node {
      int data;
      Node left, right;
  
      public Node(int item) {
          data = item;
          left = right = null;
      }
  }
  
  class BinaryTree {
      Node root;
  
      BinaryTree() {
          root = null;
      }
  
      // Function to print preorder traversal
      void printPreorder(Node node) {
          if (node == null)
              return;
  
          // Deal with the node
          System.out.print(node.data + " ");
  
          // Recur on left subtree
          printPreorder(node.left);
  
          // Recur on right subtree
          printPreorder(node.right);
      }
  
      // Driver code
      public static void main(String[] args) {
          BinaryTree tree = new BinaryTree();
  
          // Constructing the binary tree
          tree.root = new Node(1);
          tree.root.left = new Node(2);
          tree.root.right = new Node(3);
          tree.root.left.left = new Node(4);
          tree.root.left.right = new Node(5);
          tree.root.right.right = new Node(6);
  
          // Function call
          System.out.println("Preorder traversal of binary tree is: ");
          tree.printPreorder(tree.root);
      }
  }`,
  python:`# Python program for preorder traversals

  # Structure of a Binary Tree Node
  class Node:
      def __init__(self, v):
          self.data = v
          self.left = None
          self.right = None
  
  # Function to print preorder traversal
  def printPreorder(node):
      if node is None:
          return
  
      # Deal with the node
      print(node.data, end=' ')
  
      # Recur on left subtree
      printPreorder(node.left)
  
      # Recur on right subtree
      printPreorder(node.right)
  
  
  # Driver code
  if __name__ == '__main__':
      root = Node(1)
      root.left = Node(2)
      root.right = Node(3)
      root.left.left = Node(4)
      root.left.right = Node(5)
      root.right.right = Node(6)
  
      # Function call
      print("Preorder traversal of binary tree is:")
      printPreorder(root)`
    },
    inorder: {
      title: "Inorder traversal of the tree",
      statement: {
        brief:
          "Given root of the tree, return preorder traversal of it's node value, Preorder traversal is defined as a type of tree traversal that follows the Root-Left-Right policy where:",
        points: [
          "The root node of the subtree is visited first.",
          "Then the left subtree  is traversed.",
          "At last, the right subtree is traversed.",
        ],
      },
      examples: { input: "root = [1, null, 2, 3]", output: "[1, 2, 3]" },

      approach: [
        "Follow step 2 to 4 until root != NULL",
        "Write root -> data",
        "Preorder (root -> left)",
        "Preorder (root -> right)",
        "End",
      ],
      cpp: `
      // C++ program for Inorder traversals

      #include <bits/stdc++.h>
      using namespace std;
      
      // Structure of a Binary Tree Node
      struct Node {
          int data;
          struct Node *left, *right;
          Node(int v)
          {
              data = v;
              left = right = NULL;
          }
      };
      
      // Function to print Inorder traversal
      void printInorder(struct Node* node)
      {
          if (node == NULL)
              return;
      
            // Recur on left subtree
            printInorder(node->left);
            
            // Deal with the node
            cout << node->data << " ";
            
          // Recur on right subtree
          printInorder(node->right);
      }
      
      // Driver code
      int main()
      {
          struct Node* root = new Node(1);
          root->left = new Node(2);
          root->right = new Node(3);
          root->left->left = new Node(4);
          root->left->right = new Node(5);
          root->right->right = new Node(6);
      
          // Function call
          cout << "Inorder traversal of binary tree is: <<endl";
          printInorder(root);
      
          return 0;
      }`,
      java:`// Java program for inorder traversals
      import java.util.*;
      
      // Structure of a Binary Tree Node
      class Node {
        int data;
        Node left, right;
      
        Node(int v)
        {
          data = v;
          left = right = null;
        }
      }
      
      // Main class
      class GFG {
      
        // Function to print inorder traversal
        public static void printInorder(Node node)
        {
          if (node == null)
            return;
      
          // First recur on left subtree
          printInorder(node.left);
      
          // Now deal with the node
          System.out.print(node.data + " ");
      
          // Then recur on right subtree
          printInorder(node.right);
        }
      
        // Driver code
        public static void main(String[] args)
        {
          Node root = new Node(1);
          root.left = new Node(2);
          root.right = new Node(3);
          root.left.left = new Node(4);
          root.left.right = new Node(5);
          root.right.right = new Node(6);
      
          // Function call
          System.out.println(
            "Inorder traversal of binary tree is: ");
          printInorder(root);
        }
      }
      // This code is contributed by prasad264
      `,
      python:`# Structure of a Binary Tree Node
      class Node:
        def __init__(self, v):
          self.data = v
          self.left = None
          self.right = None
      
      # Function to print inorder traversal
      def printInorder(node):
        if node is None:
          return
      
        # First recur on left subtree
        printInorder(node.left)
      
        # Now deal with the node
        print(node.data, end=' ')
      
        # Then recur on right subtree
        printInorder(node.right)
      
      # Driver code
      if __name__ == '__main__':
        root = Node(1)
        root.left = Node(2)
        root.right = Node(3)
        root.left.left = Node(4)
        root.left.right = Node(5)
        root.right.right = Node(6)
      
        # Function call
        print("Inorder traversal of binary tree is:")
        printInorder(root)
      `
    },
    postorder: {
      title: "Postorder traversal of the tree",
      statement: {
        brief:
          "Given root of the tree, return preorder traversal of it's node value, Preorder traversal is defined as a type of tree traversal that follows the Root-Left-Right policy where:",
        points: [
          "The root node of the subtree is visited first.",
          "Then the left subtree  is traversed.",
          "At last, the right subtree is traversed.",
        ],
      },
      examples: { input: "root = [1, null, 2, 3]", output: "[1, 2, 3]" },

      approach: [
        "Follow step 2 to 4 until root != NULL",
        "Write root -> data",
        "Preorder (root -> left)",
        "Preorder (root -> right)",
        "End",
      ],
      cpp: `// C++ program for Postorder traversals

  #include <bits/stdc++.h>
  using namespace std;
  
  // Structure of a Binary Tree Node
  struct Node {
    int data;
    struct Node *left, *right;
    Node(int v)
    {
      data = v;
      left = right = NULL;
    }
  };
  
  // Function to print Postorder traversal
  void printPostorder(struct Node* node)
  {
    if (node == NULL)
      return;
      
    // Now deal with the node
    cout << node->data << " ";
    
    // Then recur on right subtree
    printPostorder(node->right);

    // First recur on left subtree
    printPostorder(node->left);
  }
  
  // Driver code
  int main()
  {
    struct Node* root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);
    root->left->left = new Node(4);
    root->left->right = new Node(5);
    root->right->right = new Node(6);
  
    // Function call
    cout << "Postorder traversal of binary tree is: ";
    printPostorder(root);
  
    return 0;
  }
  `,
  java:`// Java program for postorder traversals
  import java.util.*;
  
  // Structure of a Binary Tree Node
  class Node {
    int data;
    Node left, right;
    Node(int v)
    {
      data = v;
      left = right = null;
    }
  }
  
  class GFG {
    
    // Function to print postorder traversal
    static void printPostorder(Node node)
    {
      if (node == null)
        return;
  
      // First recur on left subtree
      printPostorder(node.left);
  
      // Then recur on right subtree
      printPostorder(node.right);
  
      // Now deal with the node
      System.out.print(node.data + " ");
    }
  
    // Driver code
    public static void main(String[] args)
    {
      Node root = new Node(1);
      root.left = new Node(2);
      root.right = new Node(3);
      root.left.left = new Node(4);
      root.left.right = new Node(5);
      root.right.right = new Node(6);
  
      // Function call
      System.out.println("Postorder traversal of binary tree is: ");
      printPostorder(root);
    }
  }
  // This code is contributed by prasad264
  `,
  python:`# Python program for postorder traversals

  # Structure of a Binary Tree Node
  
  
  class Node:
    def __init__(self, v):
      self.data = v
      self.left = None
      self.right = None
  
  # Function to print postorder traversal
  
  
  def printPostorder(node):
    if node == None:
      return
  
    # First recur on left subtree
    printPostorder(node.left)
  
    # Then recur on right subtree
    printPostorder(node.right)
  
    # Now deal with the node
    print(node.data, end=' ')
  
  
  # Driver code
  if __name__ == '__main__':
    root = Node(1)
    root.left = Node(2)
    root.right = Node(3)
    root.left.left = Node(4)
    root.left.right = Node(5)
    root.right.right = Node(6)
  
    # Function call
    print("Postorder traversal of binary tree is:")
    printPostorder(root)
  `,
    },
    levelorder: {
      title: "Levelorder traversal of the tree",
      statement: {
        brief:
          "Given root of the tree, return preorder traversal of it's node value, Preorder traversal is defined as a type of tree traversal that follows the Root-Left-Right policy where:",
        points: [
          "The root node of the subtree is visited first.",
          "Then the left subtree  is traversed.",
          "At last, the right subtree is traversed.",
        ],
      },
      examples: { input: "root = [1, null, 2, 3]", output: "[1, 2, 3]" },

      approach: [
        "Follow step 2 to 4 until root != NULL",
        "Write root -> data",
        "Preorder (root -> left)",
        "Preorder (root -> right)",
        "End",
      ],
      cpp: `// Recursive C program for level
  // order traversal of Binary Tree
  #include <stdio.h>
  #include <stdlib.h>
  
  // A binary tree node has data,
  // pointer to left child
  // and a pointer to right child
  struct node {
    int data;
    struct node *left, *right;
  };
  
  // Function prototypes
  void printCurrentLevel(struct node* root, int level);
  int height(struct node* node);
  struct node* newNode(int data);
  
  // Function to print level order traversal a tree
  void printLevelOrder(struct node* root)
  {
    int h = height(root);
    int i;
    for (i = 1; i <= h; i++)
      printCurrentLevel(root, i);
  }
  
  // Print nodes at a current level
  void printCurrentLevel(struct node* root, int level)
  {
    if (root == NULL)
      return;
    if (level == 1)
      printf("%d ", root->data);
    else if (level > 1) {
      printCurrentLevel(root->left, level - 1);
      printCurrentLevel(root->right, level - 1);
    }
  }
  
  // Compute the "height" of a tree -- the number of
  // nodes along the longest path from the root node
  // down to the farthest leaf node
  int height(struct node* node)
  {
    if (node == NULL)
      return 0;
    else {
      
      // Compute the height of each subtree
      int lheight = height(node->left);
      int rheight = height(node->right);
  
      // Use the larger one
      if (lheight > rheight)
        return (lheight + 1);
      else
        return (rheight + 1);
    }
  }
  
  // Helper function that allocates a new node with the
  // given data and NULL left and right pointers.
  struct node* newNode(int data)
  {
    struct node* node
      = (struct node*)malloc(sizeof(struct node));
    node->data = data;
    node->left = NULL;
    node->right = NULL;
  
    return (node);
  }
  
  // Driver program to test above functions
  int main()
  {
    struct node* root = newNode(1);
    root->left = newNode(2);
    root->right = newNode(3);
    root->left->left = newNode(4);
    root->left->right = newNode(5);
  
    printf("Level Order traversal of binary tree is ");
    printLevelOrder(root);
  
    return 0;
  }
  `,
  java:`// Recursive Java program for level
  // order traversal of Binary Tree
  
  // Class containing left and right child of current
  // node and key value
  class Node {
    int data;
    Node left, right;
    public Node(int item)
    {
      data = item;
      left = right = null;
    }
  }
  
  class BinaryTree {
    
    // Root of the Binary Tree
    Node root;
  
    public BinaryTree() { root = null; }
  
    // Function to print level order traversal of tree
    void printLevelOrder()
    {
      int h = height(root);
      int i;
      for (i = 1; i <= h; i++)
        printCurrentLevel(root, i);
    }
  
    // Compute the "height" of a tree -- the number of
    // nodes along the longest path from the root node
    // down to the farthest leaf node.
    int height(Node root)
    {
      if (root == null)
        return 0;
      else {
        
        // Compute height of each subtree
        int lheight = height(root.left);
        int rheight = height(root.right);
  
        // use the larger one
        if (lheight > rheight)
          return (lheight + 1);
        else
          return (rheight + 1);
      }
    }
  
    // Print nodes at the current level
    void printCurrentLevel(Node root, int level)
    {
      if (root == null)
        return;
      if (level == 1)
        System.out.print(root.data + " ");
      else if (level > 1) {
        printCurrentLevel(root.left, level - 1);
        printCurrentLevel(root.right, level - 1);
      }
    }
  
    // Driver program to test above functions
    public static void main(String args[])
    {
      BinaryTree tree = new BinaryTree();
      tree.root = new Node(1);
      tree.root.left = new Node(2);
      tree.root.right = new Node(3);
      tree.root.left.left = new Node(4);
      tree.root.left.right = new Node(5);
  
      System.out.println("Level order traversal of"
              + "binary tree is ");
      tree.printLevelOrder();
    }
  }
  `,
  python:`# Recursive Python program for level
  # order traversal of Binary Tree
  
  
  # A node structure
  class Node:
  
    # A utility function to create a new node
    def __init__(self, key):
      self.data = key
      self.left = None
      self.right = None
  
  
  # Function to print level order traversal of tree
  def printLevelOrder(root):
    h = height(root)
    for i in range(1, h+1):
      printCurrentLevel(root, i)
  
  
  # Print nodes at a current level
  def printCurrentLevel(root, level):
    if root is None:
      return
    if level == 1:
      print(root.data, end=" ")
    elif level > 1:
      printCurrentLevel(root.left, level-1)
      printCurrentLevel(root.right, level-1)
  
  
  # Compute the height of a tree--the number of nodes
  # along the longest path from the root node down to
  # the farthest leaf node
  def height(node):
    if node is None:
      return 0
    else:
  
      # Compute the height of each subtree
      lheight = height(node.left)
      rheight = height(node.right)
  
      # Use the larger one
      if lheight > rheight:
        return lheight+1
      else:
        return rheight+1
  
  
  # Driver program to test above function
  if __name__ == '__main__':
    root = Node(1)
    root.left = Node(2)
    root.right = Node(3)
    root.left.left = Node(4)
    root.left.right = Node(5)
  
    print("Level order traversal of binary tree is -")
    printLevelOrder(root)
  
  # This code is contributed by Nikhil Kumar Singh(nickzuck_007)
  `,
    },
    zigzagorder: {
      title: "ZigZagorder traversal of the tree",
      statement: {
        brief:
          "Given root of the tree, return preorder traversal of it's node value, Preorder traversal is defined as a type of tree traversal that follows the Root-Left-Right policy where:",
        points: [
          "The root node of the subtree is visited first.",
          "Then the left subtree  is traversed.",
          "At last, the right subtree is traversed.",
        ],
      },
      examples: { input: "root = [1, null, 2, 3]", output: "[1, 2, 3]" },

      approach: [
        "Follow step 2 to 4 until root != NULL",
        "Write root -> data",
        "Preorder (root -> left)",
        "Preorder (root -> right)",
        "End",
      ],
      cpp: `// C++ implementation of a O(n) time method for
  // Zigzag order traversal
  #include <iostream>
  #include <stack>
  using namespace std;
  
  // Binary Tree node
  struct Node {
    int data;
    struct Node *left, *right;
  };
  
  // function to print the zigzag traversal
  void zigzagtraversal(struct Node* root)
  {
    // if null then return
    if (!root)
      return;
  
    // declare two stacks
    stack<struct Node*> currentlevel;
    stack<struct Node*> nextlevel;
  
    // push the root
    currentlevel.push(root);
  
    // check if stack is empty 
    bool lefttoright = true;
    while (!currentlevel.empty()) {
  
      // pop out of stack
      struct Node* temp = currentlevel.top();
      currentlevel.pop();
  
      // if not null
      if (temp) {
  
        // print the data in it
        cout << temp->data << " ";
  
        // store data according to current
        // order.
        if (lefttoright) {
          if (temp->left)
            nextlevel.push(temp->left);
          if (temp->right)
            nextlevel.push(temp->right);
        }
        else {
          if (temp->right)
            nextlevel.push(temp->right);
          if (temp->left)
            nextlevel.push(temp->left);
        }
      }
  
      if (currentlevel.empty()) {
        lefttoright = !lefttoright;
        swap(currentlevel, nextlevel);
      }
    }
  }
  
  // A utility function to create a new node
  struct Node* newNode(int data)
  {
    struct Node* node = new struct Node;
    node->data = data;
    node->left = node->right = NULL;
    return (node);
  }
  
  // driver program to test the above function
  int main()
  {
    // create tree
    struct Node* root = newNode(1);
    root->left = newNode(2);
    root->right = newNode(3);
    root->left->left = newNode(7);
    root->left->right = newNode(6);
    root->right->left = newNode(5);
    root->right->right = newNode(4);
    cout << "ZigZag Order traversal of binary tree is ";
  
    zigzagtraversal(root);
  
    return 0;
  }
  `,
  java:`// Java implementation of a O(n) time 
  // method for Zigzag order traversal
  import java.util.*;
  
  // Binary Tree node
  class Node
  {
  int data;
  Node leftChild;
  Node rightChild;
  Node(int data)
  {
    this.data = data; 
  }
  }
  
  class BinaryTree {
  Node rootNode;
  
  // function to print the
  // zigzag traversal
  void printZigZagTraversal() {
    
    // if null then return
    if (rootNode == null) {
    return;
    }
  
    // declare two stacks
    Stack<Node> currentLevel = new Stack<>();
    Stack<Node> nextLevel = new Stack<>();
  
    // push the root
    currentLevel.push(rootNode);
    boolean leftToRight = true;
  
    // check if stack is empty
    while (!currentLevel.isEmpty()) {
  
    // pop out of stack
    Node node = currentLevel.pop();
    
    // print the data in it
    System.out.print(node.data + " ");
  
    // store data according to current
    // order.
    if (leftToRight) {
      if (node.leftChild != null) {
      nextLevel.push(node.leftChild);
      }
      
      if (node.rightChild != null) {
      nextLevel.push(node.rightChild);
      }
    }
    else {
      if (node.rightChild != null) {
      nextLevel.push(node.rightChild);
      }
      
      if (node.leftChild != null) {
      nextLevel.push(node.leftChild);
      }
    }
  
    if (currentLevel.isEmpty()) {
      leftToRight = !leftToRight;
      Stack<Node> temp = currentLevel;
      currentLevel = nextLevel;
      nextLevel = temp;
    }
    }
  }
  }
  
  public class zigZagTreeTraversal {
  
  // driver program to test the above function
  public static void main(String[] args) 
  {
    BinaryTree tree = new BinaryTree();
    tree.rootNode = new Node(1);
    tree.rootNode.leftChild = new Node(2);
    tree.rootNode.rightChild = new Node(3);
    tree.rootNode.leftChild.leftChild = new Node(7);
    tree.rootNode.leftChild.rightChild = new Node(6);
    tree.rootNode.rightChild.leftChild = new Node(5);
    tree.rootNode.rightChild.rightChild = new Node(4);
  
    System.out.println("ZigZag Order traversal of binary tree is");
    tree.printZigZagTraversal();
  }
  }
  
  // This Code is contributed by Harikrishnan Rajan.
  `,
  python:`# Python Program to print zigzag traversal
  # of binary tree
  
  # Binary tree node
  class Node:
    # Constructor to create a new node
    def __init__(self, data):
      self.data = data
      self.left = self.right = None
  
  
  # function to print zigzag traversal of 
  # binary tree
  def zigzagtraversal(root):
  
    # Base Case
    if root is None:
      return
  
    # Create two stacks to store current
    # and next level
    currentLevel = []
    nextLevel = []
  
    # if ltr is true push nodes from 
    # left to right otherwise from
    # right to left
    ltr = True
  
    # append root to currentlevel stack
    currentLevel.append(root)
  
    # Check if stack is empty
    while len(currentLevel) > 0:
      # pop from stack
      temp = currentLevel.pop(-1)
      # print the data
      print(temp.data, " ", end="")
  
      if ltr:
        # if ltr is true push left 
        # before right
        if temp.left:
          nextLevel.append(temp.left)
        if temp.right:
          nextLevel.append(temp.right)
      else:
        # else push right before left
        if temp.right:
          nextLevel.append(temp.right)
        if temp.left:
          nextLevel.append(temp.left)
  
      if len(currentLevel) == 0:
        # reverse ltr to push node in
        # opposite order
        ltr = not ltr
        # swapping of stacks
        currentLevel, nextLevel = nextLevel, currentLevel
  
  
  # Driver program to check above function
  root = Node(1)
  root.left = Node(2)
  root.right = Node(3)
  root.left.left = Node(7)
  root.left.right = Node(6)
  root.right.left = Node(5)
  root.right.right = Node(4)
  print("Zigzag Order traversal of binary tree is")
  zigzagtraversal(root)
  
  # This code is contributed by Shweta Singh
  `
    },
    boundaryorder: {
      title: "Postorder traversal of the tree",
      statement: {
        brief:
          "Given root of the tree, return preorder traversal of it's node value, Preorder traversal is defined as a type of tree traversal that follows the Root-Left-Right policy where:",
        points: [
          "The root node of the subtree is visited first.",
          "Then the left subtree  is traversed.",
          "At last, the right subtree is traversed.",
        ],
      },
      examples: { input: "root = [1, null, 2, 3]", output: "[1, 2, 3]" },

      approach: [
        "Follow step 2 to 4 until root != NULL",
        "Write root -> data",
        "Preorder (root -> left)",
        "Preorder (root -> right)",
        "End",
      ],
      cpp: `#include <iostream>
  using namespace std;
  
  /* A binary tree node has data, pointer to left child
  and a pointer to right child */
  struct Node {
    int data;
    struct Node *left, *right;
  };
  
  // Utility function to create a new tree node
  Node* newNode(int data)
  {
    Node* temp = new Node;
    temp->data = data;
    temp->left = temp->right = nullptr;
    return temp;
  }
  
  // A simple function to print leaf nodes of a binary tree
  void printLeaves(Node* root)
  {
    if (root == nullptr)
      return;
  
    printLeaves(root->left);
  
    // Print it if it is a leaf node
    if (!(root->left) && !(root->right))
      cout << root->data << " ";
  
    printLeaves(root->right);
  }
  
  // A function to print all left boundary nodes, except a
  // leaf node. Print the nodes in TOP DOWN manner
  void printBoundaryLeft(Node* root)
  {
    if (root == nullptr)
      return;
  
    if (root->left) {
  
      // to ensure top down order, print the node
      // before calling itself for left subtree
      cout << root->data << " ";
      printBoundaryLeft(root->left);
    }
    else if (root->right) {
      cout << root->data << " ";
      printBoundaryLeft(root->right);
    }
    // do nothing if it is a leaf node, this way we avoid
    // duplicates in output
  }
  
  // A function to print all right boundary nodes, except a
  // leaf node Print the nodes in BOTTOM UP manner
  void printBoundaryRight(Node* root)
  {
    if (root == nullptr)
      return;
  
    if (root->right) {
      // to ensure bottom up order, first call for right
      // subtree, then print this node
      printBoundaryRight(root->right);
      cout << root->data << " ";
    }
    else if (root->left) {
      printBoundaryRight(root->left);
      cout << root->data << " ";
    }
    // do nothing if it is a leaf node, this way we avoid
    // duplicates in output
  }
  
  // A function to do boundary traversal of a given binary
  // tree
  void printBoundary(Node* root)
  {
    if (root == nullptr)
      return;
  
    cout << root->data << " ";
  
    // Print the left boundary in top-down manner.
    printBoundaryLeft(root->left);
  
    // Print all leaf nodes
    printLeaves(root->left);
    printLeaves(root->right);
  
    // Print the right boundary in bottom-up manner
    printBoundaryRight(root->right);
  }
  
  // Driver program to test above functions
  int main()
  {
    // Let us construct the tree given in the above diagram
    Node* root = newNode(20);
    root->left = newNode(8);
    root->left->left = newNode(4);
    root->left->right = newNode(12);
    root->left->right->left = newNode(10);
    root->left->right->right = newNode(14);
    root->right = newNode(22);
    root->right->right = newNode(25);
  
    printBoundary(root);
  
    return 0;
  }
  `,
  java:`// Java program to print boundary traversal of binary tree

  /* A binary tree node has data, pointer to left child
  and a pointer to right child */
  class Node {
    int data;
    Node left, right;
  
    Node(int item)
    {
      data = item;
      left = right = null;
    }
  }
  
  class BinaryTree {
    Node root;
  
    // A simple function to print leaf nodes of a binary tree
    void printLeaves(Node node)
    {
      if (node == null)
        return;
  
      printLeaves(node.left);
      // Print it if it is a leaf node
      if (node.left == null && node.right == null)
        System.out.print(node.data + " ");
      printLeaves(node.right);
    }
  
    // A function to print all left boundary nodes, except a leaf node.
    // Print the nodes in TOP DOWN manner
    void printBoundaryLeft(Node node)
    {
      if (node == null)
        return;
  
      if (node.left != null) {
        // to ensure top down order, print the node
        // before calling itself for left subtree
        System.out.print(node.data + " ");
        printBoundaryLeft(node.left);
      }
      else if (node.right != null) {
        System.out.print(node.data + " ");
        printBoundaryLeft(node.right);
      }
  
      // do nothing if it is a leaf node, this way we avoid
      // duplicates in output
    }
  
    // A function to print all right boundary nodes, except a leaf node
    // Print the nodes in BOTTOM UP manner
    void printBoundaryRight(Node node)
    {
      if (node == null)
        return;
  
      if (node.right != null) {
        // to ensure bottom up order, first call for right
        // subtree, then print this node
        printBoundaryRight(node.right);
        System.out.print(node.data + " ");
      }
      else if (node.left != null) {
        printBoundaryRight(node.left);
        System.out.print(node.data + " ");
      }
      // do nothing if it is a leaf node, this way we avoid
      // duplicates in output
    }
  
    // A function to do boundary traversal of a given binary tree
    void printBoundary(Node node)
    {
      if (node == null)
        return;
  
      System.out.print(node.data + " ");
  
      // Print the left boundary in top-down manner.
      printBoundaryLeft(node.left);
  
      // Print all leaf nodes
      printLeaves(node.left);
      printLeaves(node.right);
  
      // Print the right boundary in bottom-up manner
      printBoundaryRight(node.right);
    }
  
    // Driver program to test above functions
    public static void main(String args[])
    {
      BinaryTree tree = new BinaryTree();
      tree.root = new Node(20);
      tree.root.left = new Node(8);
      tree.root.left.left = new Node(4);
      tree.root.left.right = new Node(12);
      tree.root.left.right.left = new Node(10);
      tree.root.left.right.right = new Node(14);
      tree.root.right = new Node(22);
      tree.root.right.right = new Node(25);
      tree.printBoundary(tree.root);
    }
  }
  `,
  python:`# Python3 program for binary traversal of binary tree

  # A binary tree node
  class Node:
  
    # Constructor to create a new node
    def __init__(self, data):
      self.data = data 
      self.left = None
      self.right = None
  
  # A simple function to print leaf nodes of a Binary Tree
  def printLeaves(root):
    if(root):
      printLeaves(root.left)
      
      # Print it if it is a leaf node
      if root.left is None and root.right is None:
        print(root.data),
  
      printLeaves(root.right)
  
  # A function to print all left boundary nodes, except a 
  # leaf node. Print the nodes in TOP DOWN manner
  def printBoundaryLeft(root):
    
    if(root):
      if (root.left):
        
        # to ensure top down order, print the node
        # before calling itself for left subtree
        print(root.data)
        printBoundaryLeft(root.left)
      
      elif(root.right):
        print (root.data)
        printBoundaryLeft(root.right)
      
      # do nothing if it is a leaf node, this way we
      # avoid duplicates in output
  
  
  # A function to print all right boundary nodes, except
  # a leaf node. Print the nodes in BOTTOM UP manner
  def printBoundaryRight(root):
    
    if(root):
      if (root.right):
        # to ensure bottom up order, first call for
        # right subtree, then print this node
        printBoundaryRight(root.right)
        print(root.data)
      
      elif(root.left):
        printBoundaryRight(root.left)
        print(root.data)
  
      # do nothing if it is a leaf node, this way we 
      # avoid duplicates in output
  
  
  # A function to do boundary traversal of a given binary tree
  def printBoundary(root):
    if (root):
      print(root.data)
      
      # Print the left boundary in top-down manner
      printBoundaryLeft(root.left)
  
      # Print all leaf nodes
      printLeaves(root.left)
      printLeaves(root.right)
  
      # Print the right boundary in bottom-up manner
      printBoundaryRight(root.right)
  
  
  # Driver program to test above function
  root = Node(20)
  root.left = Node(8)
  root.left.left = Node(4)
  root.left.right = Node(12)
  root.left.right.left = Node(10)
  root.left.right.right = Node(14)
  root.right = Node(22)
  root.right.right = Node(25)
  printBoundary(root)
  
  # This code is contributed by 
  # Nikhil Kumar Singh(nickzuck_007)
  `,
    },
  },
  recursion: {
    subsequences: {
      title: "Generating all possible Subsequences using Recursion",
      statement: {
        brief:
          "Given an array. The task is to generate and print all of the possible subsequences of the given array using recursion",
        points: [],
      },
      examples: {
        input: "[1, 2, 3]",
        output: "[3], [2], [2, 3], [1], [1, 3],[1, 2], [1, 2, 3], []",
      },

      approach: [
        "For every element in the array, there are two choices, either to include it in the subsequence or not include it.",
        "Apply this for every element in the array starting from index 0 until we reach the last index.",
        "Print the subsequence once the last index is reached.",
      ],
      cpp: `// C++ code to print all possible
      // subsequences for given array using
      // recursion
      #include <bits/stdc++.h>
      using namespace std;
      
      
      
      // Recursive function to print all
      // possible subsequences for given array
      void printSubsequences(int arr[], int index, 
                vector<int> &subarr,int n)
      {
        // Print the subsequence when reach
        // the leaf of recursion tree
        if (index == n)
        {
          for (auto it:subarr){
          cout << it << " ";
          
          }
        if(subarr.size()==0)
          cout<<"{}";
        
        cout<<endl;
        return;
      
          
        }
        else
        {
        //pick the current index into the subsequence.
          subarr.push_back(arr[index]);
        
      
          printSubsequences(arr, index + 1, subarr,n);
      
          
          subarr.pop_back();
        
        //not picking the element into the subsequence.
          printSubsequences(arr, index + 1, subarr,n);
        }
        
      }
      
      // Driver Code
      int main()
      {
        int arr[]={1, 2, 3};
        int n=sizeof(arr)/sizeof(arr[0]);
        vector<int> vec;
        
      
        printSubsequences(arr, 0, vec,n);
      
        return 0;
      }
      
      `,
      java:`// Java code to print all possible
      // subsequences for given array using
      // recursion
      import java.io.*;
      import java.util.*;
      
      class GFG{
        
      // Recursive function to print all
      // possible subsequences for given array
      public static void printSubsequences(int[] arr, int index, 
                        ArrayList<Integer> path)
      {
        
        // Print the subsequence when reach
        // the leaf of recursion tree
        if (index == arr.length)
        {
          
          // Condition to avoid printing
          // empty subsequence
          if (path.size() > 0)
            System.out.println(path);
        }
        
        else
        {
          
          // Subsequence without including
          // the element at current index
          printSubsequences(arr, index + 1, path);
          
          path.add(arr[index]);
          
          // Subsequence including the element
          // at current index
          printSubsequences(arr, index + 1, path);
          
          // Backtrack to remove the recently 
          // inserted element
          path.remove(path.size() - 1);
        }
        return;
      }
      
      // Driver code
      public static void main(String[] args)
      {
        int[] arr = { 1, 2, 3 };
        
        // Auxiliary space to store each path
        ArrayList<Integer> path = new ArrayList<>();
        
        printSubsequences(arr, 0, path);
      }
      }
      
      // This code is contributed by Mukul Sharma
      `,
      python:`# Python3 code to print all possible 
      # subsequences for given array using 
      # recursion 
      
      # Recursive function to print all 
      # possible subsequences for given array 
      def printSubsequences(arr, index, subarr): 
        
        # Print the subsequence when reach 
        # the leaf of recursion tree 
        if index == len(arr): 
          
          # Condition to avoid printing 
          # empty subsequence 
          if len(subarr) != 0: 
            print(subarr) 
        
        else: 
          # Subsequence without including 
          # the element at current index 
          printSubsequences(arr, index + 1, subarr) 
          
          # Subsequence including the element 
          # at current index 
          printSubsequences(arr, index + 1, 
                    subarr+[arr[index]]) 
        
        return
          
      arr = [1, 2, 3] 
      
      printSubsequences(arr, 0, []) 
      
      #This code is contributed by Mayank Tyagi
      `,
    },
  },
};
export default problems;
