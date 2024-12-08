import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css'
import Login from './Components/Login.jsx';
import AddMovies from './Components/AddMovies.jsx';
import HomePage from './Components/HomePage.jsx';
import Register from './Components/Register.jsx';
import PrivateRoutes from './Components/Routes/PrivateRoutes.jsx';
import AllMovies from './Components/AllMovies.jsx';
import FavouriteMovies from './Components/FavouriteMovies.jsx';
import FeaturedMovies from './Components/FeaturedMovies.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MovieDetails from './Components/MovieDetails.jsx';
import NotFound from './Components/NotFound.jsx';
import UpdateMovie from './Components/UpdateMovie.jsx';


const router = createBrowserRouter([

  
  {
    path: "/",
    element: <HomePage ></HomePage>,
    loader: () => fetch('https://movie-portal-server-10.vercel.app'),
    children: [
      {
        path: '/allMovies',
        element:<AllMovies></AllMovies>
      },
      {
        path: "/movies/:id",
        element:<MovieDetails />,
      },
      {
        path: "/update-movie/:id",
        element: <UpdateMovie />,
      },
      {
        path: '/addMovies',
        element:<AddMovies></AddMovies>
      },
      {
        path: '/favouriteMovies',
        element:<FavouriteMovies></FavouriteMovies>
      },
      {
        path: '/featured-movies',
        element:<FeaturedMovies></FeaturedMovies>
      },
      {
        path: '/myFavourite',
        element:<AddMovies></AddMovies>
      },
      {
        path: 'login',
        element: <Login ></Login>
      },
      {
        path: 'register',
        element:<Register></Register>
      },
      // {
      //   path: 'users',
      //   element: <Users></Users>,
      //   loader: () => fetch('https://movie-portal-server-10.vercel.app/users')
      // }
    ]
    
  },
  {
    path: "*",
    element: <NotFound />,
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrivateRoutes>
    <RouterProvider router={router} />
    </PrivateRoutes>
    <ToastContainer />
  </StrictMode>,
);
 
