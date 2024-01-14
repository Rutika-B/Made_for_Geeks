export default [
  ["1-->2,3", "2 is not visited", "dfs(2)"],

  ["2-->1,3,4", "1 is already visited", "3 is not visited", " dfs(3)"],

  ["3-->1,2,5", "1 and 2 are already visited", "5 is not visited", "dfs(5)"],

  ["5-->3,6,4", "3 is already visited", "6 is not visited", "dfs(6)"],

  ["6-->5,4", "5 is already visited", "4 is not visited", "dfs(4)"],

  ["4-->2,5,6", "all nodes are visited", "dfs traversal is completed"],
];
