import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Rem from "../images/Rem.png";
import Button from "../atoms/Button";

function Navbar() {
  const location = useLocation();

  return (
    <nav
      id="Navbar"
      className="w-full sticky top-0 flex items-center bg-slate-700 z-50"
    >
        <img src={Rem} alt="" id="icon" className="w-18 m-2 rounded-full" />

      <div className="absolute right-0">
        <Link
          to="/anime-favorites"
          className="text-2xl m-1.5 p-1 bg-gray-400 rounded-md font-bold hover:bg-gray-300 transition-colors duration-200"
        >
          Favorites
        </Link>

        <Link
          to="/about-us"
          className="text-2xl m-1.5 p-1 bg-gray-400 rounded-md font-bold hover:bg-gray-300 transition-colors duration-200"
        >
          About us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
