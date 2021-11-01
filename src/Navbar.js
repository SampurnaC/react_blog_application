import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      I am from Navbar
      <Link to="/">Home</Link>
      <br />
      <Link to='create'>Create</Link>
    </div>
  );
}
 
export default Navbar;