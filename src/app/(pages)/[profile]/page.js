import ProfileDetails from '@/app/_components/profile/details/ProfileDetails'
import React from 'react'

const Profile = () => {
    return (
        <div className="mx-auto grid max-w-4xl grid-cols-12 gap-4 p-1">
            <div className="header col-span-12 ">
                <ProfileDetails />
            </div>
        </div>
    )
}

export default Profile