import React from "react";
import { MultiLevelSidebar } from "../../components/SideBar";
import { Outlet } from "react-router-dom";

export default function TreeLayout() {
  return (
    <>
      <MultiLevelSidebar />
      <Outlet />
    </>
  );
}
