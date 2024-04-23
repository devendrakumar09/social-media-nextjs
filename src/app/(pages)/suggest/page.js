import QuickProfile from '@/app/_components/profile/QuickProfile'
import SuggestionProfile from '@/app/_components/profile/suggestionProfile/SuggestionProfile'
import React from 'react'

const Suggest = () => {
    return (
        <div className="mx-auto grid  grid-cols-12  p-1">
            <div className="col-span-12">
                <div className="">
                    <div className="my-5">
                        <h2 className="text-lg font-semibold text-gray-900">Suggestion</h2>
                    </div>
                    <div className="grid sm:grid-cols-4 sm:gap-x-4 lg:grid-cols-4">                    
                        <SuggestionProfile />
                        <SuggestionProfile />
                        <SuggestionProfile />
                        <SuggestionProfile />
                        <SuggestionProfile />
                        <SuggestionProfile />
                        <SuggestionProfile />
                        <SuggestionProfile />
                        <SuggestionProfile />
                        <SuggestionProfile />
                        <SuggestionProfile />
                        <SuggestionProfile />                        
                    </div>
                    <div className="grid sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-4">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suggest