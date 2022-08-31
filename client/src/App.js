import './App.css';
import { Link } from 'react-router-dom';

function App({ movieData }) {
   
  // console.log(movieData)

   return (
      <div className='App'>
         <header className='App-header'>
            <h1> ATZ Cinema </h1>
            <div className='genre-container'>
               <Link to='/cinema/romance'>
                  <div className='genre-card'>
                     <h1> Romance </h1>
                  </div>
               </Link>

               <Link to='/cinema/comedy'>
                  <div className='genre-card'>
                     <h1> Comedy </h1>
                  </div>
               </Link>

               <Link to='/cinema/action'>
                  <div className='genre-card'>
                     <h1> Action </h1>
                  </div>
               </Link>

               <Link to='/cinema/horror'>
                  <div className='genre-card'>
                     <h1> Horror </h1>
                  </div>
               </Link>
            </div>
         </header>
      </div>
   );
}

export default App;
