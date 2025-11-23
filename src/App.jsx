import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './components/Cards';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavouriteList';
import DarkModeToggle from './components/DarkModeToggle';
import { useInfiniteScroll } from './hooks/useInfiniteScroll';

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
  const [darkMode, setDarkMode] = useState(false);

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    const newImages = response.data;
    setUserData(prev => [...prev, ...newImages]);
    setIndex(prev => prev + 1);
  };

  const loading = useInfiniteScroll(getData);

  const handleFavorite = (img) => {
    const updatedFavorites = [...favorites, img];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const filteredData = userData.filter(img => 
    img.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let printUserData = <h1 className='text-gray-300 text-sm absolute top-1/2 font-semibold left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading....</h1>;
  if (filteredData.length > 0) {
    printUserData = filteredData.map((elem, idx) => (
      <Cards elem={elem} key={idx} onFavorite={handleFavorite} />
    ));
  }

  return (
    <div className={darkMode ? 'bg-black text-white h-screen overflow-auto p-5' : 'bg-white text-black h-screen overflow-auto p-5'}>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FavoritesList favourites={favorites} />
      <div className='flex flex-wrap gap-5 p-5 justify-center'>
        {printUserData}
      </div>
      {loading && <p>Loading more...</p>}
      <div id="sentinel" className='h-10'></div>
    </div>
  );
};

export default App;
