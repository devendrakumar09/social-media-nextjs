import CommentUI from '@/app/_components/post/comment/CommentUI'
import PaidPostUI from '@/app/_components/subscription/post/PaidPostUI'
import React from 'react'

const Post = () => {
  return (
    <div className="mx-auto grid max-w-4xl grid-cols-12 gap-4 p-1 ">
      <div className="col-span-12 sm:col-span-12 ">
        <PaidPostUI />
        
      </div>

      <div className="col-span-12 sm:col-span-12 ">
        <CommentUI />
      </div>


       
    </div>
  )
}

export default Post