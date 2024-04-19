import Link from 'next/link'
import React from 'react'

export const SigninUI = () => {
  return (

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-5 shadow-md  bg-white rounded-md">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
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

          <div className="mt-2 ">
            <input
              className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-5"
              type="password" placeholder="Password" />
            <div className="text-sm">
              <Link href={'/forgot-password'} className="font-semibold text-indigo-600 hover:text-indigo-500 ">Forgot password?</Link>
            </div>
          </div>
        </div>
        <div>
          <button type="submit" 
          className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
          >
          Sign in</button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <Link href={'/signup'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Signup here..</Link>
      </p>
    </div>

  )
}
