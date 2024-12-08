
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import FeaturedMovies from './FeaturedMovies';
import LatestMovies from './LatestMovies';
import Footer from './Footer';
import TrendingMovies from './TrendingMovies';

const HomePage = () => {

    return (
        <div className='max-w-6xl mx-auto'> 
          <Navbar ></Navbar>
            <Header></Header>
            <Outlet></Outlet>
            <FeaturedMovies></FeaturedMovies>
            <LatestMovies></LatestMovies>
            <TrendingMovies></TrendingMovies>
            <Footer></Footer>
            
        </div>
    );
};

export default HomePage;

