"use client"
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"
import { LuPenSquare } from "react-icons/lu";


function Navbar() {
  const [navbarscroll, setnavbarscroll] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setnavbarscroll(true)
      } else {
        setnavbarscroll(false)
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  const linkClass = (baseClass) => {
    if (pathname === '/' || pathname.startsWith('/post/')) {
      return navbarscroll ? `${baseClass} text-black` : `${baseClass} text-white`;
    }
    //If the pathname does not match the conditions. the function simply returns the baseClass without any modifications.
    return baseClass;
  }

  const loginLinkClass = (baseClass) =>
    (pathname === '/' || pathname.startsWith('/post/')) ? baseClass : `${baseClass} border-black !text-[white] bg-[black]`;

  const navbarClass = () => {

    // if there we scrolled
    if (navbarscroll) {
      if (pathname === '/' || pathname.startsWith('/post/')) {
        return 'text-white backdrop-blur-[20px] transition-all duration-200 pl-[80px] pr-[80px] pt-[15px] pb-[15px] fixed w-[100%] z-20 text-[14px]';
      }
      return 'bg-[#ffffff27] backdrop-blur-[20px] transition-all duration-200 pl-[80px] pr-[80px] pt-[15px] pb-[15px] fixed text-black w-[100%] z-20 text-[14px]';
    }
    // if we didnt scroll
    if (pathname === '/' || pathname.startsWith('/post/')) {
      return 'pl-[80px] pr-[80px] pt-[15px] pb-[15px]  text-[14px] fixed text-black w-[100%] z-20';
    }
    return 'pl-[80px] pr-[80px] pt-[15px] pb-[15px] border-b border-gray-200 text-[14px] fixed text-black w-[100%] z-20';

  };

  const { data: session, status } = useSession()
  console.log(session, status)



  return (
    <div className={navbarClass()}>
      <div className={linkClass('flex items-center justify-between')}>
        <div>
          M.Blogs
        </div>
        <div className='flex gap-4 items-center'>

          <Link href="/" className={linkClass('')}> home </Link>
          {session ?
            <>
              <Link href="/dashboard/write" className='flex items-center rounded-full overflow-hidden gap-2 bg-gray-100 cursor-pointer p-2'>
                <LuPenSquare size={15} color='gray' />
              </Link>
              <div className="dropdown dropdown-end">
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full overflow-hidden ring ring-offset-2" tabIndex={0} role="button">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-white rounded-md mt-2 z-[1] w-52 p-0 overflow-hidden shadow">
                  <li className='hover:bg-gray-100 text-gray-500 p-1'><Link href='/user/us'>Profile</Link></li>
                  <li className='hover:bg-gray-100 text-gray-500 p-1'><Link href='/dashboard'>Dashboard</Link></li>
                  <li className='hover:bg-gray-100 text-gray-500 p-1'><Link href='/settings'>Setting</Link></li>
                  <li onClick={() => signOut(
                    { callbackUrl: '/' }
                  )} className='hover:bg-gray-100 p-1'><a className='flex flex-col items-start'>
                      <p>Sign Out</p>
                      <p className='mt-[-6px] text-[12px] text-gray-500'>@mohssine</p>

                    </a></li>
                </ul>
              </div>
            </>

            :
            <>
              <Link href="/blog" className={linkClass('')}> blogs </Link>
              <Link href="/login" className={loginLinkClass('border pl-3 pt-1 pb-1 pr-3 rounded-md')}> Login </Link>
              <Link href="/signup" className={linkClass('border pl-3 pt-1 pb-1 pr-3 rounded-md')}> Register </Link>
            </>
          }

        </div>
      </div>
    </div>
  )
}

export default Navbar