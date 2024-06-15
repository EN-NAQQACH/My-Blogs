import React from 'react'
import { Pagination } from "@nextui-org/react";
function Paginations() {
    return (

        <>
            <div className='w-100% h-[200px] flex justify-center items-center'>
                <Pagination total={10} initialPage={1} />
            </div>
        </>

    )
}

export default Paginations