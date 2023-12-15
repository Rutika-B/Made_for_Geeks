const TreesList = [
    {
      id: 0,
      treeData: {
        name: "1",
        children: [
          {
            name: "3",
          },
          {
            name: "2",
            children: [
              {
                name: "5",
                children: [
                  {
                    name: "7",
                  },
                  { name: "6" },
                ],
              },
              {
                name: "4",
              },
            ],
          },
        ],
      },
      TobeAdd: [
        // {node:}
        { node: "2", dire: "left", prev: "1" },
        { node: "3", dire: "right", prev: "1" },
        { node: "5", dire: "right", prev: "2" },
        { node: "6", dire: "left", prev: "5" },
        { node: "7", dire: "right", prev: "5" },
        { node: "4", dire: "left", prev: "2" },
      ],
    },
    {
      id: 1,
      treeData: {
        name: "1",
        children: [
          {
            name: "2",
            children: [
              {
                name: "3",
              },
              {
                name: "4",
                children: [
                  {
                    name: "5",
                  },
                  { name: "34" },
                ],
              },
            ],
          },
          {
            name: "6",
            children: [
              {
                name: "45",
              },
              {
                name: "7",
                children: [
                  { name: "23" },
                  {
                    name: "8",
                  },
                ],
              },
            ],
          },
        ],
      },
      TobeAdd: [
        { node: "2", dire: "right", prev: null },
        { node: "6", dire: "left", prev: null },
        { node: "3", dire: "right", prev: "2" },
        { node: "4", dire: "left", prev: "2" },
        { node: "5", dire: "right", prev: "4" },
        { node: "34", dire: "left", prev: "4" },
        { node: "7", dire: "left", prev: "6" },
        { node: "45", dire: "right", prev: "6" },
        { node: "8", dire: "left", prev: "7" },
        { node: "23", dire: "right", prev: "7" },
      ],
    },
    {
      id: 2,
      treeData: {
        name: "1",
        children: [
          {
            name: "2",
            children: [
              {
                name: "3",
              },
              {
                name: "4",
                children: [
                  {
                    name: "5",
                  },
                  { name: "45" },
                ],
              },
            ],
          },
          {
            name: "6",
            children: [
              { name: "12" },
              {
                name: "7",
              },
            ],
          },
        ],
      },
      TobeAdd: [
        { node: "2", dire: "right", prev: null },
        { node: "6", dire: "left", prev: null },
        { node: "3", dire: "right", prev: "2" },
        { node: "4", dire: "left", prev: "2" },
        { node: "5", dire: "right", prev: "4" },
        { node: "45", dire: "left", prev: "4" },
        { node: "12", dire: "right", prev: "6" },
        { node: "7", dire: "left", prev: "6" },
      ],
    },
  ];
  
  export default TreesList;
  