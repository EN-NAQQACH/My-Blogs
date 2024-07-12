'use client'
import Link from 'next/link'
import React, { useState } from 'react'

function Notifications() {
  const [show, setShow] = useState(false)
  return (
    <div className='w-full'>
      <div>Recent Notifications</div>

      <div className='main p-4 h-lvh mt-3'>
        <div className='header'>
          <div className='text-[13px] flex gap-3'>
            <button className='pl-5 pr-5 pt-1 pb-1 rounded-3xl bg-gray-200'>All</button>
            <button className='pl-5 pr-5 pt-1 pb-1 rounded-3xl bg-gray-200'>Comments</button>
            <button className='pl-5 pr-5 pt-1 pb-1 rounded-3xl bg-gray-200'>Reply</button>
          </div>
        </div>
        <section className='main-content p-4'>
          <main className='Comment-content mt-5 flex flex-col gap-3'>

            <div className='comment flex gap-3  border-b-1 pb-3 w-[100%]'>
              <div className='user-photo w-[50px] h-[50px] rounded-full overflow-hidden '>
                <img src="/carhero.jpg" alt="" className='object-cover h-full w-full' />
              </div>
              <div className='user-info grow text-[13px] text-gray-500 flex flex-col gap-4'>
                <div>
                  <p>mohssine
                    <Link href='/notifications' className='underline pl-1 pr-1 text-[14px] font-bold text-black ' >@mohssine123</Link>
                    commented on
                  </p>
                  <p >"the brightness and lightness"</p>
                </div>
                <p className='text-black'>This is a nice one</p>
                <div className='flex gap-4 text-[13px]'>
                  <p>29 Sep</p>
                  <button className='underline' onClick={() => setShow(true)}>Reply</button>
                  <buttton className='underline'>Delete</buttton>
                </div>
                {show && (
                  <div className="reply">
                    <textarea
                      name=""
                      placeholder="Leave a comment..."
                      className="outline-none border w-[100%] p-2 rounded-md"
                    ></textarea>
                    <div className="flex gap-2">
                      <button className="pl-5 pt-1 pb-1 pr-5 bg-black text-white rounded-xl mt-2">
                        Reply
                      </button>
                      <button className="pl-5 pt-1 pb-1 pr-5 bg-gray-100 rounded-xl mt-2" onClick={() => setShow(false)}>
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>

            <div className='comment flex gap-3  border-b-1 pb-3'>
              <div className='user-photo w-[50px] h-[50px] rounded-full overflow-hidden '>
                <img src="/carhero.jpg" alt="" className='object-cover h-full w-full' />
              </div>
              <div className='user-info grow text-[13px] text-gray-500 flex flex-col gap-4'>
                <div>
                  <p>mohssine
                    <Link href='/notifications' className='underline pl-1 pr-1 text-[14px] font-bold text-black ' >@mohssine123</Link>
                    commented on
                  </p>
                  <p >"the brightness and lightness"</p>
                </div>
                <p className='text-black'>This is a nice one</p>
                <div className='flex gap-4 text-[13px]'>
                  <p>29 Sep</p>
                  <button className='underline'>Delete</button>
                </div>
                <div className='reply-comment p-2 rounded-md w-[100%] bg-gray-100'>
                  <div className='comment flex gap-3'>
                    <div className='user-photo w-[35px] h-[35px] rounded-full overflow-hidden '>
                      <img src="/coding.jpg" alt="" className='object-cover h-full w-full' />
                    </div>
                    <div className='user-info text-[13px] text-gray-500 flex flex-col gap-4'>
                      <div>
                        <p>
                          <Link href='/notifications' className='underline pl-1 pr-1 text-[13px] font-bold text-black ' >@mohssine123</Link>
                          replied to
                          <Link href='/notifications' className='underline pl-1 pr-1 text-[13px] font-bold text-black ' >@mohssine485</Link>
                        </p>
                      </div>
                      <p className='text-black'>This is a nice one</p>
                      <div className='flex gap-4 text-[13px]'>
                        <button className='underline'>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </main>

          <main className='Reply-content mt-5 flex flex-col gap-3'>
            <div className='comment flex gap-3  border-b-1 pb-3 w-[100%]'>
              <div className='user-photo w-[50px] h-[50px] rounded-full overflow-hidden '>
                <img src="/carhero.jpg" alt="" className='object-cover h-full w-full' />
              </div>
              <div className='user-info grow text-[13px] text-gray-500 flex flex-col gap-4'>
                <div>
                  <p>mohssine
                    <Link href='/notifications' className='underline pl-1 pr-1 text-[14px] font-bold text-black ' >@mohssine123</Link>
                    replied on
                  </p>
                </div>
                <p className='text-gray-600 bg-gray-100 p-2 rounded-md'>This is a nice one</p>
                <p className='text-black '>This is a nice one</p>
                <div className='flex gap-4 text-[13px]'>
                  <p>29 Sep</p>
                  <button className='underline' onClick={() => setShow(true)}>Reply</button>
                </div>
                {show && (
                  <div className="reply">
                    <textarea
                      name=""
                      placeholder="Leave a comment..."
                      className="outline-none border w-[100%] p-2 rounded-md"
                    ></textarea>
                    <div className="flex gap-2">
                      <button className="pl-5 pt-1 pb-1 pr-5 bg-black text-white rounded-xl mt-2">
                        Reply
                      </button>
                      <button className="pl-5 pt-1 pb-1 pr-5 bg-gray-100 rounded-xl mt-2" onClick={() => setShow(false)}>
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </main>
        </section>
      </div>
    </div>
  )
}

export default Notifications