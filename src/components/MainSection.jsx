import React from 'react'
import { playfair } from "@/styles/Fonts";
import Link from 'next/link';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
function MainSection() {
    return (
        <>

            <div className='Mainsection  pl-[50px] pr-[50px] grid grid-cols-3'>
                <div className='h-fit border col-start-1 col-end-3'>
                    <p className='text-[20px]'>Recents Blogs</p>
                    <div className='grid  grid-cols-1 gap-10 p-4 '>
                        <div className='cardBlog rounded-md flex gap-7 border p-3'>
                            <div className='ImageBlog w-[50%]'>
                                <img src="/fashion.jpg" alt="" className='w-full h-[250px] rounded-md object-cover' />
                            </div>
                            <div className='w-[50%] flex flex-col justify-between'>
                                <div>
                                    <div className='flex items-center gap-5'>
                                        <p className='mb-2 text-[12px] text-[#838383]'>2023/05/15</p>
                                        <p className='bg-[#f6e7f2] text-[13px] w-fit pl-4 pr-4 rounded-md border border-transparent mb-2'>food</p>
                                    </div>
                                    <p className={`${playfair.className} text-[20px]`}>Lorem ipsum dolor sit amet consectetur.</p>
                                    <p className='text-[13px] text-[#838383] mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eligendi expedita eum quam doloribus natus placeat labore unde non sequi, amet rem culpa? Recusandae, esse. A ab eius eos quo.
                                    </p>
                                </div>
                                <Link href={`/blog/${1}`} className='flex flex-col justify-end underline'>Read More</Link>
                            </div>
                        </div>

                        <div className='cardBlog rounded-md flex gap-7 border p-3'>
                            <div className='ImageBlog w-[50%]'>
                                <img src="/culture.png" alt="" className='w-full h-[250px] rounded-md object-cover' />
                            </div>
                            <div className='w-[50%] flex flex-col justify-between'>
                                <div>
                                    <div className='flex items-center gap-5'>
                                        <p className='mb-2 text-[12px] text-[#838383]'>2023/05/15</p>
                                        <p className='bg-[#f6e7f2] text-[13px] w-fit pl-4 pr-4 rounded-md border border-transparent mb-2'>food</p>
                                    </div>
                                    <p className={`${playfair.className} text-[20px]`}>Lorem ipsum dolor sit amet consectetur.</p>
                                    <p className='text-[13px] text-[#838383] mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eligendi expedita eum quam doloribus natus placeat labore unde non sequi, amet rem culpa? Recusandae, esse. A ab eius eos quo.
                                    </p>
                                </div>
                                <Link href={`/blog/${1}`} className='flex flex-col justify-end underline'>Read More</Link>
                            </div>
                        </div>



                    </div>
                </div>
                <div className='h-screen border'>
                    <p className='text-[20px]'>Most Popular</p>
                    <div className='p-4 flex flex-col gap-4'>
                        <div className='border-b-[1px]'>
                            <p className='bg-[#f6e7f2] text-[13px] w-fit pl-4 pr-4 rounded-md border border-transparent mb-2'>food</p>
                            <div className='mb-3'>
                                <p className='text-[#5a5a5a]'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                                <div className='flex justify-between '>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-[11px]'>Posted By.</p>
                                        <div>
                                            <img src="/fashion.jpg" alt="" className='w-[30px] h-[30px] object-cover rounded-full' />
                                        </div>
                                        <p className='text-[11px]'>Mohssine E.</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='text-[12px]'>30</p>
                                        <ChatBubbleOutlineOutlinedIcon className='text-[#5a5a5a]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border-b-[1px]'>
                            <p className='bg-[#f6e7f2] text-[13px] w-fit pl-4 pr-4 rounded-md border border-transparent mb-2'>food</p>
                            <div className='mb-3'>
                                <p className='text-[#5a5a5a]'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                                <div className='flex justify-between '>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-[11px]'>Posted By.</p>
                                        <div>
                                            <img src="/fashion.jpg" alt="" className='w-[30px] h-[30px] object-cover rounded-full' />
                                        </div>
                                        <p className='text-[11px]'>Mohssine E.</p>
                                    </div>
                                    <div className='flex items-center'>

                                        <p className='text-[12px]'>30</p>
                                        <ChatBubbleOutlineOutlinedIcon className='text-[#5a5a5a]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border-b-[1px]'>
                            <p className='bg-[#f6e7f2] text-[13px] w-fit pl-4 pr-4 rounded-md border border-transparent mb-2'>food</p>
                            <div className='mb-3'>
                                <p className='text-[#5a5a5a]'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                                <div className='flex justify-between '>
                                    <div className='flex gap-2 items-center'>
                                        <p className='text-[11px]'>Posted By.</p>
                                        <div>
                                            <img src="/fashion.jpg" alt="" className='w-[30px] h-[30px] object-cover rounded-full' />
                                        </div>
                                        <p className='text-[11px]'>Mohssine E.</p>
                                    </div>
                                    <div className='flex items-center'>

                                        <p className='text-[12px]'>30</p>
                                        <ChatBubbleOutlineOutlinedIcon className='text-[#5a5a5a]' />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default MainSection