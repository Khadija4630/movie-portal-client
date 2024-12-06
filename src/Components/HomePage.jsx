
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';

const HomePage = () => {
    const [user, setUser] = useState(null);
    return (
        <div className='max-w-6xl mx-auto'> 
          <Navbar user={user} setUser={setUser} ></Navbar>
            
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default HomePage;

