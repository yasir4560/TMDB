// MovieCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Circle from '../../baseUi/circular-progress';
import Ellipsis from '../../baseUi/ellipse';

const getPostURL = (posterpath) => {
  return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
};

const MovieCard = ({ id, poster_path, name, title, vote_average, release_date, first_air_date }) => {
  return (
    <div className='flex flex-col pl-5 gap-2'>
      <Link to={`/movie/${id}`}>
        <div className='relative'>
          <img src={getPostURL(poster_path)} alt={name || title} className='w-[150px] h-[225px] shadow-sm rounded-md' />
          <div className='absolute bottom-[-1.2rem] left-2'>
            <Circle percent={vote_average * 10} />
          </div>
          <div className='absolute top-3 right-[10px] w-[1.4rem] h-[1.4rem]'>
            <Ellipsis />
          </div>
        </div>
        <div className='flex flex-col px-3 pt-5 w-[150px]'>
          <h1 className='font-bold hover:cursor-pointer hover:text-tmbdLightBlue'>{name || title}</h1>
          <p className='font-normal text-slate-500'>{first_air_date || release_date}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
