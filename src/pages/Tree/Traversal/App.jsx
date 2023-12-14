import React, { Component, useEffect, useState } from "react";
import TreesList from "./lib/TressList";
import Tree from "./lib/TraversalAlgo";
import TreeDiagram from "../../../components/TreeDiagram";
import TransitionedList from "../../../components/TransitionList";
// import TraversalInfo from "../components/TraversalInfo";
import "../../../styles/App.css";
import MButton from "../../../components/MButton";
import ProblemHeader from "../../../components/ProblemHeader";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTraversal: props.selectedtraversal,
      traversalOrder: [], //it stores the expected sequence of node from tree structure
      list: [], //store the nodes which got displayed on list/hightlighted on tree one by one
      treeData: props.data.treeData,
    };

    this.tree = new Tree("1");
  }
  resetNodes = () => {
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
  };
  componentDidMount() {
    this.resetNodes();
    let node, dir, prev;
    const temp = this.props.data.TobeAdd;
    console.log(temp);
    temp.forEach((item) => {
      node = item.node;
      dir = item.dire;
      prev = item.prev;
      this.tree.add(node, dir, prev);
    });
  }
  /*This menthod will display order of traversal one by one in delayed manner the "if condition" makes sure that
  if user interrupts the traversal and selectes the new one before the old one gets completed the effect of old traversal
  completely nullifies before new gets started*/

  displayList = (index) => {
    if (
      index === this.state.list.length &&
      index < this.state.traversalOrder.length
    ) {
      let tempList = [...this.state.list, this.state.traversalOrder[index]];
      this.setState({ list: tempList }, () => {
        setTimeout(() => {
          this.displayList(index + 1);
          this.animateTree(this.state.traversalOrder[index + 1]);
        }, 1500);
      });
    }
  };

  /* as soon as the displayList method is called this method is triggered too to corresponding animate the tree node
  along with the node which just got displayed on the list*/

  animateTree = (value) => {
    let data = this.state.treeData;
    console.log({ data });
    const nodeList = [this.state.treeData];
    while (true) {
      const current = nodeList.shift();
      if (current) {
        if (current.name === value) {
          current.gProps = {
            className: "traversed-node",
          };
          data = { ...data, current };
          break;
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
    const { selectedTraversal } = this.state;
    console.log("from function")
    
    console.log(selectedTraversal);
    if (selectedTraversal === "inorder") {
      this.tree.inorderTraversal();
    } else if (selectedTraversal === "preorder") {
      this.tree.preorderTraversal();
    } else if (selectedTraversal === "postorder") {
      this.tree.postorderTraversal();
    } else if (selectedTraversal === "zigzagorder") {
      this.tree.zigzagTraversal();
    } else if (selectedTraversal === "boundaryorder") {
      this.tree.boundaryTraversal();
    } else {
      this.tree.levelorderTraversal();
    }

    const traversalOrder = this.tree.getTraversalOrder();
    console.log(traversalOrder);
    console.log(`${traversalOrder.length}`);
    this.setState({ traversalOrder }, () => {
      this.displayList(0);

      this.animateTree(this.state.traversalOrder[0]);
    });
  };

  resetTree = () => {
    this.resetNodes();
    this.setState(
      {
        list: [],
        traversalOrder: [],
        treeData: this.props.data.treeData,
      },
      () => {
        setTimeout(() => {
          this.updateTraversalOrder();
        }, 1000);
      }
    );
  };
  render() {
    return (
      <div>
        {console.log(this.state.selectedTraversal)}
        <ProblemHeader
          problem={this.state.selectedTraversal}
          topic="tree"
        />
        <div className="app">
          <section className="left-container">
            <MButton onClick={this.resetTree}>
              {this.state.list.length === 0 ? "Show" : "show again"}
            </MButton>
            <div className="tree-diagram">
              <TreeDiagram data={this.state.treeData} />
            </div>
          </section>
          <section className="right-container">
            <span>Order of Traversal</span>
            <div className="transition-list">
              <TransitionedList list={this.state.list} />
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

export default App;
