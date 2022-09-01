import '../styles/utils.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to='/home'>
        <h1> ATZ Cinemas </h1>
      </Link>
    </header>
  )
}
export default Header