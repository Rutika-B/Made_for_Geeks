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

import {  ChevronDownIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export function RecursionSidebar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <aside
      id="default-sidebar"
      // class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      // className="fixed inset-y-0 right-0 w-[300px] border"
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
          <NavLink to={"/recursion/subsequence"}>
            <ListItem>
              <ListItemPrefix>
              </ListItemPrefix>
              Subsequences
            </ListItem>
          </NavLink>
        
        </Accordion>

        <ListItem>
          <ListItemPrefix>
          </ListItemPrefix>
          Combination I
        </ListItem>
        <ListItem>
          <ListItemPrefix>
          </ListItemPrefix>
          Combination II
        </ListItem>
        <ListItem>
          <ListItemPrefix>
          </ListItemPrefix>
          Palindrom partitioning
        </ListItem>
        <ListItem>
          <ListItemPrefix>
          </ListItemPrefix>
          Sudoku solver
        </ListItem>
        <ListItem>
          <ListItemPrefix>
          </ListItemPrefix>
          N-Queen
        </ListItem>
        <ListItem>
          <ListItemPrefix>
          </ListItemPrefix>
          Rat in maze
        </ListItem>
      </List>
    </aside>
  );
}
