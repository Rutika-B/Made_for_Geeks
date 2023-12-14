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
        "Follow step 2 to 4 until root != NULL",
        "Write root -> data",
        "Preorder (root -> left)",
        "Preorder (root -> right)",
        "End",
      ],
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
    },
  },
};
export default problems;
