import React from 'react'
import { playfair } from "@/styles/Fonts";

function Hero() {
    return (
        <>
            <div className="h-[480px]">
                <img src="/blog4.jpg" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="text-center absolute top-0 flex h-[480px] justify-center items-center flex-col m-auto w-[100%] text-white">
                <p className="text-[22px]">Discover Our Blogs</p>
                <p className={`${playfair.className} text-[50px]`}>Fields Notes</p>
                <button className="text-[22px]">Let's Start</button>
            </div>

        </>
    )
}

export default Hero