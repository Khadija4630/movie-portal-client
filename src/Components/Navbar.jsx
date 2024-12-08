import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Routes/PrivateRoutes";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async() => {
    try{
      await signOutUser();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  document.body.className = darkMode ? "dark" : "light";
}, [darkMode]);


  const Links = (
    <>
      <Link to="/" className="block text-center text-lg lg:mx-4 mx-2  hover:text-red-500">
        Home
      </Link>
      <Link to="/allMovies" className="block text-center text-lg  lg:mx-4 mx-2 hover:text-red-500">
        All Movies
      </Link>
      <Link to="/addMovies" className="block text-center text-lg  lg:mx-4 mx-2 hover:text-red-500">
        Add Movie
      </Link>
      <Link to="/favouriteMovies" className="block text-center text-lg  lg:mx-4 mx-2  hover:text-red-500">
        My Favourites
      </Link>
      <Link to="/myFavourites" className="block text-center text-lg  lg:mx-4 mx-2  hover:text-red-500">Movies
      </Link>
    </>
  );

  return (
    <div className="navbar">
         <div className="navbar-start md:hidden flex md:items-center ">
        <div className="dropdown">
          <label tabIndex={0} role="button" className="btn btn-ghost">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-50"
          >
            {Links}
            
          </ul>
        </div>
        </div>
      <div className="navbar-start flex md:items-center">
        <a href="/" className="flex md:items-center">
          <img className="w-8" src={Logo} alt="Logo" />
          <span className="text-xl font-bold ml-2 text-center hidden md:block">Movie Portal</span>
        </a>
        
      </div>
     
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end bg-base-2
      00">
          {user ? (
            <>
            <div className="flex items-center space-x-4 bg-base-200">
              <img 
                src={user.photoURL}
                
                className="w-10 rounded-full text-black"
                
              />
              <span className="hidden md:inline text-black font-semibold px-2">{user.displayName || "User"}</span>
            </div>
           
              <button onClick={handleLogout} className="btn bg-red-400 text-white rounded-lg px-4 py-2">Logout</button>
          </>
          ) : (
           
            <div className="flex space-x-4 p-2">
            <button className="bg-red-400 rounded-xl px-2">
              <Link to="/login"  onClick={() => console.log('Login Button Clicked')}>Login</Link>
            </button>
            <button className="bg-red-400 rounded-xl px-2">
              <Link to="/register" onClick={() => console.log('Register Button Clicked')}>Register</Link>
            </button>
          </div>
)}
</div>
<button onClick={() => setDarkMode(!darkMode)}>
    {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
  </button>
</div>
  );
};

export default Navbar;
