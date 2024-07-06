import React from 'react'
import ReferDetails from '../components/ReferDetails'
import { useState } from 'react'
import GenerateReferral from '../components/GenerateReferral'
import CourseList from '../components/CourseList'
function Home() {

  return (
    <div className=''>
      <ReferDetails />
      <GenerateReferral />
      <CourseList />
    </div>
  )
}

export default Home