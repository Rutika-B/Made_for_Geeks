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
import GraphBoard from "./pages/Graph/GraphBoard.jsx";
import TreeIntro from "./pages/Tree/TreeIntro.jsx";
import TreeLayout from "./pages/Tree/TreeLayout.jsx";
import GraphLayout from "./pages/Graph/GraphLayout.jsx";
import GraphIntro from "./pages/Graph/GraphIntro.jsx";
import SubSequences from "./pages/Recursion/Subsequences.jsx";
import RecursionLayout from "./pages/Recursion/RecursionLayout.jsx";
import RecurIntro from "./pages/Recursion/RecurIntro.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@material-tailwind/react";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </>
);
