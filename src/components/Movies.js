import React from 'react';
import { movies } from '../data';

function renderMovie(movie) {
  return(
  <div>
    <h2>{movie.title}</h2>
    <h4>{movie.time}</h4>
    <ul>
      {movie.genres.map((genre) => (
        <li>{genre}</li>
      ))}
    </ul>
  </div>
  )}

const Movies = () => {
  return (
    <div>
       <h1>Movies Page</h1>
      {movies.map( movie => renderMovie(movie))}
    </div>
  );
};

export default Movies;
