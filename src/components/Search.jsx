import React from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'


const Search = ({ handleSearch, search, click,loading }) => {
    console.log(loading)
    return (
        <div className='p-4 bg-[#f7f7f7] flex gap-2'>
            <input className='border w-full p-2 rounded focus:outline-none focus:border-indigo-600 text-slate-700' type="search" name="" placeholder='BD...' id="" value={search} onChange={handleSearch} />


            <button onClick={click} className='bg-indigo-600 hover:bg-indigo-500 text-slate-300 rounded px-5'> {loading ? <AiOutlineLoading3Quarters className='animate-spin mx-4' />: "search"} </button>
        </div>
    )
}

export default Search