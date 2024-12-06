import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css'
import Login from './Components/Login.jsx';
import AddMovies from './Components/AddMovies.jsx';
import Layout from './Components/Layout.jsx';
import HomePage from './Components/HomePage.jsx';
import Register from './Components/Register.jsx';
import PrivateRoutes from './Components/Routes/PrivateRoutes.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
        loader: () => fetch('http://localhost:5000/movies')
      },
      {
        path: '/addMovies',
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
