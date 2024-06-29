import React from 'react'
import { FaHome  } from "react-icons/fa";
import { CiHashtag } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
function Leftsidebar() {
  return (
    <div className='w-[20%]'>
        <div>
            <div>
                <img className='m-4' width={"25px"} src="https://freelogopng.com/images/all_img/1690643591twitter-x-logo-png.png" ></img>
            </div>
            <div className='my-4'>
                <div className='flex items-center  my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
               <div > <FaHome  size={"24px"}/></div>
                <h1 className='ml-2'>Home</h1>
                </div>
                <div className='flex items-center  my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
               <div > <IoIosNotificationsOutline   size={"24px"}/></div>
                <h1 className='ml-2'>Notification</h1>
                </div>
                <div className='flex items-center  my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
               <div > <CgProfile  size={"24px"}/></div>
                <h1 className='ml-2'>Profile</h1>
                </div>
                <div className='flex items-center  my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
               <div > <CiHashtag  size={"24px"}/></div>
                <h1 className='ml-2'>Explore.</h1>
                </div>
                <div className='flex items-center  my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
               <div > <IoIosLogOut  size={"24px"}/></div>
                <h1 className='ml-2'>Logout.</h1>
                </div>
              <button className='hover:cursor bg-sky-500/100 rounded-lg hover:bg-sky-400 w-full px-4 py-2 m-2 font-bold text-white'>
              Tweet</button>
            </div >
        </div>
    </div>
  )
}

export default Leftsidebar