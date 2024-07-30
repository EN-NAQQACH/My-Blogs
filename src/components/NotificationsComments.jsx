
"use client"
import Link from 'next/link';
import React from 'react'
import { FaRegComment } from "react-icons/fa";

function NotificationsComments({ comments, filter,setComments }) {
  const handleRemoveComment = async (commentId) => {
    // Implement logic to remove the comment
    try {
      const response = await fetch(`/api/comment/remove?commentId=${commentId}`, {
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
        setComments(comments.filter(c => c._id !== commentId));
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className='allcomments flex flex-col gap-3 mt-3 '>
      {comments?.filter(c => !c.parent).map((c) => (
        <>
          {filter === 'comments' ? (
            <div className='user-comment flex flex-col gap-2 w-[100%]' key={c._id}>
              <div className='flex flex-col gap-2 items-start border-b-1 rounded-sm p-5'>
                <div className='flex items-center gap-2'>
                  <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                    <img src={c.commented_by?.image} alt="" className='object-cover w-full h-full' />
                  </div>
                  <div className='flex flex-col'>
                    <a href='#' className='text-[14px]'>{c.commented_by?.name} <b className='underline'>@{c.commented_by?.username}</b> commented on</a>
                    <Link href={`/post/${c.blog_id._id}`} className='text-[10px] hover:underline ml-2 text-gray-400 mt-1'><b>"{c.blog_id.title}"</b> </Link>
                  </div>

                </div>

                <div className='flex justify-between w-[100%]'>
                  <div className='flex flex-col gap-4 ml-12'>
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
                      <button
                        onClick={() => handleRemoveComment(c._id)}
                        className='pl-3 text-[10px] underline pt-1 pb-1 pr-3 bg-gray-100 rounded-3xl'
                      >
                        Delte
                      </button>
                    </div>
                  </div>
                </div>

                {/* {showreplies[c._id] && ( */}
                <div className='replies-container flex flex-col gap-2 w-[95%] '>
                  {c.children.map((reply) => (
                    <div className='replies ml-8 mt-2 flex flex-col gap-2 items-start rounded-md  w-[100%] p-2 bg-[#e2e1e242]' key={reply._id}>
                      <div className='flex items-center gap-2'>
                        <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                          <img src={reply.commented_by?.image} alt="" className='object-cover w-full h-full' />
                        </div>
                        <div className='flex flex-col'>
                          <a href='#' className='text-[12px]'><b>@{reply.commented_by?.username} </b>replied to <b className='underline'>@{c.commented_by?.username}</b> </a>
                        </div>
                      </div>

                      <div className='flex justify-between w-[100%]'>
                        <div className='flex flex-col gap-4 ml-12'>
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
                              onClick={() => handleRemoveComment(c._id)}
                              className='pl-3 text-[10px] underline pt-1 pb-1 pr-3 bg-[#e2e1e25e] rounded-3xl'
                            >
                              Delte
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* )} */}

                {/* {addReply[c._id] && (
              <div className="Addreply mt-3 ml-5 w-[95%]">
                <textarea
                  placeholder="Leave a reply..."
                  value={reply} onChange={(e) => setreply(e.target.value)}
                  className="outline-none border text-[13px] text-sm  p-2 rounded-md w-[100%]"
                />
                <div className="flex gap-2 mt-2">
                  <button onClick={() => AddComment()} className="bg-black text-white pl-5 pr-5 pt-1 pb-1 text-[12px] rounded-full">Reply</button>
                  <button onClick={() => handleCancel(c._id)} className="bg-gray-100 pl-5 pr-5 pt-1 pb-1 text-[12px]  rounded-full">Cancel</button>
                </div>
              </div>
            )} */}



              </div>
            </div>
          ) : (
            <div className='replies-container flex flex-col gap-2 w-[95%]'>
              {c.children.map((reply) => (
                <div className='replies ml-8 mt-2 flex flex-col gap-2 items-start rounded-md border-b-1  w-[100%] p-2 ' key={reply._id}>
                  <div className='flex items-center gap-2'>
                    <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                      <img src={reply.commented_by?.image} alt="" className='object-cover w-full h-full' />
                    </div>
                    <div className='flex flex-col'>
                      <a href='#' className='text-[12px]'><b>@{reply.commented_by?.username} </b>replied on </a>
                    </div>
                  </div>

                  <div className='flex justify-between w-[100%]'>
                    <div className='flex flex-col gap-4 ml-12 grow'>
                      <p className='text-[13px] bg-[#e2e1e242] p-2 w-[100%] rounded-md'>
                        {c.comment}
                      </p>
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
                          onClick={() => handleRemoveComment(reply._id)}
                          className='pl-3 text-[10px] underline pt-1 pb-1 pr-3 bg-[#e2e1e25e] rounded-3xl'
                        >
                          Delte
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}


        </>

      ))}

    </div>
  )
}

export default NotificationsComments