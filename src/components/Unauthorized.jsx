import Link from 'next/link'
import React from 'react'

function Unauthorized() {
    return (
        <div className='p-[60px] min-h-lvh m-auto flex flex-col justify-center items-center gap-5 '>
            <img src="/warning.png" alt="" className='w-[150px] h-[150px]' />
            <p className='text-[20px]'>You are not authorized</p>
            <div className='w-[450px] text-center text-[13px] text-gray-500'>
                it seems like you don't have permission to use this portal.
                Please sign in with a different account.
            </div>
            <Link href="/login" className='underline text-red-500'>Continue to Log in</Link>
        </div>
    )
}

export default Unauthorized