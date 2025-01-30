import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">📚 Books</Link></li>
        <li><Link to="/books/new">➕ Add Book</Link></li>
        <li><Link to="/users">👤 Manage Users</Link></li>
        <li><Link to="/reviews">⭐ Reviews</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
