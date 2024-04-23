import PostUI2 from '@/app/_components/post/PostUI2'
import ProfileUI from '@/app/_components/profile/ProfileUI'
import QuickProfile from '@/app/_components/profile/QuickProfile'
import PaidPostUI from '@/app/_components/subscription/post/PaidPostUI'
import PostUI from '@/app/_components/subscription/post/PostUI'
import React from 'react'

const Profile = () => {
    return (
        <div className="mx-auto grid max-w-4xl grid-cols-12 gap-4 p-1 ">
            <div className="col-span-12 sm:col-span-8 ">
                <ProfileUI />
            </div>
            <div className="col-span-12 sm:col-span-4 mt-10">
                <QuickProfile />
                <QuickProfile />
            </div>
            <div className="col-span-12 sm:col-span-4">
                <PostUI />
            </div>
            <div className="col-span-12 sm:col-span-4">
            <PostUI />
            </div>
            <div className="col-span-12 sm:col-span-4">
            <PostUI />
            </div>
        </div>
    )
}

export default Profile