import React, { useContext } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { TagContext } from "@/app/context/TagContext"

function Tag({ tag, key }) {
  const { tags, setTags } = useContext(TagContext);
  // handle remove a tag from tags array remove depend on its key
  const handleRemoveTag = (key) => {
    setTags(tags.filter((tag) => tag.key !== key));
  }
  return (
    <div>
      <div className='pl-3 pr-3 pt-1 pb-1 flex items-center justify-between border bg-white rounded-2xl gap-2'>
        <span className="tag text-[13px] ">{tag}</span>
        <button onClick={
          () => {
            handleRemoveTag(key)
          }
        }><IoCloseOutline color='red' /></button>
      </div>
    </div>
  )
}

export default Tag