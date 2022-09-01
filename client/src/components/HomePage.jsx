import '../styles/Global.scss';
import { Link } from 'react-router-dom';

const HomePage = ({ movieData }) => {
  // console.log(movieData);

  return (
    <div className='App'>
      <div className='genre-container'>
        <div className='genre-row'>
          <Link to='/cinema/romance'>
            <div className='romance-card'>
              <h1> Romance </h1>
            </div>
          </Link>

          <Link to='/cinema/comedy'>
            <div className='comedy-card'>
              <h1> Comedy </h1>
            </div>
          </Link>
        </div>

        <div className='genre-row'>
          <Link to='/cinema/action'>
            <div className='action-card'>
              <h1> Action </h1>
            </div>
          </Link>

          <Link to='/cinema/horror'>
            <div className='horror-card'>
              <h1> Horror </h1>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default HomePage;
