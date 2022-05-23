import React from 'react';
import '../App.css'

export default function MovieList(props) {
  const FavouriteComponent = props.favouriteComponent;
  
  return (
    <div className='MovieList'>
      <h1>{props.heading}</h1>
      <div className='movies_container'>
        {
          props.movies.map((movie) => (
              <div className='movie'>
                  <img src={movie.Poster} alt="movie" />
                  <div onClick={ () => props.addFavouriteMovie(movie)} className='overlay'>
                    <FavouriteComponent/>
                  </div>
              </div>
          ))  
        }
      </div>
    </div>
  )
}
