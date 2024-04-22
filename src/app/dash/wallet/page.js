import PayUserUI from '@/app/_components/wallet/PayUserUI'
import TransactionsCardUI from '@/app/_components/wallet/TransactionsCardUI'
import PaymentCardUI from '@/app/_components/wallet/paymentCard/PaymentCardUI'
import Link from 'next/link'
import React from 'react'

const Wallet = () => {
    return (
        <main>
            <div className="pt-3 px-2">
                <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                    <div className="sm:p-6 xl:p-8  2xl:col-span-2">
                        <div className="flex items-center justify-between mb-4 bg-white shadow border rounded-md p-10">
                            <div className="flex-shrink-0">
                                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">$45,385</span>
                                <h3 className="text-base font-normal text-gray-500">Sales this week</h3>
                            </div>
                            <div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                                <Link  href={'/dash/wallet/add-money'} className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit">ADD</Link>
                                {/* <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg> */}
                            </div>
                        </div>

                        <div className="mb-4 mt-10 flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Cards</h3>
                            </div>
                            <div className="flex-shrink-0">
                                <Link  href={'/dash/wallet/add-payment-card'} className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">ADD</Link>
                            </div>
                        </div>
                        <PaymentCardUI />
                    </div>
                    <div className="p-4 sm:p-6 xl:p-8 ">
                        <div className="mb-1 flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">MY Transactions</h3>
                            </div>
                            <div className="flex-shrink-0">
                                <a href="#" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">View all</a>
                            </div>
                        </div>
                        <div className="flex justify-start border-b py-2 text-sm">
                            <div className=" text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2 me-5">
                                Deit
                            </div>
                            <div className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2 me-5">
                                Creadit
                            </div>
                            <div className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2 me-5">
                                Faild
                            </div>
                        </div>
                        <TransactionsCardUI />
                    </div>
                </div>

                <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                    <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold leading-none text-gray-900">Payent Send</h3>
                            <p className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit"> 00</p>
                        </div>
                       <PayUserUI />
                    </div>

                    <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold leading-none text-gray-900">Payment  Recived</h3>
                            <p className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit"> 00</p>
                        </div>
                        <PayUserUI />                        
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Wallet