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
import AboutUs from './Components/AboutUs.jsx';
import TrendingMovies from './Components/TrendingMovies.jsx';
import FavoriteMovies from './Components/FavouriteMovies.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';


const router = createBrowserRouter([

  
  {
    path: "/",
    element: <HomePage ></HomePage>,
    children: [
      {
        path: '/allMovies',
        element:<AllMovies></AllMovies>
      },
      {
        path: "/movies/:id",
        element:<PrivateRoute><MovieDetails />,</PrivateRoute>
      },
      {
        path: "/update-movie/:id",
        element:<PrivateRoute><UpdateMovie /></PrivateRoute>,
      },
      {
        path: '/addMovies',
        element:<PrivateRoute><AddMovies ></AddMovies></PrivateRoute>
      },
      {
        path: '/featured-movies',
        element:<FeaturedMovies></FeaturedMovies>
      },
      {
        path: '/favouriteMovies',
        element:<PrivateRoute><FavouriteMovies></FavouriteMovies></PrivateRoute>
      },
      {
        path:'/aboutUs',
        element:<AboutUs></AboutUs>
      },
      {
        path:'trendingMovies',
        element:<TrendingMovies></TrendingMovies>
      },
      {
        path: 'login',
        element: <Login ></Login>
      },
      {
        path: 'register',
        element:<Register></Register>
      },
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
 
