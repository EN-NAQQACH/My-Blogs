"use client"
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"
import { LuPenSquare } from "react-icons/lu";
import { useSelector } from 'react-redux';

function Navbar() {
  const [navbarscroll, setnavbarscroll] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const user = useSelector((state) => state.user);

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

  const loginLinkClass = (baseClass) => {
    if (pathname === '/' || pathname.startsWith('/post/')) {
      return navbarscroll ? `${baseClass} border-black ` : `${baseClass}`;
      
    }else{
      return `${baseClass} border-black !text-[white] bg-[black]`;
    }
  }

  const navbarClass = () => {

    // if there we scrolled
    if (navbarscroll) {
      if (pathname === '/' || pathname.startsWith('/post/')) {
        return 'text-white bg-white transition-all duration-200 pl-[80px] pr-[80px] pt-[15px] pb-[15px] fixed w-[100%] z-20 text-[14px]';
      }
      return 'bg-[#ffffff27] bg-white transition-all duration-200 pl-[80px] pr-[80px] pt-[15px] pb-[15px] fixed text-black w-[100%] z-20 text-[14px]';
    }
    // if we didnt scroll
    if (pathname === '/' || pathname.startsWith('/post/')) {
      return 'pl-[80px] bg-black bg-opacity-20 pr-[80px] pt-[15px] pb-[15px]  text-[14px] fixed text-black w-[100%] z-20';
    }
    return 'pl-[80px] pr-[80px] pt-[15px] pb-[15px] border-b border-gray-200 text-[14px] fixed text-black w-[100%] z-20';

  };

  return (
    <div className={navbarClass()}>
      <div className={linkClass('flex items-center justify-between')}>
        <div className='font-[600]'>
          M.Blogs
        </div>
        <div className='flex gap-4 items-center'>

          <Link href="/" className={linkClass('font-[600]')}> home </Link>
          {session ?
            <>
              <Link href="/write" className='flex items-center rounded-full overflow-hidden gap-2 bg-gray-100 cursor-pointer p-2'>
                <LuPenSquare size={15} color='gray' />
              </Link>
              <div className="dropdown dropdown-end">
                <div className="ring-primary ring-offset-base-100  h-10 w-10 rounded-full overflow-hidden ring ring-offset-2" tabIndex={0} role="button">
                  {user?.image ?
                    (
                      <img src={user?.image} className='object-cover w-full h-full' />

                    ) :
                    (
                      <img src="/profile-image.png" alt="profile image" className='object-cover w-full h-full bg-opacity-5 ' />

                    )}
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-white rounded-md mt-2 z-[1] w-52 p-0 overflow-hidden shadow">
                  <li className='hover:bg-gray-100 text-gray-500 p-1'><Link href={`/user/${user.username}/${user._id}`}>Profile</Link></li>
                  <li className='hover:bg-gray-100 text-gray-500 p-1'><Link href='/dashboard'>Dashboard</Link></li>
                  <li className='hover:bg-gray-100 text-gray-500 p-1'><Link href='/settings'>Setting</Link></li>
                  <li onClick={() => signOut(
                    { callbackUrl: '/login' }
                  )} className='hover:bg-gray-100 p-1'><a className='flex flex-col items-start'>
                      <p className='text-black'>Sign Out</p>
                      <p className='mt-[-6px] text-[12px] text-gray-500'>@{user?.username}</p>

                    </a></li>
                </ul>
              </div>
            </>

            :
            <>
              <Link href="/blog" className={linkClass('font-[600]')}> blogs </Link>
              <Link href="/login" className={loginLinkClass('border pl-3 pt-1 pb-1 pr-3 rounded-md font-[600]')}> Login </Link>
              <Link href="/signup" className={linkClass('border pl-3 pt-1 pb-1 pr-3 rounded-md font-[600]')}> Register </Link>
            </>
          }

        </div>
      </div>
    </div>
  )
}

export default Navbar