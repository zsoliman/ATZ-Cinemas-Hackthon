import { useState } from 'react';
import Poster from '../sub-components/Poster';
import Details from '../sub-components/Details';
import Profile from './Auth0/Profile';

const Cinema = ({ movieData, setSelectedCinema }) => {
  const { capacity, genre, movies } = movieData;
  const [selectedMovieId, setSelectedMovieId] = useState(0);
  const selectedMovie = movies.find((movie) => movie.id === selectedMovieId);

  setSelectedCinema(genre)
  //  console.log(selectedMovie);

  return (
    <div className='cinema-page-container'>
      <Profile />
      <div className='movie-list'>
        {movies.map((movie) => {
          return (
            <Poster
              key={movie.id}
              id={movie.id}
              genre={genre}
              poster_img_src={movie.poster_img_src}
              setSelectedMovieId={setSelectedMovieId}
            />
            // Pass down image
          );
        })}
      </div>
      <hr />
      <div className='movie-details'>
        {selectedMovieId !== 0 ? (
          <Details movie={selectedMovie} genre={genre} />
        ) : null}
      </div>
    </div>
  );
};
export default Cinema;
