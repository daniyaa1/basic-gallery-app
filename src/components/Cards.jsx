import React from 'react'

const Cards = (props) => {
  return (
    <div>
            <a key={props.idx} href={props.elem.url} target='blank'> 
      <div> 
      <div className='h-40 w-44 bg-white overflow-hidden rounded-xl'>
        <img className='h-full w-full object-cover' src={props.elem.download_url} alt='images'/>
      </div>
        <h1 className='font-semibold '>{props.elem.author}</h1>
      </div>
      </a>
    </div>
  )
}

export default Cards
