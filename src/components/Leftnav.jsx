import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import { RiBloggerLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuPenSquare } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";




import Link from 'next/link';

function Leftnav() {
    return (
        <div className='h-lvh  border-r-1 text-gray-600 text-[13px]'>
            <div className=' flex flex-col gap-3 '>
                <div className='border-b-2 ml-4 mr-4'>
                    <p className='pb-2 text-black text-[15px]'>Dashboard</p>
                </div>
                <div className='flex flex-col justify-center mt-3'>
                    <div className='flex items-center p-4 gap-2'>
                        <RiBloggerLine size={15}/>
                        <Link href='/dashboard/blogs'>Blogs</Link>
                    </div>
                    <div className='flex items-center p-4 gap-2'>
                        <IoIosNotificationsOutline size={15}/>
                        <Link href='/dashboard/notifications'>Notifications</Link>
                    </div>
                    <div className='flex items-center p-4 gap-2'>
                        <LuPenSquare size={15}/>
                        <Link href='/write'>Write</Link>
                    </div>
                </div>
            </div>
            <div className=' flex flex-col gap-3 mt-14 '>
                <div className='border-b-2 ml-4 mr-4'>
                    <p className='pb-2 text-black text-[15px]'>Setting</p>
                </div>
                <div className='flex flex-col  mt-3'>
                    <div className='flex items-center p-4 gap-2'>
                        <FaRegUser size={15}/>
                        <Link href='/settings/edit-profile'>Edit profile</Link>
                    </div>
                    <div className='flex items-center p-4 gap-2'>
                        <IoSettingsOutline size={15}/>
                        <Link href='/settings/change-password'>Change password</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leftnav