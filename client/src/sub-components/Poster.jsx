const Poster = ({ id, genre, poster_img_src, setSelectedMovieId }) => {
  const handleClick = () => {
    setSelectedMovieId(id);
  };

  const colorLogic = (genre) => {
    switch (genre) {
      case 'Romance':
        return 'romance-poster'
      case 'Comedy':
        return 'comedy-poster'
      case 'Action':
        return 'action-poster'
      case 'Horror':
        return 'horror-poster'
    }
  }

  return (
    <div className={colorLogic(genre)} onClick={handleClick}>
      <img src={poster_img_src} alt='poster' />
    </div>
  );
};
export default Poster;
