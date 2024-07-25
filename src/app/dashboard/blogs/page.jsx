import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { playfair } from "@/styles/Fonts";
// add async because i want to handle retirve data from database
import BlogComponent from "@/components/BlogComponent";

function Blogs (){
  return (
    <div className='w-full'>
      <div>
        Manage Blog
      </div>
      <div className='main p-4 min-h-lvh mt-3'>
        <section>
          <main className='w-[100%]'>

            <div className="w-[100%] flex items-center   bg-[#e9e9e960]  border-1 border-transparent rounded-3xl p-[3px] focus-within:border-gray-300 focus-within:border-1 text-[13px]">
              <SearchIcon className="text-gray-500 mr-1 ml-2 " />
              <input type="text" placeholder='Search Blogs' className=' w-[100%] p-[8px] rounded-[4px]   outline-none  bg-transparent' />
            </div>
            <section className='blogs  mt-3'>
              <div className='content  p-2'>
                <div className='blogs-cards flex flex-col gap-3'>
                  <BlogComponent />
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