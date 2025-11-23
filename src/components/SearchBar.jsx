import React from 'react'

const SearchBar = ({searchTerm,setSearchTerm}) => {
  return (
    <div>
        <input
        className='mb-5 p-2 rounded bg-purple-400 text-white'
        value={searchTerm}
        onChange={(e)=>{
                setSearchTerm(e.target.value);
        }} 
        type="text" 
        placeholder="Search by author..." />
    </div>
  )
}

export default SearchBar
