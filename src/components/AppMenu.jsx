import { Link } from "react-router-dom";

const AppMenu = () => {
  return (
    <ul className="flex gap-10 mb-10">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/filtered-cities">Filtra le città</Link>
      </li>
    </ul>
  );
};

export default AppMenu;
