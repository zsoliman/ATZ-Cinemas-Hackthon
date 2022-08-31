import { useState } from 'react';
import Poster from './sub-components/Poster';
import Details from './sub-components/Details';

const Cinema = ({ movieData }) => {
   const { capacity, genre, movies } = movieData;
   const [selectedMovieId, setSelectedMovieId] = useState(0);

   console.log('movieData: ', movieData);
   const selectedMovie = movies.find((movie) => movie.id === selectedMovieId);

   console.log(selectedMovie);

   return (
      <div className='cinema-page-container'>
         <h1> {genre}</h1>
         <div className='movie-list'>
            {movies.map((movie) => {
               return (
                  <Poster
                     id={movie.id}
                     name={movie.name}
                     poster_img_src={movie.poster_img_src}
                     setSelectedMovieId={setSelectedMovieId}
                  />
                  // Pass down image
               );
            })}
         </div>
         <div className='movie-details'>
            {selectedMovieId !== 0 ? <Details movie={selectedMovie} /> : null}
         </div>
      </div>
   );
};
export default Cinema;
