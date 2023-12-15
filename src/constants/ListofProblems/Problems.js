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
          cout << "Preorder traversal of binary tree is: \n";
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
      code: `
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
      code: `// C++ program for Postorder traversals

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
      code: `// Recursive C program for level
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
      code: `// C++ implementation of a O(n) time method for
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
      code: `#include <iostream>
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
      code: `// C++ code to print all possible
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
    },
  },
};
export default problems;
