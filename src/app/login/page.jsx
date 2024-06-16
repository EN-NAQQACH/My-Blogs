'use client'
import React, { useState } from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Link from 'next/link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { paraghraph } from '@/styles/Fonts';

function page() {
    const [password, setpassword] = useState();
    const [passwordvisible, setpasswordvisible] = useState(false);
    const handlepasswordvisible = () => {
        setpasswordvisible(!passwordvisible)
    }

    return (
        <div className='p-[60px] h-lvh'>

            <div className=' h-fit w-[45%] m-auto rounded-lg shadow-md'>
                <div className='p-8'>
                    <div className='up '>
                        <p className='text-[20px]'>Hi, Welcome Back!</p>
                    </div>
                    <div className='google-facebooklogin flex gap-5 mt-4'>
                        <div className='googlebtn flex items-center gap-2 border p-[6px] w-[100%] justify-center rounded-md'>
                            <div className='w-[20px] h-[20px] '>
                                <img src="/Google__G__logo.svg.png" alt="" className='w-full h-full object-cover' />
                            </div>
                            <p className='text-[13px]'>Sign in with Google</p>
                        </div>
                        <div className='facebookbtn flex items-center gap-2 border p-[6px] w-[100%] justify-center rounded-md'>
                            <div className='w-[20px] h-[20px] '>
                                <img src="/Facebook.png" alt="" className='w-full h-full object-cover' />
                            </div>
                            <p className='text-[13px]'>Sign in with Facebook</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-5 mb-5">
                        <p className="text-[11px] text-gray-400">or log in with email and password</p>
                        <div className="flex-grow border-t border-gray-300 mt-[2px]"></div>
                    </div>
                    <div className='form flex flex-col gap-3 mt-4'>
                        <div>
                            <label htmlFor="" className='text-[13px] mb-2 block'>Email Adress</label>
                            <div className='flex items-center gap-2 p-2 border rounded-md'>
                                <EmailOutlinedIcon />
                                <input type="text" placeholder='Email' className='outline-none w-full text-[12px]' />
                            </div>
                        </div>
                        <div >
                            <label htmlFor="" className='text-[13px] mb-2 block'>Password</label>
                            <div className='flex items-center justify-between gap-4 p-2 border rounded-md'>
                                <div className='flex gap-2 w-[100%]'>
                                    <LockOutlinedIcon />
                                    <input type={passwordvisible ? "text" : "password"} placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} className='  grow outline-none  text-[12px]' />
                                </div>
                                <div>
                                    {passwordvisible ? <VisibilityOffIcon className='text-gray-300 cursor-pointer' onClick={handlepasswordvisible} /> : <VisibilityOutlinedIcon className='text-gray-300 cursor-pointer' onClick={handlepasswordvisible} />}

                                </div>
                            </div>
                        </div>
                        <button className='bg-[#1d5ce2] text-white p-3 rounded-md w-[100%] mt-2'>Log in</button>

                        <div className='buttom'>
                            <div className='flex items-center justify-center mb-5 mt-3'>
                                <Link href="/" 
                                    className={`${paraghraph.className} text-[14px] text-[#1d5ce2] underline`}
                                >Forgot Password?</Link>
                            </div>
                            <div className="flex-grow border-t border-gray-200 mt-[2px]"></div>
                            <p className="text-center text-[14px] mt-3">Don't have an account? <Link href="/signup"
                                className={`${paraghraph.className} text-[14px] text-[#1d5ce2] underline`}
                            >Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page