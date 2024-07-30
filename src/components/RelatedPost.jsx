import React from 'react'
import Link from 'next/link'
const getRelatedPost = async (tags,blogId) => {
    try {
        const url = new URL(`/api/blog/getrelatedblog`, process.env.NEXTAUTH_URL); // Ensure you have a base URL set
        url.searchParams.append('tags', encodeURIComponent(JSON.stringify(tags)));
        url.searchParams.append('blogId', blogId);
        const res = await fetch(url.toString(), { cache: 'no-store' });
        if (!res.ok) {
            throw new Error('Failed to fetch');
        }
        return res.json();
    } catch (e) {
        console.log(e);
        return null;
    }

}
export default async function RelatedPost({ tags,blogId }) {
    const blogs = await getRelatedPost(tags,blogId);
    console.log(blogs);
    return (
        <div className='w-full  h-fit mt-10'>
            <h2 className='mb-4'>Related post :</h2>
            <div className='relatedpost-compenents flex items-center justify-between gap-7 '>
            {blogs && blogs.map(blog => (
                    <Link key={blog._id} href={`/post/${blog._id}`} className='relatedpost-card w-[50%] h-[250px]'>
                        <div>
                            <img src={blog.banner} alt="" className='w-full h-[180px] rounded-sm object-cover' />
                        </div>
                        <div>
                            <p className='font-bold mb-1 mt-1 text-gray-600'>{blog.tags[0]}</p>
                            <p className='font-[500] text-gray-600 text-[17px] hover:text-black'>{blog.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}