import React from 'react'
import Feed from './Feed'
import Leftsidebar from './Leftsidebar'
import Rightsidebar from './Rightsidebar'

function Home() {
  return (
    <div className='flex justify-between w-[80%] mx-auto'>
    <Leftsidebar />
   <Feed />
   <Rightsidebar />
   </div>
  )
}

export default Home