import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export function GraphSidebar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <aside
      id="default-sidebar"
      aria-label="Sidebar"
      className="bg-base-300 text-base-300 border-l-2 border-base-content"
    >
      <List className="text-base-content">
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <NavLink to={"/graph/dfs"}>
            <ListItem>
              <ListItemPrefix></ListItemPrefix>
              Dfs
            </ListItem>
          </NavLink>

          <ListItem>
            <ListItemPrefix></ListItemPrefix>
            Bfs
          </ListItem>
          <ListItem>
            <ListItemPrefix></ListItemPrefix>
            Number of Islands
          </ListItem>
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix></ListItemPrefix>
              <Typography className="mr-auto font-normal text-base-content">
                Cycle detection
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0 text-base-content">
              <NavLink to={"/tree/traversal/preorder"}>
                <ListItem>
                  <ListItemPrefix></ListItemPrefix>
                  In Undirected graph
                </ListItem>
              </NavLink>
              <NavLink to={"/tree/traversal/inorder"}>
                <ListItem>
                  <ListItemPrefix></ListItemPrefix>
                  In Directed graph
                </ListItem>
              </NavLink>
            </List>
          </AccordionBody>
          <ListItem>
            <ListItemPrefix></ListItemPrefix>
            Bipartite Graph
          </ListItem>
          <ListItem>
            <ListItemPrefix></ListItemPrefix>
            Topological Sort
          </ListItem>
          <ListItem>
            <ListItemPrefix></ListItemPrefix>
            Dijkstra Algo
          </ListItem>
          <ListItem>
            <ListItemPrefix></ListItemPrefix>
            BellmanFord Algo
          </ListItem>
        </Accordion>
      </List>
    </aside>
  );
}
