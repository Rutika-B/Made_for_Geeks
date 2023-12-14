import React, { Component } from "react";
import Tree from "./lib/Tree";
import TreeDiagram from "../../components/TreeDiagram";
import TransitionedList from "../../components/TransitionList";
// import TraversalInfo from "../../components/TraversalInfo";
import "../../styles/App.css";
import RecursionList from "./lib/RecursionList";
import FinalListTransition from "./components/FinalList";
import { Typography } from "@material-tailwind/react";
import ProblemHeader from "../../components/ProblemHeader";
import MButton from "../../components/MButton";
import problems from "../../ListofProblems/Problems";

class SubSequences extends Component {
  constructor(props) {
    super(props);

    this.state = {
      traversalOrder: [], //it stores the expected sequence of node from tree structure
      list: [], //store the nodes which got displayed on list/hightlighted on tree one by one
      finalList: [],
      action: "",
      recursionOrder: [],
      treeData: {
        name: "f(0)",
        keyProp: "0",
        children: [
          {
            name: "f(1)",
            keyProp: "2",
            children: [
              {
                name: "f(2)",
                keyProp: "6",
                children: [
                  {
                    name: "f(3)",
                    keyProp: "14",
                  },
                  { name: "f(3)", keyProp: "13" },
                ],
              },
              {
                name: "f(2)",
                keyProp: "5",
                children: [
                  {
                    name: "f(3)",
                    keyProp: "12",
                  },
                  { name: "f(3)", keyProp: "11" },
                ],
              },
            ],
          },
          {
            name: "f(1)",
            keyProp: "1",
            children: [
              {
                name: "f(2)",
                keyProp: "4",
                children: [
                  {
                    name: "f(3)",
                    keyProp: "10",
                  },
                  { name: "f(3)", keyProp: "9" },
                ],
              },
              {
                name: "f(2)",
                keyProp: "3",
                children: [
                  {
                    name: "f(3)",
                    keyProp: "8",
                  },
                  { name: "f(3)", keyProp: "7" },
                ],
              },
            ],
          },
        ],
      },
    };

    this.tree = new Tree("0", "0");
  }

  displayList = (index) => {
    if (index < RecursionList.length) {
      let tempList = [...RecursionList[index].vec];
      if (RecursionList[index].flag) {
        let templist = this.state.finalList;
        let count = templist.push([...RecursionList[index].vec]);
        this.setState({ finalList: templist });
        console.log(this.state.finalList.length);
      }
      this.setState(
        { list: tempList, action: RecursionList[index].step },
        () => {
          setTimeout(() => {
            this.displayList(index + 1);
            this.animateTree(
              this.state.traversalOrder[RecursionList[index + 1]?.index]
            );
          }, 3000);
        }
      );
    }
  };

  animateTree = (value) => {
    let data = this.state.treeData;

    const nodeList = [this.state.treeData];
    while (true) {
      const current = nodeList.shift();

      if (current) {
        if (current.gProps.className === "traversed-node") {
          current.gProps = {
            className: "no-animation",
          };
          data = { ...data, current };
        }
        if (current.keyProp === value) {
          current.gProps = {
            className: "traversed-node",
          };
          data = { ...data, current };
        }
        if (current.children) {
          current.children.forEach((child) => nodeList.push(child));
        }
      } else {
        break;
      }
    }

    this.setState({ treeData: data });
  };

  updateTraversalOrder = () => {
    this.tree.preorderTraversal();
    this.tree.subSequence();
    const recursionOrder = this.tree.getRecursionOrder();
    console.log(recursionOrder.length);

    const traversalOrder = this.tree.getTraversalOrder();

    this.setState({ traversalOrder, recursionOrder }, () => {
      this.displayList(0);
      this.animateTree(this.state.traversalOrder[RecursionList[0].index]);
    });
  };
  componentDidMount() {
    this.tree.add("1", "right", "2", "0");
    this.tree.add("1", "left", "1", "0");
    this.tree.add("2", "left", "3", "1");
    this.tree.add("2", "right", "4", "1");
    this.tree.add("2", "left", "5", "2");
    this.tree.add("2", "right", "6", "2");
    this.tree.add("3", "left", "7", "3");
    this.tree.add("3", "right", "8", "3");
    this.tree.add("3", "left", "9", "4");
    this.tree.add("3", "right", "10", "4");
    this.tree.add("3", "left", "11", "5");
    this.tree.add("3", "right", "12", "5");
    this.tree.add("3", "left", "13", "6");
    this.tree.add("3", "right", "14", "6");
    let data = this.state.treeData;

    const nodeList = [this.state.treeData];
    while (true) {
      const current = nodeList.shift();
      if (current) {
        current.gProps = {
          className: "no-animation",
        };
        data = { ...data, current };

        if (current.children) {
          current.children.forEach((child) => nodeList.push(child));
        }
      } else {
        break;
      }
    }
    this.setState({ treeData: data });
    // this.updateTraversalOrder();
  }
  handleClick = () => {
    const temp = [];
    this.setState(
      { finalList: temp, recursionOrder: temp },
      () => {
        this.updateTraversalOrder();
      },
      1000
    );
  };
  render() {
    return (
      <div>
        <ProblemHeader topic="recursion" problem="subsequences" />
        <div className="app">
          <section className="left-container">
            <MButton
              key="subSequence"
              onClick={this.handleClick}
              disabled={
                this.state.recursionOrder.length !== this.state.finalList.length
              }
            >
              Show
            </MButton>
            <Typography className="py-1" variant="h6">
              for arr:[1,2,3]
            </Typography>
            <Typography className="py-1" variant="h6">
              f(arr[ind])
            </Typography>

            <div className="tree-diagram">
              <TreeDiagram data={this.state.treeData} />
            </div>
          </section>
          <section className="right-container">
            <Typography variant="h6" className="mx-9 font-medium py-5">
              {this.state.action}
            </Typography>
            <div className="transition-list">
              <div className="p-4">Vector:</div>
              <TransitionedList list={this.state.list} />
            </div>

            <div className="final-transition-list">
              <div className="p-4">vector of vector : </div>
              <FinalListTransition finalList={this.state.finalList} />
            </div>
            {/* <div className="traversal-info">
            <TraversalInfo selectedTraversal={this.state.selectedTraversal} />
          </div> */}
          </section>
        </div>
      </div>
    );
  }
}

export default SubSequences;
