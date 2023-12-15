import React from 'react'
import { GraphSidebar } from '../../components/GraphSideBar'
import { Outlet } from 'react-router-dom'
import GraphIntro from './GraphIntro'

function GraphLayout() {
  return (
    <>
        {/* <MultiLevelGraphSidebar/>
        <Outlet/> */}
        <div className='w-full flex flex-row overflow-y-scroll'>
            <GraphIntro/>
            <GraphSidebar/>
        </div>
    </>
  )
}

export default GraphLayout