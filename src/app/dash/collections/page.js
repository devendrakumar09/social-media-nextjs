import PostUI from '@/app/_components/subscription/post/PostUI'
import React from 'react'

const Collections = () => {
  return (
    <>
      <div className=" grid grid-cols-12 gap-2 p-1">
        <div className="col-span-12 sm:col-span-3">
          <PostUI />
        </div>

        <div className="col-span-12 sm:col-span-3">
          <PostUI />
        </div>

        <div className="col-span-12 sm:col-span-3">
          <PostUI />
        </div>
        <div className="col-span-12 sm:col-span-3">
          <PostUI />
        </div>
        <div className="col-span-12 sm:col-span-3">
          <PostUI />
        </div>
        <div className="col-span-12 sm:col-span-3">
          <PostUI />
        </div>


        <div className="col-span-12 sm:col-span-3">
          <PostUI />
        </div>
        <div className="col-span-12 sm:col-span-3">
          <PostUI />
        </div>
        <div className="col-span-12 sm:col-span-3">
          <PostUI />
        </div>
      </div>
    </>
  )
}

export default Collections 