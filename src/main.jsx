import { StrictMode } from 'react'
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


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children: [
      // {
      //   path: '/',
      //   element: <HomePage></HomePage>,
      //   loader: () => fetch('http://localhost:5000/movies')
      // },
      {
        path: '/allMovies',
        element:<AllMovies></AllMovies>
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
        path: '/featuredMovies',
        element:<FeaturedMovies></FeaturedMovies>
      },
      {
        path: '/myFavourite',
        element:<AddMovies></AddMovies>
      },
      // {
      //   path: 'updateCoffee/:id',
      //   element: <UpdateCoffee></UpdateCoffee>,
      //   loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
      // },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      // {
      //   path: 'users',
      //   element: <Users></Users>,
      //   loader: () => fetch('http://localhost:5000/users')
      // }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrivateRoutes>
      <RouterProvider router={router} />
    </PrivateRoutes>
  </StrictMode>,
)
