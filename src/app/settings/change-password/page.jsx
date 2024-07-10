'use client'
import React, { useState } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function page() {

  const [password, setpassword] = useState();
  const [passwordvisible, setpasswordvisible] = useState(false);
  const handlepasswordvisible = () => {
    setpasswordvisible(!passwordvisible)
  }
  const [password2, setpassword2] = useState();
  const [passwordvisible2, setpasswordvisible2] = useState(false);
  const handlepasswordvisible2 = () => {
    setpasswordvisible2(!passwordvisible2)
  }

  return (

    <div className=' w-full'>
      <div>
        Edit Profile
      </div>
      <div className='flex flex-col gap-3 mt-2 w-[50%]'>
        <div>
          <div className='flex items-center justify-between pl-1 p-2 border rounded-md'>
            <div className='flex gap-2 w-[100%]'>
              <LockOutlinedIcon />
              <input type={passwordvisible ? "text" : "password"} placeholder='Current Password' value={password} onChange={(e) => setpassword(e.target.value)} className='outline-none  text-[12px]  w-full' />
            </div>
            <div>
              {passwordvisible ? <VisibilityOffIcon className='text-gray-300 cursor-pointer' onClick={handlepasswordvisible} /> : <VisibilityOutlinedIcon className='text-gray-300 cursor-pointer' onClick={handlepasswordvisible} />}
            </div>
          </div>
        </div>
        <div>
          <div className='flex items-center justify-between gap-4 p-2 border rounded-md'>
            <div className='flex gap-2 w-[100%]'>
              <LockOutlinedIcon />
              <input type={passwordvisible2 ? "text" : "password"} placeholder='New Password' value={password2} onChange={(e) => setpassword2(e.target.value)} className='outline-none  text-[12px]' />
            </div>
            <div>
              {passwordvisible2 ? <VisibilityOffIcon className='text-gray-300 cursor-pointer' onClick={handlepasswordvisible2} /> : <VisibilityOutlinedIcon className='text-gray-300 cursor-pointer' onClick={handlepasswordvisible2} />}

            </div>
          </div>
        </div>
        <div>
          <button className='pl-8 pt-[4px] pb-[4px] pr-8 bg-black text-white rounded-xl'>Update Password</button>
        </div>
      </div>

    </div>
  )
}

export default page