import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/peeps">All Peeps</Link></li>
          <li><Link to="/peeps/new">Create a Peep</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
