'use client'
import React, { useState } from 'react'
import { playfair } from "@/styles/Fonts";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
function Post() {
  const [showreplies, setShowreplies] = useState(false)
  const [hidereplies, sethidereplies] = useState(false)
  const [addReply, setAddReply] = useState(false)
  return (
    <>

      <div className=' '>
        <div className="h-[580px]">
          <div>
            <img src="/carhero.jpg" alt="" className=" z-[-1] w-full object-cover fixed h-[580px]" />
          </div>
          <div className="text-center absolute h-[580px] top-0 flex items-center flex-col m-auto justify-center w-[100%]  text-white">
            <div className='max-w-[800px]'>
              <div>
                <p className={`${playfair.className} text-[55px]  text-center `}>Introducing dynamic pricing to help maximize your earnings</p>
              </div>
              <div className='mt-5'>
                <p>MAY,23 2024</p>
              </div>
              <div>
                <Link href="#content">
                  <ExpandMoreIcon className='cursor-pointer' />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <main className=' bg-white  w-[100%] pt-[79px] p-7 ' id='content'>
          <div className='w-[55%] m-auto'>
            <div className='postedby flex gap-5 justify-center flex-col items-center'>
              <div className='w-[100px] h-[100px] rounded-full overflow-hidden '>
                <img src="/carhero.jpg" alt="" className='w-full h-full object-cover' />
              </div>
              <div >
                <p>By Mohssine </p>
              </div>
              <div className=''>
                <p> <span>posted on </span><span className=''>May 23, 2024</span></p>
              </div>
            </div>
            <div className='content mt-[15px] '>
              <article className='bg-white h-fit p-2 mb-[250px]'>
                <div>
                  <div className={`${playfair.className} title  text-center w-[100%] flex justify-center `}>
                    <p className='[font-size:_clamp(32px,10vw,2em)] w-[70%]'>Take a break with these pretty pictures</p>
                  </div>
                  <div className='article-content p-1'>
                    <em className='leading-[26px] text-[15px] '>
                      Every few Fridays, we like to bring you moments of zen in the form of some of our favorite motorcars from around the Turo marketplace. Let’s keep the fun going. We like cars, you like cars, so let’s look at some cars.
                    </em>
                    <p className='mt-5'>
                      The Huracán is 10 years into a hugely successful run as the baby Lambo. This 600+ horsepower supercar capitalizes on razor-sharp handling, a naturally aspirated V10, and extroverted styling — and last year, Lamborghini added a new top version — the STO.
                    </p>
                    <div className='image1 mb-3 mt-3'>
                      <img src="/toyotahero.jpg" alt="" />
                    </div>
                    <p className='mb-6'>
                      “Super Trofeo Omologata” means this car is homologated for road use — that is to say you’re looking at a street-legal race car (keep in mind driving on racetracks is prohibited with cars booked on Turo). So that extroversion and sharpness are dialed up even further with this car.
                    </p>
                    <p>
                      This most extreme Huracán makes 630 horses from the same 5.2L V10 engine, but the STO weighs 88 pounds less than the next lightest Huracán thanks to thinner glass, carbon body panels, and magnesium wheels. The absolutely giant rear wing and roof scoop make Howard’s STO noticeably more outrageous. It’ll do 60 mph in three seconds, can reach nearly 200 mph, and is surely a monster around the track, but that outrageousness is mostly the point. It’s safe to say if you’re lucky enough to sample this raging bull, you won’t soon forget about it.
                    </p>
                    <div className='image1 mb-3 mt-3'>
                      <img src="/carhero.jpg" alt="" />
                    </div>
                    <div className='image1 mb-3 mt-3'>
                      <img src="/lambrghini.jpg" alt="" />
                    </div>
                    <div className='image1 mb-3 mt-3'>
                      <img src="/toyotahero.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className='sharepsot mt-6'>
                  <div className='flex gap-3 justify-center items-center'>
                    <p className='text-[20px]'>
                      Share
                    </p>
                    <div className='cursor-pointer'>
                      <InstagramIcon />
                    </div>
                    <div className='cursor-pointer'>
                      <FacebookOutlinedIcon />
                    </div>
                    <div className='cursor-pointer'>
                      <XIcon />
                    </div>
                  </div>
                </div>
                <div className='tags mt-10'>
                  <div className='flex items-center gap-2'>
                    <p>Tags :</p>
                    <div className='flex gap-2 flex-wrap'>
                      <Link href='/' className='pl-3 text-[13px] pt-1 pb-1 pr-3 border hover:bg-gray-300 rounded-md'>fashion</Link>
                      <Link href='/' className='pl-3 text-[13px] pt-1 pb-1 pr-3 border hover:bg-gray-300  rounded-md'>coding</Link>
                      <Link href='/' className='pl-3 text-[13px] pt-1 pb-1 pr-3 border hover:bg-gray-300  rounded-md'>culture</Link>
                      <Link href='/' className='pl-3 text-[13px] pt-1 pb-1 pr-3 border hover:bg-gray-300  rounded-md'>food</Link>
                      <Link href='/' className='pl-3 text-[13px] pt-1 pb-1 pr-3 border hover:bg-gray-300  rounded-md'>travel</Link>
                    </div>
                  </div>
                </div>
                <div className='comments mt-5 w-[100%] '>
                  <div className='comments-content'>
                    <p className='text-[16px]'>Comments</p>
                    <div className='mt-2'>
                      <textarea name="comment" id="" placeholder='write a comment' className='border rounded-lg w-[100%] text-[12px] h-[100px] p-[2px] pl-[7px] outline-none'></textarea>
                    </div>
                    <div className='flex justify-end'>
                      <button className='text-[black] bg-[#f0f0f0] pl-4 pt-1 pb-1  pr-4 rounded-lg'>comment</button>
                    </div>
                    <div className='allcomments flex flex-col gap-3 mt-3'>
                      <div className='user-comment flex flex-col gap-2'>

                        <div className='flex gap-2 items-start bg-[#e6e6e621] p-2 rounded-lg'>
                          <div className='w-[50px] h-[50px] rounded-full overflow-hidden '>
                            <img src="/travel.jpg" alt="" className='object-cover w-full h-full' />
                          </div>
                          <div className='flex justify-between w-[100%]'>
                            <div className='flex flex-col gap-4'>
                              <p className=''>
                                <a href='#'>@mohssine</a>
                                <span className='text-[10px] ml-2 text-gray-400'>2023.04.15</span>
                              </p>
                              <p className='text-[14px]'>
                                This is a comment from mohssine
                              </p>
                              <div className='flex gap-3 items-center'>
                                <button onClick={() => setShowreplies(true)} className='pl-3 text-[10px] rounded-lg pt-1 bg-[#b4b4b41f] pb-1 pr-3'>5 reply</button>
                                <button className='pl-3 text-[10px] underline pt-1 pb-1 pr-3'>reply</button>
                              </div>
                            </div>
                            <div className='border-1 flex justify-center items-center p-1 rounded-md w-fit h-fit' >
                              <DeleteOutlineIcon style={{ fontSize: '15px' }} />
                            </div>
                          </div>

                        </div>
                        {showreplies &&
                          <div className='ml-8 flex gap-2 items-start bg-[#e6e6e621] p-2 rounded-lg'>
                            <div className='w-[50px] h-[50px] rounded-full overflow-hidden '>
                              <img src="/travel.jpg" alt="" className='object-cover w-full h-full' />
                            </div>
                            <div className='flex justify-between w-[100%]'>
                              <div className='flex flex-col gap-4'>
                                <p className=''>
                                  <a href='#'>@mohssine</a>
                                  <span className='text-[10px] ml-2 text-gray-400'>2023.04.15</span>
                                </p>
                                <p className='text-[14px]'>
                                  This is a comment from mohssine
                                </p>
                                <div className='flex gap-3 items-center'>
                                  <button  className='pl-3 text-[10px] rounded-lg pt-1 bg-[#b4b4b41f] pb-1 pr-3'>5 reply</button>
                                  <button className='pl-3 text-[10px] underline pt-1 pb-1 pr-3'>reply</button>
                                </div>
                              </div>
                              <div className='border-1 flex justify-center items-center p-1 rounded-md w-fit h-fit' >
                                <DeleteOutlineIcon style={{ fontSize: '15px' }} />
                              </div>
                            </div>

                          </div>
                        }

                      </div>
                    </div>
                  </div>

                </div>


              </article>
            </div>
          </div>

        </main>
      </div>

    </>
  )
}

export default Post