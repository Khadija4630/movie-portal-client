
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import FeaturedMovies from './FeaturedMovies';
import LatestMovies from './LatestMovies';

const HomePage = () => {

    return (
        <div className='max-w-6xl mx-auto'> 
          <Navbar ></Navbar>
            <Header></Header>
            <FeaturedMovies></FeaturedMovies>
            <LatestMovies></LatestMovies>
            <Outlet></Outlet>
        </div>
    );
};

export default HomePage;

