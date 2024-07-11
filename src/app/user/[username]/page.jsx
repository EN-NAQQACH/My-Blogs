'use client'
import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import { playfair } from "@/styles/Fonts";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function page() {
  return (
    <div className='p-[60px]'>
      <div className='mt-5  p-2'>
        <div className='write-content'>
          <div className='grid grid-cols-3 min-h-lvh '>
            <div className='col-start-1 col-end-3'>
              <div className='w-[100%] '>
                <p className='p-3 w-fit'>Blog's Published</p>
              </div>
              <div className='content h-lvh p-2'>
                <div className='blogs-cards flex flex-col gap-3'>
                  <div className='blog-card border rounded-md pl-5 pr-5 pt-2 pb-2'>
                    <div className='blog-card-content flex items-center'>
                      <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                          <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                            <img src="/toyotahero.jpg" alt="" className='w-full h-full object-cover' />
                          </div>
                          <div>
                            <p className='text-[13px]'>@mohssine</p>
                          </div>
                          <div className='post-categorie text-[13px] border pl-[10px] pt-[2px] pb-[2px] pr-[10px] rounded-xl'>
                            <p>
                              fashion
                            </p>
                          </div>
                        </div>
                        <div className='post-infos'>

                          <div className='title'>
                            <p className={`${playfair.className} `}>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                          </div>
                          <div className='w-[70%] text-[12px] text-gray-500'>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At aliquam a quasi ipsa voluptas quisquam veniam velit labore illum! Sequi magni</p>
                          </div>
                        </div>
                        <div className='post-comments'>
                          <div className='comments'>
                            <p className='text-[12px]'>30 <span >comments</span></p>
                          </div>
                        </div>
                      </div>
                      <div className='post-image'>
                        <div className='w-[100px] h-[100px] overflow-hidden rounded-md'>
                          <img src="/fashion.jpg" alt="" className='w-full h-full object-cover' />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='blog-card border rounded-md pl-5 pr-5 pt-2 pb-2'>
                    <div className='blog-card-content flex items-center'>
                      <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                          <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                            <img src="/toyotahero.jpg" alt="" className='w-full h-full object-cover' />
                          </div>
                          <div>
                            <p className='text-[13px]'>@mohssine</p>
                          </div>
                          <div className='post-categorie text-[13px] border pl-[10px] pt-[2px] pb-[2px] pr-[10px] rounded-xl'>
                            <p>
                              fashion
                            </p>
                          </div>
                        </div>
                        <div className='post-infos'>

                          <div className='title'>
                            <p className={`${playfair.className} `}>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                          </div>
                          <div className='w-[70%] text-[12px] text-gray-500'>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At aliquam a quasi ipsa voluptas quisquam veniam velit labore illum! Sequi magni</p>
                          </div>
                        </div>
                        <div className='post-comments'>
                          <div className='comments'>
                            <p className='text-[12px]'>30 <span >comments</span></p>
                          </div>
                        </div>
                      </div>
                      <div className='post-image'>
                        <div className='w-[100px] h-[100px] overflow-hidden rounded-md'>
                          <img src="/toyotahero.jpg" alt="" className='w-full h-full object-cover' />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='blog-card border rounded-md pl-5 pr-5 pt-2 pb-2'>
                    <div className='blog-card-content flex items-center'>
                      <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                          <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                            <img src="/toyotahero.jpg" alt="" className='w-full h-full object-cover' />
                          </div>
                          <div>
                            <p className='text-[13px]'>@mohssine</p>
                          </div>
                          <div className='post-categorie text-[13px] border pl-[10px] pt-[2px] pb-[2px] pr-[10px] rounded-xl'>
                            <p>
                              fashion
                            </p>
                          </div>
                        </div>
                        <div className='post-infos'>

                          <div className='title'>
                            <p className={`${playfair.className} `}>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                          </div>
                          <div className='w-[70%] text-[12px] text-gray-500'>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At aliquam a quasi ipsa voluptas quisquam veniam velit labore illum! Sequi magni</p>
                          </div>
                        </div>
                        <div className='post-comments'>
                          <div className='comments'>
                            <p className='text-[12px]'>30 <span >comments</span></p>
                          </div>
                        </div>
                      </div>
                      <div className='post-image'>
                        <div className='w-[100px] h-[100px] overflow-hidden rounded-md'>
                          <img src="/food.jpg" alt="" className='w-full h-full object-cover' />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>


            
            <div className=' border-l-1 h-fit'>
              <div className='username-infos p-3'>
                <div className='flex flex-col gap-3'>
                  <div className='w-[100px] h-[100px] overflow-hidden rounded-full'>
                    <img src="/toyotahero.jpg" alt="" className='w-full h-full  object-cover' />
                  </div>
                  <div>
                    <p className='text-[18px]'>@mohssine</p>
                  </div>
                </div>
                <div className='text-gray-800'>
                  <div className='flex flex-col gap-2 mt-4 text-[13px]'>
                    <p>mohssine</p>
                    <p>0 blogs</p>
                    <button className='pl-5 pt-[6px] pb-[6px] pr-5 border w-fit mt-3 rounded-md '>Edit Profile</button>
                  </div>
                  <div className='w-[90%] mt-7 text-[13px]'>
                    <p>hi i'm mohssine i'm interesting sharing beutifull blogs, technologies</p>
                  </div>
                  <div className='sharepsot mt-6'>
                    <div className='flex gap-3  items-center'>

                      <div>
                        <InstagramIcon />
                      </div>
                      <div>
                        <FacebookOutlinedIcon />
                      </div>
                      <div>
                        <XIcon />
                      </div>
                    </div>
                  </div>
                  <div className='mt-5 text-[13px]'>
                    <p>Joined on 19 sep 2023</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page