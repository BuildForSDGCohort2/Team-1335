import React from 'react'

export const searchBox = ({handleChange, placeholder}) => (

    <div class="w-full max-w-md">
        <div class="bg-white shadow-md rounded-lg mb-4">           
            <div class="flex items-center border-gray-400 border rounded-sm h-12">
                <div class="pl-2">
                    <svg class="fill-current text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path class="heroicon-ui"
                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                    </svg>
                </div>
                <input
                    class="w-full appearance-none rounded-md placeholder-gray-400 focus:placeholder-gray-600 text-gray-700 leading-tight focus:outline-none py-2 px-2"                    
                    name="search"
                    type="search"
                    placeholder={placeholder}        
                    onChange={handleChange}
                    />
            </div>
        </div>
    </div>
)