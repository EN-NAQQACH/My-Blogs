import React from 'react'

function CategoriesSection() {
    return (
        <div className=' p-[50px] w-[100%]'>
            <div>
                <p>Popular Categories</p>
            </div>
            <div className='flex items-center justify-between gap-3 mt-[20px] w-[100%] '>
                <div className='flex items-center gap-2 bg-[#f6e7f2] p-3 rounded-md justify-center w-[100%]'>
                    <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                        <img src="/fashion.jpg" alt="" className='w-full h-full object-cover ' />
                    </div>
                    <p>fashion</p>
                </div>
                <div className='flex items-center gap-2 w-[100%] bg-[#e5efe5] p-3 rounded-md justify-center'>
                    <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                        <img src="/coding.jpg" alt="" className='w-full h-full object-cover ' />
                    </div>
                    <p>coding</p>
                </div>
                <div className='flex items-center gap-2 w-[100%] bg-[#dfddfc] p-3 rounded-md justify-center'>
                    <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                        <img src="/culture.png" alt="" className='w-full h-full object-cover ' />
                    </div>
                    <p>culture</p>
                </div>
                <div className='flex items-center gap-2 w-[100%] bg-[#e1f1fc] p-3 rounded-md justify-center'>
                    <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                        <img src="/food.jpg" alt="" className='w-full h-full object-cover ' />
                    </div>
                    <p>food</p>
                </div>
                <div className='flex items-center gap-2 w-[100%] bg-[#fce1da] p-3 rounded-md justify-center'>
                    <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                        <img src="/travel.jpg" alt="" className='w-full h-full object-cover ' />
                    </div>
                    <p>travel</p>
                </div>
            </div>
        </div>
    )
}

export default CategoriesSection