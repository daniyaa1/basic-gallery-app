import React from 'react'

const Cards = ({elem, onFavorite}) => {
    const downloadImage=() =>{
        const link= document.createElement('a');
        link.href= elem.download_url;
        link.download = `${elem.author}-image.jpg`;
        link.click();
    }


  return (
    <div className='bg-gray-800 rounded p-3'>
      <img src={elem.download_url} alt={elem.author} className='w-48 h-32 object-cover rounded' />
      <p className='text-white mt-2'>{elem.author}</p>
      <button onClick={() => onFavorite(elem)} className='mt-2 px-3 py-1 bg-pink-500 text-white rounded'>Favorite</button>
      <button onClick={downloadImage} className='mt-2 ml-2 px-3 py-1 bg-green-500 text-white rounded'>Download</button>
    </div>
  )
}

export default Cards
