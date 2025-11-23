import React from 'react'

const FavouriteList = ({favourites}) => {
  return (
    <div className='mb-5'>
        <h3>Favourites:</h3>
        <div className='flex gap-2'>
                {favourites.map((fav,idx)=>{
                    return <img 
                    className='w-16 h-16 object-cover rounded' 
                    key={idx} src={fav.download_url} alt={fav.author} />
                })}
        </div>
    </div>
  )
}

export default FavouriteList
