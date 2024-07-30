'use client'
import React, { use } from 'react'
import { useRef, useState, useEffect, useContext } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Tag from '@/components/Tag';
import { message } from 'antd';
import { TagContext } from "@/app/context/TagContext"
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Unauthorized from '@/components/Unauthorized';
import { LuUpload } from "react-icons/lu";
const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean'], // remove formatting button
        [{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
        [{ 'align': [] }],
        ['code-block'],
        [{ 'direction': 'rtl' }], // text direction
    ]
};

function Write() {

    const fileInputRef = useRef(null);
    const quillRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [Banner, setBanner] = useState('');
    const { tags, setTags } = useContext(TagContext);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [bannerTitle, setbannerTitle] = useState('');
    const [shortdescription, setshortdescription] = useState('');

    const handleParagraphClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        setBanner(event.target.files[0]);
        setLoading(true);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
        try {
            const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload`, {
                method: 'POST',
                body: formData,
            });

            const data = await res.json();
            setBanner(data.secure_url);
        } catch (error) {
            console.error("Error uploading the file:", error);
        } finally {
            setLoading(false); // End loading
        }
    };
    const maxlenght = 200;
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (e.target.value.trim() !== '' && !tags.includes(e.target.value)) {
                setTags([...tags, e.target.value]);
                e.target.value = '';
            } else {
                message.error('Please enter a unique tag');
            }
        }
    }
    const handleContentChange = async (content) => {
        setContent(content);
    };
    const processImages = async (htmlContent) => {
        const div = document.createElement('div');
        div.innerHTML = htmlContent;

        const images = div.getElementsByTagName('img');
        for (let img of images) {
            if (img.src.startsWith('data:')) {
                const res = await fetch(img.src);
                const blob = await res.blob();
                const formData = new FormData();
                formData.append('file', blob);
                formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
                try {
                    const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload`, {
                        method: 'POST',
                        body: formData,
                    });
                    const data = await res.json();
                    img.src = data.secure_url;
                } catch (error) {
                    console.error('Error uploading the image:', error);
                }
            }
            img.className = 'block m-auto';
        }
        return div.innerHTML;
    }

    const router = useRouter();
    const { data: session, status } = useSession();

    if (!session || status === 'loading' || status === 'unauthenticated') {
        return <Unauthorized />
    }

    const handleAddBlog = async () => {
        if (!title || !content || !shortdescription || !Banner || !tags) {
            message.error('Please fill all the fields');
            return;
        }
        const processedContent = await processImages(content);
        const res = await fetch(`/api/blog/add?userId=${session?.user.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                content: processedContent,
                tags,
                bannerTitle,
                banner: Banner,
                author: session.user.id,
                description: shortdescription,
            }),
            cache: 'no-store',
        });
        const data = await res.json();
        if (res.status === 200) {
            message.success('Blog added successfully');
            router.push(`/post/${data._id}`);
        } else {
            message.error('Error adding blog');
        }
    }
    return (
        <div className='p-[60px] min-h-lvh m-auto  '>
            <div className='mt-10 mb-52'>
                <div className='flex justify-end gap-3'>
                    <button onClick={() => handleAddBlog()} className='pr-5 pl-5 bg-black text-white pt-1 pb-1 rounded-3xl text-[13px]'>Publish</button>
                    <button className='pr-5 pl-5 bg-gray-50 text-black pt-1 pb-1 rounded-3xl text-[13px]'>Cancel</button>
                </div>
                <div className='flex justify-center'>
                    <div className='write-section mt-5  min-h-lvh w-[70%] p-5'>
                        <div className='content-write'>
                            <div className='bannerTitle mt-1 h-[75px] '>
                                <textarea value={bannerTitle} onChange={(e) => setbannerTitle(e.target.value)} id="" placeholder='Banner Title' className='p-2 text-center text-[25px] text-gray-500 bg-transparent w-full h-[60px] outline-none resize-none  focus:placeholder:opacity-20'></textarea>
                            </div>
                            {Banner &&
                                <div onClick={handleParagraphClick} className='flex items-center gap-2 p-2 border justify-center rounded-3xl mb-3 cursor-pointer hover:bg-gray-50'>
                                    <LuUpload size={25} />
                                    <p>Change Banner</p>
                                </div>
                            }
                            <div className='relative banner  border-double border-2 rounded-sm w-full h-[380px]'>

                                {Banner && !loading && (<div className=' flex  '>
                                    <img src={Banner} alt="" className='w-full h-[380px] object-cover z-10' />
                                </div>)}
                                <p
                                    className={`absolute text-[20px] ${loading ? 'text-gray-300' : 'text-gray-400'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer`}
                                    onClick={handleParagraphClick}
                                >
                                    Blog Banner
                                </p>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }} // Hide the file input
                                />
                            </div>
                            <div className='blogTittle mt-1 h-[75px]  '>
                                <textarea value={title} onChange={(e) => setTitle(e.target.value)} id="" placeholder='Blog Title' className='p-2 text-[25px] text-gray-500 bg-transparent w-full h-[60px] outline-none resize-none  focus:placeholder:opacity-20'></textarea>
                            </div>
                            <hr />
                            <div className='Blog-Editor'>
                                <ReactQuill
                                    ref={quillRef}
                                    value={content}
                                    modules={modules}
                                    onChange={handleContentChange}
                                    style={{ minHeight: '250px' }}
                                    className='custom-quill-editor'

                                />
                                <div className='short-description mt-3'>
                                    <label htmlFor="" className='text-[13px] text-gray-500'>Short Description about your blog</label>
                                    <textarea defaultValue={shortdescription} onChange={(e) => setshortdescription(e.target.value)} name="" id="" maxLength={100} className='w-full h-[150px] resize-none border outline-none mt-1 p-2 bg-gray-50 rounded-md  focus:bg-transparent'></textarea>
                                    <p className='flex justify-end gap-1 text-[12px] text-gray-500'>
                                        {maxlenght - shortdescription.length}
                                        <span>characters left</span>
                                    </p>
                                </div>
                                <div className='short-description mt-3'>
                                    <label htmlFor="" className='text-[13px] text-gray-500'>Tags (Topis)</label>
                                    <div className='w-full bg-gray-50 h-fit p-2 mt-1 border rounded-md'>
                                        <input onKeyDown={handleKeyDown} type="text" className='w-full h-[50px] p-2 outline-none bg-white rounded-md text-[13px]' />
                                        <div className='mt-3 flex gap-2'>
                                            {tags.map((tag, i) => (
                                                <Tag key={i} tag={tag} index={i} />
                                            ))}
                                        </div>

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

export default Write