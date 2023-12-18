import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export function TreeSideBar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <aside
      id="default-sidebar"
      // class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      // aria-label="Sidebar"
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
          <NavLink to={"/tree/introduction"}>
            <ListItem>
              <ListItemPrefix></ListItemPrefix>
              Introduction
            </ListItem>
          </NavLink>
          <ListItem>
            <ListItemPrefix></ListItemPrefix>
            Create BST
          </ListItem>
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix></ListItemPrefix>
              <Typography className="mr-auto font-normal text-base-content">
                Traversals
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0 text-base-content">
              <NavLink to={"/tree/traversal/preorder"}>
                <ListItem>
                  <ListItemPrefix></ListItemPrefix>
                  PreOrder Traversal
                </ListItem>
              </NavLink>
              <NavLink to={"/tree/traversal/inorder"}>
                <ListItem>
                  <ListItemPrefix></ListItemPrefix>
                  Inorder traversal
                </ListItem>
              </NavLink>
              <NavLink to={"/tree/traversal/postorder"}>
                <ListItem>
                  <ListItemPrefix></ListItemPrefix>
                  PostOrder traversal
                </ListItem>
              </NavLink>
              <NavLink to={"/tree/traversal/levelorder"}>
                <ListItem>
                  <ListItemPrefix></ListItemPrefix>
                  LevelOrder traversal
                </ListItem>
              </NavLink>
              <NavLink to={"/tree/traversal/zigzagorder"}>
                <ListItem>
                  <ListItemPrefix></ListItemPrefix>
                  Zigzag traversal
                </ListItem>
              </NavLink>
              <NavLink to={"/tree/traversal/boundaryorder"}>
                <ListItem>
                  <ListItemPrefix></ListItemPrefix>
                  Boundary traversal
                </ListItem>
              </NavLink>
            </List>
          </AccordionBody>
        </Accordion>

        <ListItem>
          <ListItemPrefix></ListItemPrefix>
          Lowest common ancestor
        </ListItem>
        <ListItem>
          <ListItemPrefix></ListItemPrefix>
          Depth of Tree
        </ListItem>
        <ListItem>
          <ListItemPrefix></ListItemPrefix>
          Symmetric Tree
        </ListItem>
      </List>
    </aside>
  );
}
