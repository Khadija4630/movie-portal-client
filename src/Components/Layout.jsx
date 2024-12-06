import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    const [user, setUser] = useState(null);
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar user={user} setUser={setUser} ></Navbar>
            {/* <Header></Header> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;