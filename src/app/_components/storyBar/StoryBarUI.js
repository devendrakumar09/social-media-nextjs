import React from 'react'

const StoryBarUI = () => {
  return (
    

// <style>
//     .story-ring {
//         padding: 2px;
//     }

//     .story-text {
//         font-size: 13px;
//     }
// </style>


<div className="flex flex-col items-center justify-center">
     
    <div className="w-full  px-5 py-5 mx-auto bg-white border rounded-md">
        <div className="flex flex-col">
            <div className="flex">
                
                <ul className="flex items-center justify-center space-x-2">
                    
                    <li className="flex flex-col items-center space-y-2">
                        
                        <div className="story-ring flex justify-center items-center
                                bg-gradient-to-tl from-yellow-200 to-orange-500 
                                rounded-full relative cursor-pointer
                                hover:from-orange-300 hover:to-red-400
                                transition-all duration-150 delay-100">
                            <a className="block bg-white p-1 rounded-full" href="#">
                                
                                <img className="w-16 rounded-full"
                                    src="https://images.unsplash.com/photo-1638687110777-b3fcdf2f9c57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80" />
                            </a>

                            <button className="absolute transition duration-500 bg-white border-gray-400 
                                    h-8 w-8 rounded-full text-white border-2 
                                    border-white flex justify-center items-center opacity-80
                                    hover:opacity-60">
                            </button>

                            <i className="absolute mdi mdi-plus mdi-18px mx-1 text-gray-500"></i>
                        </div>

                        
                        <span className="story-text font-medium">
                            You
                        </span>
                    </li>

                    
                    <li className="flex flex-col items-center space-y-2">
                        
                        <div className="story-ring flex justify-center items-center
                                bg-gradient-to-tl from-yellow-200 to-orange-500 
                                rounded-full relative cursor-pointer
                                hover:from-orange-300 hover:to-red-400
                                transition-all duration-150 delay-100">
                            <a className="block bg-white p-1 rounded-full" href="#">
                                
                                <img className="w-16 rounded-full"
                                    src="https://images.unsplash.com/photo-1638649602320-450b717fa622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80" />
                            </a>
                        </div>

                        
                        <span className="story-text">
                            jett
                        </span>
                    </li>

                    
                    <li className="flex flex-col items-center space-y-2">
                        
                        <div className="story-ring flex justify-center items-center
                                bg-gradient-to-tl from-yellow-200 to-orange-500 
                                rounded-full relative cursor-pointer
                                hover:from-orange-300 hover:to-red-400
                                transition-all duration-150 delay-100">
                            <a className="block bg-white p-1 rounded-full" href="#">
                                
                                <img className="w-16 rounded-full"
                                    src="https://images.unsplash.com/photo-1638708644743-2502f38000a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80" />
                            </a>
                        </div>

                        
                        <span className="story-text">
                            sky
                        </span>
                    </li>

                    
                    <li className="flex flex-col items-center space-y-2">
                    
                        <div className="story-ring flex justify-center items-center
                                bg-gradient-to-tl from-yellow-200 to-orange-500 
                                rounded-full relative cursor-pointer
                                hover:from-orange-300 hover:to-red-400
                                transition-all duration-150 delay-100">
                            <a className="block bg-white p-1 rounded-full" href="#">
                                
                                <img className="w-16 rounded-full"
                                    src="https://images.unsplash.com/photo-1638691899851-0e955bceba1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80" />
                            </a>
                        </div>

                        
                        <span className="story-text">
                            omen
                        </span>
                    </li>

                    
                    <li className="flex flex-col items-center space-y-2">
                        
                        <div className="story-ring flex justify-center items-center
                                bg-gradient-to-tl from-yellow-200 to-orange-500 
                                rounded-full relative cursor-pointer
                                hover:from-orange-300 hover:to-red-400
                                transition-all duration-150 delay-100 
                                hover:animate-pulse">
                            <a className="block bg-white p-1 rounded-full" href="#">
                                <img className="w-16 rounded-full"
                                    src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80" /> 
                            </a>
                        </div>

                        
                        <span className="story-text">
                            sage
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}

export default StoryBarUI