"use client"
import React, { useState, useEffect } from 'react'
import { FaRegComment } from "react-icons/fa";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useSession } from 'next-auth/react';
import { message } from 'antd';
function Comment({ blog_id, blog_author }) {
    const { data: session } = useSession();
    const user = localStorage.getItem("user")
    const commented_by = JSON.parse(user)._id
    const [showreplies, setShowreplies] = useState(false)
    const [hidereplies, sethidereplies] = useState(false)
    const [addReply, setAddReply] = useState(false)
    const [comment, setcomment] = useState('');
    const [comments, setComments] = useState([]);
    const handleShowReplies = () => {
        setShowreplies(prevState => !prevState);
    };
    const AddComment = async () => {
        if (!session) {
            message.error("you must login to comment")
        }
        if (!comment.length) {
            message.error("comment can't be empty")
        }
        try {
            const res = await fetch('/api/comment/add', {
                method: 'POST',
                body: JSON.stringify({
                    blog_id,
                    commented_by,
                    comment,
                    blog_author
                }),
                cache: 'no-store',
            })
            const data = await res.json()
            if (res.ok) {
                message.success('your comment added')
                setcomment('');
                setComments((prevComments) => [data, ...prevComments]);
            } else {
                console.log(data);
            }
        } catch (e) {
            console.log(e);
        }

    }

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await fetch(`/api/comment/getcomments?blog_id=${blog_id}`);
                const data = await res.json();
                setComments(data.comments);
            } catch (e) {
                console.log(e);
            }
        };
        fetchComments();
    }, [blog_id]);
    console.log(comments);
    return (
        <div>
            <div className='comments mt-5 w-[100%] '>
                <div className='comments-content'>
                    <p className='text-[16px]'>Comments</p>
                    <div className='mt-4'>
                        <textarea name="comment" id="" placeholder='write a comment' value={comment} onChange={(e) => setcomment(e.target.value)} className='border rounded-lg w-[100%] text-[12px] h-[100px] p-[8px] pl-[8px] outline-none'></textarea>
                    </div>
                    <div className='flex justify-end'>
                        <button onClick={() => AddComment()} className='text-[black] bg-[#f0f0f0b6] pl-4 pt-1 pb-1  pr-4 rounded-full'>comment</button>
                    </div>
                    <div className='allcomments flex flex-col gap-3 mt-3'>
                        {comments?.map((c,index) => (
                            <div className='user-comment flex flex-col gap-2'>
                                <div className='flex flex-col gap-2 items-start border-b-1 p-2 '>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-[40px] h-[40px] rounded-full overflow-hidden '>
                                            <img src="/travel.jpg" alt="" className='object-cover w-full h-full' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <a href='#' className='text-[14px]'>@{c.commented_by?.username}</a>
                                            <span className='text-[10px] ml-2 text-gray-400'>2023.04.15</span>
                                        </div>
                                    </div>

                                    <div className='flex justify-between w-[100%]'>
                                        <div className='flex flex-col gap-4'>

                                            <p className='text-[13px]'>
                                                {c.comment}
                                            </p>
                                            <div className='flex gap-3 items-center'>
                                                {c.children?.length >= 1 && <button onClick={() => handleShowReplies()} className='pl-3 flex items-center gap-2 text-[10px] rounded-lg pt-1 bg-[#b4b4b41f] pb-1 pr-3'><FaRegComment /> {c.children.length} reply</button>}
                                                <button className='pl-3 text-[10px] underline pt-1 pb-1 pr-3 bg-gray-100 rounded-3xl'>reply</button>
                                            </div>
                                        </div>

                                    </div>
                                    {showreplies &&
                                        (

                                            <div className='replies-container flex flex-col gap-2'>
                                                <div className='replies ml-8 mt-2 flex flex-col gap-2 items-start border-l-2 p-2 '>
                                                    <div className='flex items-center gap-2'>
                                                        <div className='w-[40px] h-[40px] rounded-full overflow-hidden '>
                                                            <img src="/travel.jpg" alt="" className='object-cover w-full h-full' />
                                                        </div>
                                                        <div className='flex flex-col'>
                                                            <a href='#' className='text-[14px]'>@mohssine</a>
                                                            <span className='text-[10px] ml-2 text-gray-400'>2023.04.15</span>
                                                        </div>
                                                    </div>

                                                    <div className='flex justify-between w-[100%]'>
                                                        <div className='flex flex-col gap-4'>

                                                            <p className='text-[13px]'>
                                                                This is a comment from mohssine
                                                            </p>
                                                            <div className='flex gap-3 items-center'>
                                                                <button onClick={() => setShowreplies(true)} className='pl-3 flex items-center gap-2 text-[10px] rounded-lg pt-1 bg-[#b4b4b41f] pb-1 pr-3'><FaRegComment /> 5 reply</button>
                                                                <button className='pl-3 text-[10px] underline pt-1 pb-1 pr-3'>reply</button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='replies ml-8 mt-2 flex flex-col gap-2 items-start border-l-2 p-2 '>
                                                    <div className='flex items-center gap-2'>
                                                        <div className='w-[40px] h-[40px] rounded-full overflow-hidden '>
                                                            <img src="/travel.jpg" alt="" className='object-cover w-full h-full' />
                                                        </div>
                                                        <div className='flex flex-col'>
                                                            <a href='#' className='text-[14px]'>@mohssine</a>
                                                            <span className='text-[10px] ml-2 text-gray-400'>2023.04.15</span>
                                                        </div>
                                                    </div>

                                                    <div className='flex justify-between w-[100%]'>
                                                        <div className='flex flex-col gap-4'>

                                                            <p className='text-[13px]'>
                                                                This is a comment from mohssine
                                                            </p>
                                                            <div className='flex gap-3 items-center'>
                                                                <button onClick={() => setShowreplies(true)} className='pl-3 flex items-center gap-2 text-[10px] rounded-lg pt-1 bg-[#b4b4b41f] pb-1 pr-3'><FaRegComment /> 5 reply</button>
                                                                <button className='pl-3 text-[10px] underline pt-1 pb-1 pr-3'>reply</button>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        )

                                    }
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Comment