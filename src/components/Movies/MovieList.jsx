import { useEffect, useState } from "react"
import tmdb from "../../api/tmdb"
import MovieCard from "./MovieCard"
import { request } from "../../api/request"
import Blur from "../../baseUi/blur"



const MovieList = ({fetch}) => {
  
    const [movies, setMovies]= useState([])

    useEffect(()=>{
        //fetching action
      const fetchMovies = async() =>{
        const {data} = await tmdb.get(request[fetch])
        setMovies(data.results)
      }
      fetchMovies()
    },[fetch])
    
  return (
     <div className="flex pb-5 pl-5 pr-9 overflow-x-auto">
    
      
      {movies.map((movie, index)=>{
        return <MovieCard key={index} {...movie}/>
      })}
      <div className="absolute top-0 right-0 w-16 h-full pt-0">
       <Blur />
      </div>
    </div>
  )
}

export default MovieList




