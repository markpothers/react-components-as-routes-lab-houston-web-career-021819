import React from 'react';
import { actors } from '../data';

function renderActor(actor) {
  return(
  <div>
    <h2>{actor.name}</h2>
    <ul>
      {actor.movies.map((movie) => (
        <li>{movie}</li>
      ))}
    </ul>
  </div>
  )}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => renderActor(actor))}
    </div>
  );
};

export default Actors;
