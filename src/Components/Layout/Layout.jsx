import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const Layout = () => {
    const location = useLocation()

    return (
        <div className='max-w-[1800px] mx-auto'>
            {
                 location.pathname == '/login' || location.pathname == '/register' ? '':<Navbar></Navbar>
            }
            
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;