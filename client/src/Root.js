import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import App from './App';
import Cinema from './Cinema';
import SeatSelect from './SeatSelect';

const Root = () => {
   const [movieData, setMovieData] = useState([]);
   const [seatData, setSeatData] = useState([]);

   useEffect(() => {
      const fetchMovies = async () => {
         const request = await fetch('http://localhost:3000/');
         const data = await request.json();
         setMovieData(data);
      };
      fetchMovies();
   }, []);

   useEffect(() => {
      const fetchSeats = async () => {
         const request = await fetch('http://localhost:3000/seat');
         const data = await request.json();
         setSeatData(sliceIntoChunks(data, 20));
      };
      fetchSeats();
   }, []);

   //  const t1Seats = [move]
   function sliceIntoChunks(arr, chunkSize) {
      const res = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
         const chunk = arr.slice(i, i + chunkSize);
         res.push(chunk);
      }
      return res;
   }

   console.log(seatData);

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
            
            <Route
               path='/cinema/romance/seats'
               element={<SeatSelect seatData={seatData[0]} />}
            />
            <Route
               path='/cinema/comedy/seats'
               element={<SeatSelect seatData={seatData[1]} />}
            />
            <Route
               path='/cinema/action/seats'
               element={<SeatSelect seatData={seatData[2]} />}
            />
            <Route
               path='/cinema/horror/seats'
               element={<SeatSelect seatData={seatData[3]} />}
            />
         </Routes>
      </BrowserRouter>
   );
};
export default Root;
