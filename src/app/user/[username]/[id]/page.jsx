'use client'
import React, { useEffect, useState } from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import { playfair } from "@/styles/Fonts";
import Link from 'next/link';

function formatDate(dateString) {
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', options);
}

function page({params}) {

  const {id} = params;
  const [user, setuser] = useState({});
  const getUserInfo = async () => {
  
      try {
        const res = await fetch(`/api/user/getinfo?userId=${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();
        if (res.ok) {
          setuser(data);
        } else {
          console.error(data);
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
  };
  useEffect(() => {
    getUserInfo();
  }, [id]);

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

                  {user.blogs?.map((blog, index) =>

                  (

                    <div className='blog-card border rounded-md pl-5 pr-5 pt-2 pb-2'>
                      <div className='blog-card-content flex items-center justify-between'>
                        <div className='flex flex-col gap-2 grow'>
                          <div className='flex items-center gap-2'>
                            <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                              <img src={user.image} alt="" className='w-full h-full object-cover' />
                            </div>
                            <div>
                              <p className='text-[13px]'>@{user.username}</p>
                            </div>
                            <div className='post-categorie text-[13px] border pl-[10px] pt-[2px] pb-[2px] pr-[10px] rounded-xl'>
                              <p>
                                {blog.tags[0]}
                              </p>
                            </div>
                          </div>
                          <div className='post-infos'>

                            <div className='title'>
                              <p className={`${playfair.className} `}>{blog.title}</p>
                            </div>
                            <div className='w-[70%] text-[12px] text-gray-500'>
                              <p>{blog.description}</p>
                            </div>
                          </div>
                          <div className='post-comments'>
                            <div className='comments'>
                              <p className='text-[12px]'>30 <span >comments</span></p>
                            </div>
                          </div>
                        </div>
                        <div className='post-image'>
                          <div className='w-[150px] h-[110px] overflow-hidden rounded-md'>
                            <img src={blog.banner} alt="" className='w-full h-full object-cover' />
                          </div>
                        </div>
                      </div>
                    </div>
                  )

                  )}

                </div>
              </div>
            </div>



            <div className=' border-l-1 h-fit'>
              <div className='username-infos p-3'>
                <div className='flex flex-col gap-3'>
                  <div className='w-[100px] h-[100px] overflow-hidden rounded-full'>
                    <img src={user.image} alt="" className='w-full h-full  object-cover' />
                  </div>
                  <div>
                    <p className='text-[18px]'>@{user.username}</p>
                  </div>
                </div>
                <div className='text-gray-800'>
                  <div className='flex flex-col gap-2 mt-4 text-[13px]'>
                    <p>{user.name}</p>
                    <p>{user.blogs?.length} blogs</p>
                    <Link href={`/settings/edit-profile`} className='pl-5 pt-[6px] pb-[6px] pr-5 border w-fit mt-3 rounded-md '>Edit Profile</Link>
                  </div>
                  <div className='w-[90%] mt-7 text-[13px]'>
                    <p>{user.bio}</p>
                  </div>
                  <div className='sharepsot mt-6'>
                    <div className='flex gap-3  items-center'>
                      {user.socialLinks?.instagram && <div>
                        <a href={user.socialLinks?.instagram}><InstagramIcon /></a>
                      </div>}
                      {user.socialLinks?.facebook && <div>
                        <a href={user.socialLinks?.facebook}><FacebookOutlinedIcon /></a>
                      </div>}
                      {user.socialLinks?.twitter && <div>
                        <a href={user.socialLinks?.twitter}><XIcon /></a>
                      </div>}
                    </div>
                  </div>
                  <div className='mt-5 text-[13px] text-gray-500'>
                    <p>Joined on {formatDate(user.createdAt)}</p>
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