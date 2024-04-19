import Link from 'next/link'
import React from 'react'

const ForgotPasswordUI = () => {
    return (

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm  rounded  p-5 shadow-md bg-white  ">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Forget Password</h2>
            </div>
            <form className="space-y-6 mt-10" action="#" method="POST">
                <div>
                    <div className="mt-2">
                        <input
                            className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="email" placeholder="Email" />

                    </div>
                </div>
                <div>
                    <Link href={'/otp-verification'} 
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >GET OTP</Link>
                </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
                Alrady a member?
                <Link href={'/signin'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Signin here..</Link>
            </p>

        </div>
    )
}

export default ForgotPasswordUI