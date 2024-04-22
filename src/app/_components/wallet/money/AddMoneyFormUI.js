import Link from 'next/link'
import React from 'react'

const AddMoneyFormUI = () => {
    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-sm p-5 shadow-md  bg-white rounded-md border">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm ">                
                <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">ADD MOMEY</h2>
            </div>
            <form className="space-y-6 mt-10" action="#" method="POST">
                <div>
                    <div className="mt-2">
                        <input
                            className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="text" placeholder="Amount" />

                    </div>
                </div>
                
                <div>
                    <button type="submit"
                        className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">Procced</button>
                </div>
            </form>            
        </div>
    )
}

export default AddMoneyFormUI