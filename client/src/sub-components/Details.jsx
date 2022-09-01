import { Link } from "react-router-dom";

const Details = ({ movie, genre }) => {
  const { name, genres, rating, description, runtime, release_date } = movie;
  const sepgenres = genres.split('-');

  const colorLogic = (genre) => {
    switch (genre) {
      case 'Romance':
        return 'romance-blob'
      case 'Comedy':
        return 'comedy-blob'
      case 'Action':
        return 'action-blob'
      case 'Horror':
        return 'horror-blob'
    }
  }
  const titleColorLogic = (genre) => {
    switch (genre) {
      case 'Romance':
        return '#D36060'
      case 'Comedy':
        return '#F9DC5C'
      case 'Action':
        return '#690500'
      case 'Horror':
        return '#5D2E8C'
    }
  }

  const buttonColorLogic = (genre) => {
    switch (genre) {
      case 'Romance':
        return 'romance-button'
      case 'Comedy':
        return 'comedy-button'
      case 'Action':
        return 'action-button'
      case 'Horror':
        return 'horror-button'
    }
  }

  const timeConvert = (n) => {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return `${rhours}h ${rminutes}min`;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <div className="movie-details">
        <h1 style={{ color: titleColorLogic(genre) }}>{name}</h1>
        <p>
          {release_date} • {rating} • {timeConvert(runtime)}
        </p>
        <div className='genre-list'>
          <div className={colorLogic(genre)}>{sepgenres[0]}</div>
          {sepgenres.length === 2 ? <div className={colorLogic(genre)}>{sepgenres[1]}</div> : null}
          {sepgenres.length === 3 ? <div className={colorLogic(genre)}>{sepgenres[2]}</div> : null}
        </div>
        <p>{description}</p>
        <Link to={`/cinema/${genre.toLowerCase()}/seats`} >
          <button className={buttonColorLogic(genre)}> Reserve Seats </button>
        </Link>
      </div>
    </div>
  );
};
export default Details;
