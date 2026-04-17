import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Dotochibi from "../images/Dotochibi.png";

function Navbar() {
    const location = useLocation();
    const isAuth = true;

    if(location.pathname = "/"){
        return (
            <nav
                id="Navbar"
                className="w-full sticky top-0 flex items-center bg-indigo-200 z-50"
            >
            <Link to={isAuth ? "/" : "/main"}>
                <img src={Dotochibi} alt="" id="icon" className="w-20" />
            </Link>

            <div className="absolute right-0">
                <Link
                to="/login"
                className="m-1.5 p-1 bg-gray-400 rounded-md font-bold hover:bg-gray-300 transition-colors duration-200"
                >Login</Link>

                <Link
                to="/register"
                className="m-1.5 p-1 bg-gray-400 rounded-md font-bold hover:bg-gray-300 transition-colors duration-200"
                >Register</Link>

                <Link
                to="/about-us"
                className="m-1.5 p-1 bg-gray-400 rounded-md font-bold hover:bg-gray-300 transition-colors duration-200"
                >About us</Link>
        </div>
        </nav>
        )
    }
}

export default Navbar;