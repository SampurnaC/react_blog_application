import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/" class="nav-link">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="create" class="nav-link">Create</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}
 
export default Navbar;