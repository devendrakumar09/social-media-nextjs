import React from 'react'

const TransactionsCardUI = () => {
  return (
    <div className="block w-full overflow-x-auto">
                            <table className="items-center w-full bg-transparent border-collapse">
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="text-gray-500">
                                        <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Organic Search</th>
                                        <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">5,649</td>
                                        <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <span className="mr-2 text-xs font-medium">30%</span>
                                                <div className="relative w-full">
                                                    <div className="w-full bg-gray-200 rounded-sm h-2">
                                                        <div className="bg-cyan-600 h-2 rounded-sm" style={{ width: '30%' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-500">
                                        <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Referral</th>
                                        <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">4,025</td>
                                        <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <span className="mr-2 text-xs font-medium">24%</span>
                                                <div className="relative w-full">
                                                    <div className="w-full bg-gray-200 rounded-sm h-2">
                                                        <div className="bg-orange-300 h-2 rounded-sm" style={{ width: '24%' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-500">
                                        <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Direct</th>
                                        <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">3,105</td>
                                        <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <span className="mr-2 text-xs font-medium">18%</span>
                                                <div className="relative w-full">
                                                    <div className="w-full bg-gray-200 rounded-sm h-2">
                                                        <div className="bg-teal-400 h-2 rounded-sm" style={{ width: '18%' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-500">
                                        <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Social</th>
                                        <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">1251</td>
                                        <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <span className="mr-2 text-xs font-medium">12%</span>
                                                <div className="relative w-full">
                                                    <div className="w-full bg-gray-200 rounded-sm h-2">
                                                        <div className="bg-pink-600 h-2 rounded-sm" style={{ width: '12%' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-500">
                                        <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Other</th>
                                        <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">734</td>
                                        <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <span className="mr-2 text-xs font-medium">9%</span>
                                                <div className="relative w-full">
                                                    <div className="w-full bg-gray-200 rounded-sm h-2">
                                                        <div className="bg-indigo-600 h-2 rounded-sm" style={{ width: '9%' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-500">
                                        <th className="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">Email</th>
                                        <td className="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">456</td>
                                        <td className="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                                            <div className="flex items-center">
                                                <span className="mr-2 text-xs font-medium">7%</span>
                                                <div className="relative w-full">
                                                    <div className="w-full bg-gray-200 rounded-sm h-2">
                                                        <div className="bg-purple-500 h-2 rounded-sm" style={{ width: '7%' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
  )
}

export default TransactionsCardUI