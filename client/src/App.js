import './App.css';

import { useEffect, useState } from 'react';

function App() {
  const [movieData, setMovieData] = useState([])

   useEffect(() => {
    const fetchMovies = async () => {
      const request = await fetch('http://localhost:3000/');
      const data = await request.json()
      // console.log(data)
      setMovieData(data)
    }
    fetchMovies()
   },[])

   console.log(movieData)

   return (
      <div className='App'>
         <header className='App-header'>
            <h1> ATZ Cinema </h1>

         </header>
      </div>
   );
}

export default App;
