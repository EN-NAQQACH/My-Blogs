"use client"
import React, { useEffect } from 'react'
import { playfair } from '@/styles/Fonts'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useSelector } from 'react-redux'


export default function BlogComponent({search}) {
    const users = localStorage.getItem('user');
    const [blogs, setblogs] = React.useState([]);
    const userId = JSON.parse(users)?._id
    const user = useSelector((state) => state.user);
  
    useEffect(() => {
        const getBlogs = async () => {
            try {
                const response = await fetch(`/api/blog/gettblogs?userId=${userId}&search=${search}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    cache: 'no-cache',
                });
                const blogs = await response.json();
                if (!response.ok) {
                    throw new Error('Failed to fetch blogs');
                } else {
                    setblogs(blogs);
                }
            } catch (e) {
                console.log(e);
            }
        }
        getBlogs();
    }, [search]);

    const handleRemoveBlog = async (blogId) => {
        try {
            const response = await fetch(`/api/blog/removeblog?blogId=${blogId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                cache: 'no-cache',
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error('Failed to remove blog');
            } else {
                setblogs(blogs.filter((blog) => blog._id !== blogId));
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        blogs?.map((blog, index) => (
            <div className='blog-card border rounded-md pl-5 pr-5 pt-2 pb-2' key={index}>
                <div className='blog-card-content flex items-center justify-between'>
                    <div className='flex flex-col gap-2 grow'>
                        <div className='flex items-center gap-2'>
                            <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                                <img src={blog.author.image} alt="" className='w-full h-full object-cover' />
                            </div>
                            <div>
                                <p className='text-[13px]'>@{blog.author.username}</p>
                            </div>
                            <div className='post-categorie text-[13px] border pl-[10px] pt-[2px] pb-[2px] pr-[10px] rounded-xl'>
                                <Link href={`/edit/blog/${blog._id}`}>
                                    Edit
                                </Link>
                            </div>
                            <div className='post-categorie text-[13px] border-red-600 border-1 pl-[10px] pt-[2px] pb-[2px] pr-[10px] rounded-xl text-red-600'>
                                <button onClick={() => handleRemoveBlog(blog._id)}> 
                                    Remove
                                </button>
                            </div>
                        </div>
                        <Link href={`/post/${blog._id}`} className='post-infos'>

                            <div className='title'>
                                <p className={`${playfair.className} `}>{blog.title}</p>
                            </div>
                            <div className='w-[70%] text-[12px] text-gray-500'>
                                <p>{blog.description}</p>
                            </div>
                        </Link>
                        <div className='post-comments'>
                            <div className='comments'>
                                <p className='text-[12px]'>{blog.comments.length} <span >comments</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='post-image'>
                        <div className='w-[170px] h-[120px] overflow-hidden rounded-md'>
                            <img src={blog.banner} alt="" className='w-full h-full object-cover' />
                        </div>
                    </div>
                </div>
            </div>
        ))

    )
}