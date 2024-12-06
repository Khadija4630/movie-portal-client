import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };
  const Links = (
    <>
      <Link to="/" className="mx-4 hover:text-red-500">
        Home
      </Link>
      <Link to="/allMovies" className="mx-4 hover:text-red-500">
        All Movies
      </Link>
      <Link to="/addMovies" className="mx-4 hover:text-red-500">
        Add Movie
      </Link>
      <Link to="/favouriteMovies" className="mx-4 hover:text-red-500">
        {" "}
        My Favourites
      </Link>
      <Link to="/myFavourites" className="mx-4 hover:text-red-500">
        Movies{" "}
      </Link>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-6 py-4">
      <div className="navbar-start  flex items-center">
        <a href="/" className="flex items-center">
          <img className="w-6" src={Logo} alt="Logo" />
          <span className="text-xl font-bold ml-2">Movie Portal</span>
        </a>
      </div>
      <div className="navbar-start md:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box"
          >
            {Links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end">
        <ul>
          {!user ? (
            <div className="flex space-x-4 p-2">
              <button className="bg-red-400 rounded-xl px-2">
                <Link to="/login">Login</Link>
              </button>
              <button className="bg-red-400 rounded-xl px-2">
                <Link to="/register">Register</Link>
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center space-x-4">
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-10 h-10 rounded-full"
                  title={user.displayName}
                />
              </div>
             
                <button onClick={handleLogout} className="btn bg-red-400 text-white rounded-lg px-4 py-2">Logout</button>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
