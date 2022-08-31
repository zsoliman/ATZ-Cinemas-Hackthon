import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import App from './App';
import Cinema from './Cinema';

const Root = () => {
   const [movieData, setMovieData] = useState([]);

   useEffect(() => {
      const fetchMovies = async () => {
         const request = await fetch('http://localhost:3000/');
         const data = await request.json();
         setMovieData(data);
      };
      fetchMovies();
   }, []);

   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<App movieData={movieData} />} />
            <Route
               path='/cinema/romance'
               element={<Cinema movieData={movieData[0]} />}
            />
            <Route
               path='/cinema/comedy'
               element={<Cinema movieData={movieData[1]} />}
            />
            <Route
               path='/cinema/action'
               element={<Cinema movieData={movieData[2]} />}
            />
            <Route
               path='/cinema/horror'
               element={<Cinema movieData={movieData[3]} />}
            />
         </Routes>
      </BrowserRouter>
   );
};
export default Root;
