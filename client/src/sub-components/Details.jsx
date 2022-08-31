const Details = ({ movie }) => {
   const { name, genres, rating, description, runtime} = movie;
   return (
      <div>
         <h1>{name}</h1>
         <p>{genres}</p>
         <p>{rating}</p>
         <p>{description}</p>
         <p>{runtime}</p>
      </div>
   );
};
export default Details;
