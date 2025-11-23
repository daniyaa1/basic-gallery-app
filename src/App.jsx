import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './components/Cards';
const App = () => {


  const[userData,setUserData]= useState([]);
  const getData=async()=>{
    const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setUserData(response.data);
  }

  const [index,setIndex]=useState(1)

  const nextIndex=()=>{
    setIndex(index+1);
    setUserData([]);
  }

    const prevIndex=()=>{
      if(index>1){
            setIndex(index-1);
            setUserData([]);
      }
  }

  useEffect(function(){
    getData();
  },[index])

let printUserData= <h1 className='text-gray-300 text-sm absolut top-1/2  font-semibold left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading....</h1>
if(userData.length>0){
  printUserData=userData.map(function(elem,idx){
    return (
      <Cards elem={elem} key={idx}/>
    )
  })
}

  return (
    <div className='bg-black h-screen overflow-auto text-white p-5'>
          {/* <button
          onClick={()=>{
              getData();
          }} 
          className='bg-blue-200 active:scale-95 rounded px-3 mb-3 py-2'>
            Get Data</button> */}
          <div className='flex h-[80%] flex-wrap gap-5 p-5 justify-center items-center'>
            {printUserData}
          </div>
          <div className='flex justify-center m-5 items-center gap-5'>
            <button onClick={prevIndex} style={{opacity: index== 1? 0.5 :1 }} className='px-5 py-3 bg-amber-400 rounded text-sm text-black active:scale-95 font-semibold'>Prev</button>
            <h4>Page {index}</h4>
            <button onClick={nextIndex} className=' px-5 py-3 bg-amber-400 rounded text-sm text-black active:scale-95 font-semibold'>Next</button>
          </div>
    </div>
  )
}

export default App
