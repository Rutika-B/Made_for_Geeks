import React from "react";
import { TreeSideBar } from "../../components/TreeSideBar";
import TreeIntro from "./TreeIntro";

export default function TreeLayout() {
  return (
    <>
      <section>
        <TreeSideBar />
        <TreeIntro />
      </section>
    </>
  );
}
