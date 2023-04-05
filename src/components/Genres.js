import { Chip } from '@material-ui/core';
import axios from 'axios'
import React, { useEffect } from 'react'


const Genres = ({
  type,
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  setPage,
}) => {

  const handleAdd=(genre)=>{
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g)=>g.id !== genre.id))
    setPage(1);
  }

  const handleRomove = (genre) =>{
    setSelectedGenres(
      selectedGenres.filter((selected)=> selected.id !== genre.id)
    );
    setGenres([...genres, genre])
    setPage(1);
  }

  const fetchGenres=async()=> {
   const {data} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
   setGenres(data.genres)
   console.log(setGenres);
  };
  console.log(genres);

  useEffect(()=>{
    fetchGenres();
   return ()=>{
    fetchGenres();
   }
  }, [])

  return (
    <div style={{padding:"6px 0"}}>
      { selectedGenres.map((genre)=>(
        <Chip 
        label={genre.name} 
        style={{margin: 2}} 
        size='small' 
        color='primary'
        key={genre.id} 
        clickable
        onDelete={()=>handleRomove(genre)}
        />
      ))}

      {genres && genres.map((genre)=>(
        <Chip 
        label={genre.name} 
        style={{margin: 2}} 
        size='small' 
        key={genre.id} 
        clickable
        onClick={()=>handleAdd(genre)}
        />
      ))}
      
    </div>
  )
}

export default Genres
