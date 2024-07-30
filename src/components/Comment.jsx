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
    const [addReply, setAddReply] = useState(false)
    const [comment, setcomment] = useState('');
    const [comments, setComments] = useState([]);
    const [reply, setreply] = useState('');
    const [replyTo, setReplyTo] = useState(null);
    const handleShowReplies = (commentId) => {
        setShowreplies((prev) => ({
            ...prev,
            [commentId] : !prev[commentId]

        })
        );
    };
    const handleAddReplies = (commentId) => {
        setReplyTo(commentId)
        setAddReply((prevState) => ({
            ...prevState,
            [commentId]: prevState[commentId] === undefined ? true : prevState[commentId]
        }));
    }
    const handleCancel = (commentId) => {
        setReplyTo(null)
        setreply('')
        setAddReply((prevState) => ({
            ...prevState,
            [commentId]: undefined
        }));
    }
    const fetchComments = async () => {
        try {
            const res = await fetch(`/api/comment/getcomments?blog_id=${blog_id}`);
            const data = await res.json();
            setComments(data.comments);
        } catch (e) {
            console.log(e);
        }
    };
    const AddComment = async () => {
        if (!session) {
            message.error("you must login to comment")
        }
        // if (!comment.length || !reply.length ) {
        //     message.error("comment can't be empty")
        // }
        try {
            const res = await fetch('/api/comment/add', {
                method: 'POST',
                body: JSON.stringify({
                    blog_id,
                    commented_by,
                    comment: comment || reply,
                    blog_author,
                    replyTo: replyTo || null
                }),
                cache: 'no-store',
            })
            const data = await res.json()
            if (res.ok) {
                message.success("comment added successfully")
                fetchComments();
                setreply('');
                setcomment('');
            } else {
                console.log(data);
            }
        } catch (e) {
            console.log(e);
        }

    }
    useEffect(() => {
        fetchComments();
    }, [blog_id]);
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
                    {comments?.filter(c => !c.parent).map((c) => (
                            <div className='user-comment flex flex-col gap-2 w-[100%]' key={c._id}>
                                <div className='flex flex-col gap-2 items-start border-1 rounded-sm p-5'>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                                            <img src={c.commented_by?.image} alt="" className='object-cover w-full h-full' />
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
                                                {c.children?.length > 0 && (
                                                    <button
                                                        onClick={() => handleShowReplies(c._id)}
                                                        className='pl-3 flex items-center gap-2 text-[10px] rounded-lg pt-1 bg-[#b4b4b41f] pb-1 pr-3'
                                                    >
                                                        <FaRegComment /> {c.children.length} reply
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => handleAddReplies(c._id)}
                                                    className='pl-3 text-[10px] underline pt-1 pb-1 pr-3 bg-gray-100 rounded-3xl'
                                                >
                                                    Reply
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {showreplies[c._id] && (
                                        <div className='replies-container flex flex-col gap-2'>
                                            {c.children.map((reply) => (
                                                <div className='replies ml-8 mt-2 flex flex-col gap-2 items-start border-l-2 p-2' key={reply._id}>
                                                    <div className='flex items-center gap-2'>
                                                        <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                                                            <img src="/travel.jpg" alt="" className='object-cover w-full h-full' />
                                                        </div>
                                                        <div className='flex flex-col'>
                                                            <a href='#' className='text-[14px]'>@{reply.commented_by?.username}</a>
                                                            <span className='text-[10px] ml-2 text-gray-400'>2023.04.15</span>
                                                        </div>
                                                    </div>

                                                    <div className='flex justify-between w-[100%]'>
                                                        <div className='flex flex-col gap-4'>
                                                            <p className='text-[13px]'>
                                                                {reply.comment}
                                                            </p>
                                                            <div className='flex gap-3 items-center'>
                                                                {reply.children?.length > 0 && (
                                                                    <button
                                                                        onClick={() => handleShowReplies(reply._id)}
                                                                        className='pl-3 flex items-center gap-2 text-[10px] rounded-lg pt-1 bg-[#b4b4b41f] pb-1 pr-3'
                                                                    >
                                                                        <FaRegComment /> {reply.children.length} reply
                                                                    </button>
                                                                )}
                                                                <button
                                                                    onClick={() => handleAddReplies(reply._id)}
                                                                    className='pl-3 text-[10px] underline pt-1 pb-1 pr-3'
                                                                >
                                                                    Reply
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {addReply[c._id] && (
                                        <div className="Addreply mt-3 ml-5 w-[95%]">
                                            <textarea
                                                placeholder="Leave a reply..."
                                                value={reply} onChange={(e) => setreply(e.target.value)}
                                                className="outline-none border text-[13px] text-sm  p-2 rounded-md w-[100%]"
                                            />
                                            <div className="flex gap-2 mt-2">
                                                <button  onClick={() => AddComment()} className="bg-black text-white pl-5 pr-5 pt-1 pb-1 text-[12px] rounded-full">Reply</button>
                                                <button onClick={() => handleCancel(c._id)} className="bg-gray-100 pl-5 pr-5 pt-1 pb-1 text-[12px]  rounded-full">Cancel</button>
                                            </div>
                                        </div>
                                    )}



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