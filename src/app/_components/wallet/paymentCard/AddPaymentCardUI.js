import React from 'react'

const AddPaymentCardUI = () => {
    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-sm p-5 shadow-md  bg-white rounded-md border">
            <div class="p-4 flex justify-between">
                <div class="font-bold text-lg">Credit Card</div>
                <div class="text-lg"><i class="fab fa-cc-visa"></i></div>
            </div>
            <div class="p-6">
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="card_number">
                        Card Number
                    </label>
                    <input
                        className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        id="card_number" type="text" placeholder="xxxx xxxx xxxx xxxx" />
                </div>
                <div class="mb-4 flex justify-between">
                    <div>
                        <label class="block text-gray-700 font-bold mb-2" for="expiration_date">
                            Expiration Date
                        </label>
                        <input
                            class=" w-24   px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            id="expiration_date" type="text" placeholder="MM/YY" />
                    </div>
                    <div>
                        <label class="block text-gray-700 font-bold mb-2" for="cvv">
                            CVV
                        </label>
                        <input
                            class="w-24 px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            id="cvv" type="text" placeholder="XXX" />
                    </div>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="name_on_card">
                        Name on Card
                    </label>
                    <input
                        className="w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        id="name_on_card" type="text" placeholder="John Doe" />
                </div>
                <button
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">Save
                    Card
                </button>
            </div>
        </div>
    )
}

export default AddPaymentCardUI