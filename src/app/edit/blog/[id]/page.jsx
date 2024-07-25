import React from 'react'
import EditBlog from '../../../../components/EditBlog'

function page({params}) {
  const {id} = params
  return (
    <div>
        <EditBlog id = {id} />
    </div>
  )
}

export default page