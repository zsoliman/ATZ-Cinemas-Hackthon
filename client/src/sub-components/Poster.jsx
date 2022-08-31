const Poster = ({ id, name, poster_img_src, setSelectedMovieId }) => {
   const handleClick = () => {
      setSelectedMovieId(id);
   };

   console.log();

   return (
      <div className='movie-poster' onClick={handleClick}>
         <img src={poster_img_src} alt='poster' />
      </div>
   );
};
export default Poster;
