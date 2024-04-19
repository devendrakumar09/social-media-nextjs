import SignupUI from '@/app/_components/auth/SignupUI'
import React from 'react'

const Signup = () => {
  return (
    <>
      <div className="min-h-screen   text-gray-900 flex justify-center bg-slate-50 overflow-hidden">
        <div className=" bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <SignupUI />
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg');" }}>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup