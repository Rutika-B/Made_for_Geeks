const RecursionList = [
    {
      key: 0,
      index: 0,
      step: "pick element at index 0 i.e 1, push it into vector then move to left recursion",
      vec: ["1"],
      flag: false,
    },
    {
      key: 1,
      index: 1,
      step: "pick element at index 1 i.e 2, push it into vector then move to left recursion",
      vec: ["1", "2"],
      flag: false,
    },
    {
      key: 2,
      index: 2,
      step: "pick element at index 2 i.e 3, push it into vector then move to left recursion",
      vec: ["1", "2", "3"],
      flag: false,
    },
    {
      key: 3,
      index: 3,
      step: "this is base case which means we have crossed the array because index goes out of input array,so print ans vector and return to prev call",
      vec: ["1", "2", "3"],
      flag: true,
    },
    {
      key: 4,
      index: 2,
      step: "pop last element from ans vec (pop(3)) before making right call",
      vec: ["1", "2"],
      flag: false,
    },
    {
      key: 5,
      index: 4,
      step: "again base case,print ans vector and return to prev call",
      vec: ["1", "2"],
      flag: true,
    },
    {
      key: 6,
      index: 1,
      step: "pop last element from ans before making right recursion call",
      vec: ["1"],
      flag: false,
    },
    {
      key: 7,
      index: 5,
      step: "pick element at index 2 i.e 3, push it into vector then move to left recursion",
      vec: ["1", "3"],
      flag: false,
    },
    {
      key: 8,
      index: 6,
      step: "print ans vector and return to prev call",
      vec: ["1", "3"],
      flag: true,
    },
    {
      key: 9,
      index: 5,
      step: "pop(3)",
      vec: ["1"],
      flag: false,
    },
    {
      key: 10,
      index: 7,
      step: "print ans vector",
      vec: ["1"],
      flag: true,
    },
    {
      key: 11,
      index: 0,
      step: "pop(1)",
      vec: [],
      flag: false,
    },
    {
      key: 12,
      index: 8,
      step: "push(2)",
      vec: ["2"],
      flag: false,
    },
    {
      key: 13,
      index: 9,
      step: "push(3)",
      vec: ["2", "3"],
      flag: false,
    },
    {
      key: 14,
      index: 10,
      step: "print ans vector",
      vec: ["2", "3"],
      flag: true,
    },
    {
      key: 15,
      index: 9,
      step: "pop(3)",
      vec: ["2"],
      flag: false,
    },
    {
      key: 16,
      index: 11,
      step: "print ans vector",
      vec: ["2"],
      flag: true,
    },
    {
      key: 17,
      index: 8,
      step: "pop(2)",
      vec: [],
      flag: false,
    },
    {
      key: 18,
      index: 12,
      step: "push(3)",
      vec: ["3"],
      flag: false,
    },
    {
      key: 19,
      index: 13,
      step: "print ans vector",
      vec: ["3"],
      flag: true,
    },
    {
      key: 20,
      index: 12,
      step: "pop(3)",
      vec: [],
      flag: false,
    },
    {
      key: 21,
      index: 14,
      step: "print ans vector",
      vec: [],
      flag: true,
    },
  ];
  export default RecursionList;
  