import React from 'react'
import Avatar from 'react-avatar';
import { CiHeart } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdShareAlt } from "react-icons/io";
import { CiTimer } from "react-icons/ci";
function Tweet() {
    return (
        <div className='border-b border-gray-200'>
            <div className='flex -2 p-2' >
                <Avatar googleId="118096717852922241760" size="30" round={true} />
                <div className='ml-2 w-full'>
                    <div className=' flex items-center'>
                        <h1 className='px-1'>
                            Priyanshusingh
                        </h1>
                        <p className='text-gray-500 text-sm'>@priyanshusingh</p>

                    </div>
                    <div className=''>
                        <p className='text-gray-700'>this is my tweet </p>
                    </div>
                    <div className='flex justify-between py-3'>
                        <div className='flex items-center'>
                            <CiHeart size="20px" />
                            <p>0</p>
                        </div>
                        <div className='flex items-center'>
                            <FiMessageSquare />
                            <p>2</p>
                        </div>
                        <div className='flex items-center'>
                            <IoMdShareAlt />
                            <p>2</p>
                        </div>
                        <div className='flex items-center'>
                            <CiTimer />
                            <p>2</p>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Tweet