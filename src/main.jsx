import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import TreeBoard from "./pages/Tree/TreeBoard.jsx";
import GraphBoard from "./pages/GraphBoard.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import TreeIntro from "./pages/Tree/TreeIntro.jsx";
import TreeLayout from "./pages/Tree/TreeLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/tree" element={<TreeLayout/>} />        
        <Route path="/tree" element={<TreeBoard/>}/>
        <Route path="/tree/introduction" element={<TreeIntro/>}/>
      <Route path="graph/" element={<GraphBoard />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);

