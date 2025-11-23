import React from 'react'

const DarkModeToggle = ({darkMode, setDarkMode}) => {
  return (
    <div>
        <button
            className='mb-5 px-3 py-2 bg-blue-200 text-white rounded'
            onClick={()=>{
                setDarkMode(!darkMode)
            }}>
            Toggle {darkMode ? 'Light' :'Dark'} Mode
        </button>
    </div>
  )
}

export default DarkModeToggle
