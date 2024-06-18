"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'


function Navbar() {
  const [navbarscroll, setnavbarscroll] = useState(false);
  const [loginpage, setloginpage] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setnavbarscroll(true)
    } else {
      setnavbarscroll(false)
    }
  }
  window.addEventListener('scroll', handleScroll);
  useEffect(() => {
    if (window.location.pathname === '/login' || window.location.pathname === '/signup') {
      setloginpage(true)
    }
  }, [])
  const getMblogsClass = () => {
    if (navbarscroll) {
      return 'text-black';
    } else {
      return loginpage ? 'text-black' : 'text-white';
    }
  }
  return (
    <div className={navbarscroll ? 'bg-[#ffffff27] backdrop-blur-[20px] transition-all duration-200  pl-[80px] pr-[80px]  pt-[15px] pb-[15px]  fixed text-black w-[100%]  z-10 text-[14px] ' : 'pl-[80px] pr-[80px]  pt-[15px] pb-[15px] text-[14px]  fixed text-black w-[100%]  z-10 '}>
      <div className='flex items-center justify-between '>
      <div className={getMblogsClass()}>
          M.Blogs
        </div>
        {loginpage ?
          <div className='flex gap-4 items-center text-black'>
            <a className='' href="/"> home </a>
            <a className='' href="/blog"> My blog </a>
            <a className='border pl-3 pt-1 pb-1 pr-3 rounded-md !text-[#0166d9] bg-[#cbe1fa]' href="/login"> Login </a>
            <a className='border pl-3 pt-1 pb-1 pr-3 rounded-md' href="/signup"> Register </a>
          </div>
          :
          <>
            {navbarscroll ?
              <>
                <div className='flex gap-4 items-center text-black'>
                  <a className='' href="/"> home </a>
                  <a className='' href="/blog"> My blog </a>
                  <a className=' pl-3 pt-2 pb-2 pr-3 rounded-md !text-[#0166d9] bg-[#cbe1fa]' href="/login"> Login </a>
                  <a className='border pl-3 pt-2 pb-2 pr-3 rounded-md' href="/signup"> Register </a>
                </div>

              </>

              :

              <>
                <div className='flex items-center gap-4 text-white '>
                  <a className='' href="/"> home </a>
                  <a className='' href="/blog"> My blog </a>
                  <a className='border pl-3 pt-1 pb-1 pr-3 rounded-md' href="/login"> Login </a>
                  <a className='border pl-3 pt-1 pb-1 pr-3 rounded-md' href="/signup"> Register </a>
                </div>
              </>
            }

          </>

        }

      </div>
    </div>
  )
}

export default Navbar