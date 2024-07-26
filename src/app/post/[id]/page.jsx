import React from 'react'
import { playfair } from "@/styles/Fonts";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import XIcon from '@mui/icons-material/X';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ReactQuillEditor from '@/components/ReactQuillEditor';
import { IoIosArrowDown } from "react-icons/io";
import Comment from '@/components/Comment';

const formatDate = (isoDateString) => {
  const date = new Date(isoDateString);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};
const getBlog = async (id) => {
  try {
    const url = new URL(`/api/blog/getablog`, process.env.NEXTAUTH_URL); // Ensure you have a base URL set
    url.searchParams.append('id', id);
    const res = await fetch(url.toString(), { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch');
    }
    return res.json();
  } catch (e) {
    console.log(e);
    return null;
  }
};
export default async function Page({ params }) {
  // const [showreplies, setShowreplies] = useState(false)
  // const [hidereplies, sethidereplies] = useState(false)
  // const [addReply, setAddReply] = useState(false)
  const { id } = params;
  const post = await getBlog(id);

  return (
    <>
      <div className=' '>
        <div className="h-lvh bg-black bg-opacity-20">
          <div>
            <img src={post.banner} alt="" className=" z-[-1] w-full object-cover fixed h-full" />
          </div>
          <div className="text-center absolute h-[580px] top-0 flex items-center flex-col m-auto justify-center w-[100%]  text-white">
            <div className='max-w-[800px]'>
              <div>
                <p className={`${playfair.className} text-[55px]  text-center `}>{post.bannerTitle}</p>
              </div>
              <div className='mt-5'>
                <p>{formatDate(post.created_at)}</p>
              </div>
              <div className='flex justify-center'>
                <Link href="#content">
                  <IoIosArrowDown className='cursor-pointer' size={22} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <main className=' bg-white  w-[100%] pt-[79px] p-7 ' id='content'>
          <div className='w-[55%] m-auto'>
            <div className='postedby flex gap-5 justify-center flex-col items-center'>
              <div className='w-[100px] h-[100px] rounded-full overflow-hidden '>
                <img src={post.author.image} alt="" className='w-full h-full object-cover' />
              </div>
              <div >
                <p>By {post.author.username} </p>
              </div>
              <div className=''>
                <p> <span>posted on </span><span className=''>{formatDate(post.created_at)}</span></p>
              </div>
            </div>
            <div className='content mt-[15px] '>
              <article className='bg-white h-fit p-2 mb-[250px]'>
                <div>
                  <div className={`${playfair.className} title  text-center w-[100%] flex justify-center `}>
                    <p className='[font-size:_clamp(32px,10vw,2em)] w-[70%]'>{post.title}</p>
                  </div>
                 
                  <div className='content'>
                    <ReactQuillEditor content ={post.content[0]} />
                  </div>
                </div>
                <div className='sharepsot mt-6'>
                  <div className='flex gap-3 justify-center items-center'>
                    <p className='text-[20px]'>
                      Share
                    </p>
                    {/* <div className='cursor-pointer'>
                      <InstagramIcon />
                    </div>
                    <div className='cursor-pointer'>
                      <FacebookOutlinedIcon />
                    </div>
                    <div className='cursor-pointer'>
                      <XIcon />
                    </div> */}
                  </div>
                </div>
                <div className='tags mt-10'>
                  <div className='flex items-center gap-2'>
                    <p>Tags :</p>
                    <div className='flex gap-2 flex-wrap'>
                      {post.tags?.map((tag, index) => (
                        <div key={index} className='bg-[#f0f0f0b6] pl-8 pr-8 pt-1 pb-1 rounded-full'>
                          <p className=''>{tag}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                
                  <Comment />
                

              </article>
            </div>
          </div>

        </main>
      </div>

    </>
  )
}