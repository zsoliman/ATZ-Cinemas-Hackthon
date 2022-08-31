const Poster = ({ id, name ,setSelectedMovieId }) => {

  const handleClick = () => {
    setSelectedMovieId(id)
  }

   return (
      <div className='movie-poster' onClick={handleClick}>
         <p> Placeholder {name} poster </p>
      </div>
   );
};
export default Poster;
