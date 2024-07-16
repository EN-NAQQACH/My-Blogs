'use client'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import { MdOutlineEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
function page() {
    return (
        <div className=' w-full'>
            <div>
                Edit Profile
            </div>
            <div className='main p-4 h-lvh'>
                <section>
                    <main className='flex gap-5'>
                        
                        <div className='left-side flex flex-col gap-5 items-center'>
                            <div className='profile-image w-[120px] h-[120px] rounded-full overflow-hidden'>
                                <img src="/carhero.jpg" alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className=''>
                                <button className='pl-8 pr-8 pt-1 pb-1 bg-gray-100 rounded-full text-[13px]'>Upload</button>
                            </div>
                        </div>


                        <div className='right-side grow'>
                            <div className='profile-info flex flex-col gap-3'>
                                <div className='flex gap-3 w-[100%] text-[13px]'>
                                    <div className="w-[100%] flex items-center rounded-md  bg-[#e9e9e942] focus-within:bg-white border-1 border-transparent  pl-[5px]  focus-within:border-gray-300 focus-within:border-1">
                                        <FaRegUser className="text-gray-500 mr-1 " />
                                        <input type="text" placeholder='name' className=' w-[100%] p-[8px] rounded-[4px]   outline-none  bg-transparent' />
                                    </div>
                                    <div className="w-[100%] flex items-center rounded-md  bg-[#e9e9e942] focus-within:bg-white border-1 border-transparent  pl-[5px]  focus-within:border-gray-300 focus-within:border-1">
                                        <MdOutlineEmail className="text-gray-500 mr-1" />
                                        <input type="text" placeholder='email' className=' w-[100%] p-[8px] rounded-[4px]   outline-none  bg-transparent' />
                                    </div>
                                </div>
                                <div className='text-[13px] flex flex-col gap-3 '>
                                    <div className="w-[100%] flex items-center rounded-md  bg-[#e9e9e942] focus-within:bg-white border-1 border-transparent  pl-[5px]  focus-within:border-gray-300 focus-within:border-1">
                                        <MdAlternateEmail className="text-gray-500 mr-1" />
                                        <input type="text" placeholder='username' className=' w-[100%] p-[8px] rounded-[4px]   outline-none  bg-transparent' />
                                    </div>
                                    <label htmlFor="" className='text-[12px] !text-gray-400'>Username will use to search user</label>
                                    <div className="w-[100%] flex items-center rounded-md  bg-[#e9e9e942] focus-within:bg-white border-1 border-transparent  pl-[5px]  focus-within:border-gray-300 focus-within:border-1">
                                        <textarea type="text" placeholder='Bio' className=' w-[100%] p-[8px] rounded-[4px]   outline-none  bg-transparent' />
                                    </div>
                                    <div>
                                        <label htmlFor="" className='text-[12px] !text-gray-400'>Add your social media</label>
                                        <div className='grid grid-cols-2 gap-3 w-[100%] text-[13px] mt-2'>
                                            <div className="w-[100%] flex items-center rounded-md  bg-[#e9e9e942] focus-within:bg-white border-1 border-transparent  pl-[5px]  focus-within:border-gray-300 focus-within:border-1">
                                                <FiInstagram className="text-gray-500 mr-1 " />
                                                <input type="text" placeholder='https://' className=' w-[100%] p-[8px] rounded-[4px]   outline-none  bg-transparent' />
                                            </div>
                                            <div className="w-[100%] flex items-center rounded-md  bg-[#e9e9e942] focus-within:bg-white border-1 border-transparent  pl-[5px]  focus-within:border-gray-300 focus-within:border-1">
                                                <CiFacebook className="text-gray-500 mr-1" />
                                                <input type="text" placeholder='https://' className=' w-[100%] p-[8px] rounded-[4px]   outline-none  bg-transparent' />
                                            </div>
                                            <div className="w-[100%] flex items-center rounded-md  bg-[#e9e9e942] focus-within:bg-white border-1 border-transparent  pl-[5px]  focus-within:border-gray-300 focus-within:border-1">
                                                <FaXTwitter className="text-gray-500 mr-1" />
                                                <input type="text" placeholder='https://' className=' w-[100%] p-[8px] rounded-[4px]   outline-none  bg-transparent' />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </section>
            </div>

        </div>
    )
}

export default page