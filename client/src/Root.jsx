import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import Cinema from './components/Cinema';
import SeatSelect from './components/SeatSelect';
import Checkout from './components/Checkout';
import LoginScreen from './components/Auth0/LoginScreen';

const Root = () => {
  const [movieData, setMovieData] = useState([]);
  const [seatData, setSeatData] = useState([]);
  const [ticketData, setTicketData] = useState([]);
  const [purchaseData, setPurchaseData] = useState([]);
  const [selectedCinema, setSelectedCinema] = useState('')


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

  const convertGenreToId = (genre) => {
    switch (genre) {
      case 'Romance':
        return 1;
      case 'Comedy':
        return 2;
      case 'Action':
        return 3;
      case 'Horror':
        return 4;
      default:
        return null;
    }
  }

  const theaterTickets = ticketData.filter((ticket) => {return ticket.theater_id === convertGenreToId(selectedCinema)})
  const availableTickets = theaterTickets.filter((ticket) => { return ticket.seat_id === null })
  const purchasedTickets =  availableTickets.slice(0,purchaseData.length)

  useEffect(() => {
    fetchMovies();
    fetchSeats();
    fetchTickets();
  }, []);


  function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }

  console.log(selectedCinema);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<LoginScreen />}
        />

        <Route
          path='/home'
          element={<HomePage movieData={movieData} />}
        />

        <Route
          path='/cinema/romance'
          element={<Cinema setSelectedCinema={setSelectedCinema} movieData={movieData[0]} />}
        />

        <Route
          path='/cinema/comedy'
          element={<Cinema setSelectedCinema={setSelectedCinema} movieData={movieData[1]} />}
        />

        <Route
          path='/cinema/action'
          element={<Cinema setSelectedCinema={setSelectedCinema} movieData={movieData[2]} />}
        />

        <Route
          path='/cinema/horror'
          element={<Cinema setSelectedCinema={setSelectedCinema} movieData={movieData[3]} />}
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

        <Route
          path='/cinema/checkout'
          element={
            <Checkout
              currentTicket={purchasedTickets}
              purchaseData={purchaseData}
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
};
export default Root;
