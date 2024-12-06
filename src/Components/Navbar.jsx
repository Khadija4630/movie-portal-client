import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {

    const navigate = useNavigate();
    const handleLogout = () => {
        setUser(null); 
        navigate("/"); 
      };
    const Links =<>
            <Link to="/">Home</Link>
            <Link to="/allMovies">All Movies</Link>
            <Link to="/addMovies">Add Movie</Link>
            <Link to="/favouriteMovies"> My Favourites</Link>
            <Link to="/myFavourites">Movies </Link>
    </>


    return (
            <div>
                <a href="/"> <img src="../assets/logo.png" alt="" /></a>
                <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
        <ul>
            {!user ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        ) : (
          <>
            <li>
              <img
                src={user.photoURL}
                alt={user.displayName}
                title={user.displayName}
                style={{ width: "30px", borderRadius: "50%" }}
              />
            </li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        )}
      </ul>
                </div>
            </div>
            

        </div>
    );
};

export default Navbar;