import React from 'react'

const PaymentCardUI = () => {
    return (
        <div className="flex flex-col gap-4 items-center justify-center bg-white">
            <div className="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">
                <div className="grid grid-cols-5 p-5 gap-y-2">
                    {/* <div>
                                        <img src="https://picsum.photos/seed/2/200/200" className="max-w-16 max-h-16 rounded-full" />
                                    </div> */}
                    <div className="col-span-5 md:col-span-4 ml-4">
                        <p className="text-sky-500 font-bold text-xs"> 7+ SPOTS LEFT </p>
                        <p className="text-gray-600 font-bold"> [Beginner] Light Discussion </p>
                        <p className="text-gray-400"> Fri, Mar 11 . 8:00 - 9:30 AM </p>
                        <p className="text-gray-400"> Beginner speakers </p>
                    </div>
                    <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
                        <p className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit"> Del</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentCardUI