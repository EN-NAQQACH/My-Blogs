"use client"
import React,{useState} from 'react'
import Link from 'next/link'


function Navbar() {
    const [navbarscroll , setnavbarscroll] = useState(false);
    const handleScroll = () =>{
        if(window.scrollY >= 50){
            setnavbarscroll(true)
        }else{
            setnavbarscroll(false)
        }
    }
    window.addEventListener('scroll',handleScroll);
    return (
        <div className={navbarscroll ? 'bg-[white] transition-all duration-200  pl-[80px] pr-[80px] pt-[25px] pb-[25px] fixed text-black w-[100%]  z-10 ' : 'p-[30px] fixed text-white w-[100%]  z-10 ' }>
            <div className='flex justify-between '>
                <div>
                    M.Blogs
                </div>
                <div className='flex gap-4'>
                    <Link href="/about"> about </Link>
                    <Link href="/"> home </Link>
                    <Link href="/contact"> contact </Link>
                    <Link href="/blog"> My blog </Link>
                    <Link href="/product"> Login </Link>
                    <Link href="/product"> Register </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar