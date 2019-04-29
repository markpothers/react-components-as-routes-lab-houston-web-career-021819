import React from 'react';
import { directors } from '../data';
// import Movies from './Movies';

function renderDirector(director) {
  return(
  <div>
    <h2>{director.name}</h2>
    <ul>
      {director.movies.map((movie) => (
        <li>{movie}</li>
      ))}
    </ul>
  </div>
  )}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map( director => renderDirector(director))}
    </div>
  );
}

export default Directors
