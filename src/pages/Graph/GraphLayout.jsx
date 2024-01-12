import React from 'react'
import { GraphSidebar } from '../../components/GraphSideBar'
import GraphIntro from './GraphIntro'

function GraphLayout() {
  return (
    <>
        
        <div className='w-full flex flex-row overflow-y-scroll'>
            <GraphIntro/>
            <GraphSidebar/>
        </div>
    </>
  )
}

export default GraphLayout