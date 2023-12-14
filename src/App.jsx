import { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import RecursionLayout from "./pages/Recursion/RecursionLayout";
import RecurIntro from "./pages/Recursion/RecurIntro";
import SubSequences from "./pages/Recursion/Subsequences";
import TreeLayout from "./pages/Tree/TreeLayout";
import TreeIntro from "./pages/Tree/TreeIntro";
import GraphLayout from "./pages/Graph/GraphLayout";
import GraphIntro from "./pages/Graph/GraphIntro";
import { ThemeProvider } from "@material-tailwind/react";
import { ChakraProvider } from "@chakra-ui/react";
import TraversalHome from "./pages/Tree/Traversal/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/recursion" element={<RecursionLayout />} />
        <Route path="/recursion/introduction" element={<RecurIntro />} />
        {/* //--------------------------------------------------------- */}
        <Route path="/recursion/subsequence" element={<SubSequences />} />
        <Route path="/tree" element={<TreeLayout />} />
        <Route path="/tree/introduction" element={<TreeIntro />} />
        <Route path="/tree/traversal/:slug" element={<TraversalHome/>} />
        {/* <Route path="/tree/traversal/:slug" element={<TraversalHome/>} />
        <Route path="/tree/traversal/:slug" element={<TraversalHome/>} /> */}
        {/* // -------------------------------------------------------------- */}
        <Route path="/graph" element={<GraphLayout />} />
        <Route path="/graph/introduction" element={<GraphIntro />} />
      </Route>
    )
  );
  return (
    <>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </>
  );
}

export default App;
