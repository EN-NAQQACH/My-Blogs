import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { playfair } from "@/styles/Fonts";

function Blogs() {
  return (
    <div className='w-full'>
      <div>
        Manage Blog
      </div>
      <div className='main p-4 h-lvh mt-3'>
        <section>
          <main className='w-[100%]'>

            <div className="w-[100%] flex items-center   bg-[#e9e9e960]  border-1 border-transparent rounded-3xl p-[3px] focus-within:border-gray-300 focus-within:border-1 text-[13px]">
              <SearchIcon className="text-gray-500 mr-1 ml-2 " />
              <input type="text" placeholder='Search Blogs' className=' w-[100%] p-[8px] rounded-[4px]   outline-none  bg-transparent' />
            </div>
            <section className='blogs mt-3'>
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
                              Edit
                            </p>
                          </div>
                          <div className='post-categorie text-[13px] border-red-600 border-1 pl-[10px] pt-[2px] pb-[2px] pr-[10px] rounded-xl text-red-600'>
                            <p>
                              Remove
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
                </div>
              </div>
            </section>

          </main>
        </section>
      </div>
    </div>
  )
}

export default Blogs