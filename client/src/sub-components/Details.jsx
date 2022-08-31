import { Link } from "react-router-dom";

const Details = ({ movie, genre }) => {
   const { name, genres, rating, description, runtime, release_date} = movie;

   const sepgenres = genres.split('-');
   return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
      <div className="movie-details">
         <h1>{name}</h1>
         <p>
            {release_date} • {rating} • {runtime}
         </p>
         <div className='genre-list'>
            <div className='genre-blob'>{sepgenres[0]}</div>
            {sepgenres.length === 2 ? <div className='genre-blob'>{sepgenres[1]}</div> : null}
            {sepgenres.length === 3 ? <div className='genre-blob'>{sepgenres[2]}</div> : null}
         </div>
         <p>{description}</p>
         <Link to={`/cinema/${genre.toLowerCase()}/seats`} >
           <button> Buy Pass </button>
         </Link>
      </div>
    </div>
   );
};
export default Details;
