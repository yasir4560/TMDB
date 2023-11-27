
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdb from "../../api/tmdb";
import BCircle from '../../baseUi/circular-progress/Bigcircle';
import MovieCredits from './MovieCredit';
import Blur from '../../baseUi/blur';

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [additionalCast, setAdditionalCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await tmdb.get(`/movie/${id}`);
        const { credits, ...rest } = response.data;
    
        setMovieDetails({ ...rest, credits: credits });
    
        if (credits && credits.cast && credits.cast.length > 0) {
         
          const seriesId = credits.cast[0].series_id;
    
          if (seriesId) {
            
            const seriesResponse = await tmdb.get(`/tv/${seriesId}/aggregate_credits`);
            setAdditionalCast(seriesResponse.data.cast || []);
          }
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return  <div className="flex items-center justify-center h-[463px] bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] text-tmdbDarkBlue">
    <div className="text-4xl font-semibold">Loading...</div>
    </div>
  }

  const { backdrop_path, poster_path, title, vote_average, overview, release_date,  credits, movie_id } = movieDetails;

  const cast = credits && credits.cast ? credits.cast : [];
  console.log(movieDetails.movie_id);
  console.log(movie_id)
  

  return (
    <>
   
      <div className='h-[40px] flex justify-center items-center content-center'>
        <ul className='flex gap-11'>
          <li>Overviw</li>
          <li>Media</li>
          <li>Fandom</li>
          <li>Share</li>
        </ul>
      </div>
      <div
        className='relative w-screen -left-40 bg-cover bg-center h-[600px]'
       style={{ backgroundImage: `url(https://www.themoviedb.org/t/p/original${backdrop_path})`,
       objectFit: 'cover',
      }}
      >
        <div className='inset-0 flex gap-[100px] bg-black bg-opacity-70 h-[600px]'>
          <div className='left-50 pl-32 h-[500px] w-[650px] pt-10 hover:cursor-pointer  hover:blur-md ' >
          <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}`} alt={title} className='w-full h-full object-cover' />
          <div className='h-[20px] bg-tmdbDarkBlue'></div>
          </div>



          <div className='pt-[70px]'>
        <div className=' p-4 text-white'>
        <div>
          <h1 className='text-2xl font-bold'>{title}</h1>
          <p className='text-white'>{release_date}</p>
        </div>
        <div>
          <div className=' flex gap-3 text-[30px] text-white'>
          <BCircle percent={vote_average * 10} /> 
          <div>
            <p className='font-semibold pt-2'>User score</p> 
           
          </div>
          </div>
         
        </div>

        <div className='text-white font-thin'>The World forever changes.</div>
      </div>
      
      <div className='p-4'>
        <h2 className='text-xl font-bold mb-2 text-white'>Overview</h2>
        <p className='text-white'>{overview}</p>
      </div>
        </div>
        </div>
      

      </div>

      <div className='p-4'>
        <h2 className='text-xl font-bold mb-2'>Top Billed Cast</h2>
        <MovieCredits movieId={id} />
      </div>
      
    
    </>
  );
};

export default MovieDetail;
