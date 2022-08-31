import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import App from './App';
import Cinema from './Cinema';
import SeatSelect from './SeatSelect';

const Root = () => {
   const [movieData, setMovieData] = useState([]);
   const [seatData, setSeatData] = useState([]);
   const [ticketData, setTicketData] = useState([]);
   const [purchaseData, setPurchaseData] = useState([]);

   const fetchMovies = async () => {
      const request = await fetch('http://localhost:3000/');
      const data = await request.json();
      setMovieData(data);
   };

   const fetchSeats = async () => {
      const request = await fetch('http://localhost:3000/seat');
      const data = await request.json();
      setSeatData(sliceIntoChunks(data, 20));
   };

   const fetchTickets = async () => {
      const request = await fetch('http://localhost:3000/ticket');
      const data = await request.json(0);
      setTicketData(data);
   };

   useEffect(() => {
      fetchMovies();
      fetchSeats();
      fetchTickets();
   }, []);

  //  console.log(ticketData);

   //  const t1Seats = [move]
   function sliceIntoChunks(arr, chunkSize) {
      const res = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
         const chunk = arr.slice(i, i + chunkSize);
         res.push(chunk);
      }
      return res;
   }

   console.log(purchaseData);

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
               element={
                  <SeatSelect
                     purchaseData={purchaseData}
                     setPurchaseData={setPurchaseData}
                     seatData={seatData[0]}
                  />
               }
            />
            <Route
               path='/cinema/comedy/seats'
               element={
                  <SeatSelect
                     purchaseData={purchaseData}
                     setPurchaseData={setPurchaseData}
                     seatData={seatData[1]}
                  />
               }
            />
            <Route
               path='/cinema/action/seats'
               element={
                  <SeatSelect
                     purchaseData={purchaseData}
                     setPurchaseData={setPurchaseData}
                     seatData={seatData[2]}
                  />
               }
            />
            <Route
               path='/cinema/horror/seats'
               element={
                  <SeatSelect
                     purchaseData={purchaseData}
                     setPurchaseData={setPurchaseData}
                     seatData={seatData[3]}
                  />
               }
            />
         </Routes>
      </BrowserRouter>
   );
};
export default Root;
