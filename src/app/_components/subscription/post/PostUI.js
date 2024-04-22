import React from 'react'

const PostUI = () => {
    return (
    
        <div className="bg-white shadow rounded-lg mb-2 py-2">
            <div className="flex flex-row px-2 py-3 mx-3">
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
            <div className="border-b border-gray-100"></div>
            <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
                <div className="grid grid-cols-6 col-span-2   gap-2  ">
                    <div className=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                        <img className="h-full w-full object-cover " src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80" alt="" />
                    </div>
                    <div className=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                        <img className="h-full w-full object-cover  " src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1399&amp;q=80" alt="" />
                    </div>
                    <div className=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                        <img className="h-full w-full object-cover " src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80" alt="" />
                    </div>
                    <div className=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                        <img className="h-full w-full object-cover " src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80" alt="" />
                    </div>
                    <div className="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                        <img className="h-full w-full object-cover " src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=765&amp;q=80" alt="" />
                    </div>
                </div>
            </div>
            <div className="text-gray-500 text-sm mb-6 mx-3 px-2">Lorem Ipsum is simply dummy ... <span className="text-gray-400">more</span></div>

            
            

            
        </div>
    )
}

export default PostUI