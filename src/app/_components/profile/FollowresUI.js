import React from 'react'

const FollowresUI = () => {
    return (
        <div className="border-2 rounded-sm mb-4">

            <div className="grid grid-cols-6 p-5 gap-y-2">

                <div>
                    <img src="https://picsum.photos/seed/2/200/200" className="max-w-16 max-h-16 rounded-full" />
                </div>

                <div className="col-span-5 md:col-span-4 ">
                    <p className="text-gray-600 font-bold"> [Beginner] Light Discussion </p>
                    <p className="text-gray-400"> Beginner speakers </p>
                </div>






                <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
                    <p className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit"> FREE </p>
                </div>

            </div>

        </div>
    )
}

export default FollowresUI