import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="flex gap-10 mb-10">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/cards">cards versione 1</Link>
      </li>
      <li>
        <Link to="/cards-children">cards versione 2</Link>
      </li>
    </ul>
  );
};

export default Navbar;
