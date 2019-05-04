import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => {
        return <div>
          <h3>{movie.title}</h3>
          <h3>Duration: {movie.time} min.</h3>
          <h3>genres</h3>
            <ul>
              {movie.genres.map(genre => {
                return <li>{genre}</li>
              })}
            </ul>
        </div>
      })}
    </div>
  );
};

export default Movies;
