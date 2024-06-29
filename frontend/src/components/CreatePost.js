import React from 'react'
import Avatar from 'react-avatar';
import { CiImageOn } from "react-icons/ci";

function CreatePost() {
    return (
        <div className='w-[100%]'>
            < div >
                <div className='flex items-centre justify-between border-b  border-gray-200'>
                    <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3' >
                        <h1 className='font-semibold text-gray-600 text-lg '>For you</h1>
                    </div>
                    <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
                        <h1 className='font-bold text-gray-600 text-lg cursor-pointer'>Following</h1>
                    </div>
                </div>
                <div className='flex m-2'>
                    <div className='pr-2'>
                        <Avatar googleId="118096717852922241760" size="30" round={true} />
                    </div>
                    <input className='w-full outline-none border-none text-lg' type='text' placeholder='Write a post ? '></input>
                </div>
                <div className='flex items-center justify-between py-4 border-b border-gray-300'>
                    <div>
                        <CiImageOn />
                    </div>
                    <button className='bg-[#1D9BF0] px-3 py-1 border-none rounded-full text-lg text-white '>Post </button>
                </div>

            </div>
        </div>
    )
}

export default CreatePost