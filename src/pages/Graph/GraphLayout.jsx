import React from 'react'
import { MultiLevelGraphSidebar } from '../../components/GraphSideBar'
import { Outlet } from 'react-router-dom'

function GraphLayout() {
  return (
    <>
        <MultiLevelGraphSidebar/>
        <Outlet/>
    </>
  )
}

export default GraphLayout