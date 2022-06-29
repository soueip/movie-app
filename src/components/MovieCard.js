import React from 'react'

function Moviecard({movie}) {
  return (
    <div className='movie-card'>
    <img src={movie.posterurl}></img>
    <h1>{movie.name}</h1>
    <p>{movie.description}</p>
    <button class="star">{movie.rating}</button>
    
    
    </div>
  )
}

export default Moviecard;