import React from 'react'

function CityComponent(props) {
    const { updatedCity, fetchWeather } = props
    return (
        <div className='bg'>
            <h1 className="text-xl mb-5">Enter location to check weather</h1>
            <form onSubmit={fetchWeather}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input 
                        onChange={(e) => updatedCity(e.target.value)}
                        type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-white border-2 border-teal-700 rounded-lg bg-teal-800 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="Search City..." required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Search</button>
                </div>
            </form>

        </div>
    )
}

export default CityComponent