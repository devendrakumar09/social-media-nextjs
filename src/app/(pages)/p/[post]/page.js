import PostUI2 from '@/app/_components/post/PostUI2'
import CommentUI from '@/app/_components/post/comment/CommentUI'
import NewCommentUI from '@/app/_components/post/comment/NewCommentUI'
import React from 'react'

const Post = () => {
  return (
    <div className="ms-auto grid max-w-4xl grid-cols-12 gap-4 p-1 ">
      <div className="col-span-12 sm:col-span-6">
        <PostUI2 />
        <div className=''>
          <NewCommentUI />
        </div>
       <div className='mt-2'>
       <CommentUI />
       </div>
      </div>
       
    </div>
  )
}

export default Post