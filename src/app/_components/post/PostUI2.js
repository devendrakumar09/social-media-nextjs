import Link from 'next/link'
import React from 'react'

const PostUI2 = () => {
    return (
        <div className=''>


            <div className="container  bg-white border rounded-md">
                <div className="flex items-center justify-between ">
                    <div className="flex flex-row px-1 py-3 mx-3">
                        <div className="w-auto h-auto rounded-full">
                            <img className="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80" />
                        </div>
                        <div className="flex flex-col mb-2 ml-4 mt-1">
                            <div className="text-gray-600 text-sm font-semibold">John Doe</div>
                            <div className="flex w-full mt-1">
                                <div className="text-blue-700 font-base text-xs mr-1 cursor-pointer">
                                    SEO
                                </div>
                                <div className="text-gray-400 font-thin text-xs">
                                    • 30 seconds ago
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </div> */}
                </div>
                <img src="https://images.unsplash.com/photo-1527112862739-c3b9466d902e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=966&q=80" alt="" />
                <div className="p-6">
                    <p className="text-sm  font font-thin">Lorem ipsum carrots, enhanced undergraduate developer, but they do occaecat time and vitality, Lorem ipsum carrots,</p>
                </div>
            </div>

        </div>

    )
}

export default PostUI2