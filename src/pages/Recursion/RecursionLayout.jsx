import React from 'react'
import { RecursionSidebar } from '../../components/RecursionSidebar'
import RecurIntro from './RecurIntro'

function RecursionLayout() {
  return (
    <>
        <section>
            <RecursionSidebar/>
            <RecurIntro/>
        </section>
    </>
  )
}

export default RecursionLayout