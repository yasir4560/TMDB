import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieCredits = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
          params: {
            api_key: '198776dfcf0efbc8cd7e9c6ed26fca4f',
          },
        });

        setCast(response.data.cast);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    };

    fetchMovieCredits();
  }, [movieId]);

  return (




<div>
<h2 className="text-xl font-bold mb-2">Movie Cast</h2>
<div className="flex overflow-x-auto space-x-4">
  {cast.map(actor => (
    <div key={actor.id} className="flex-shrink-0 w-32">
      <img
        src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
        alt={actor.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <p className="text-gray-500 ">{actor.name}</p>
      <p className="text-gray text-center text-sm">({actor.character})</p>
    </div>
  ))}
</div>
</div>
);
};

export default MovieCredits;
