import React from 'react'
import { RecursionSidebar } from '../../components/RecursionSidebar'
import RecurIntro from './RecurIntro'

function RecursionLayout() {
  return (
    <>
        <div className='w-full flex flex-row overflow-y-scroll'>
            <RecurIntro/>
            <RecursionSidebar/>
        </div>
    </>
  )
}

export default RecursionLayout