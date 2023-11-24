import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import Ban from './Banner/Ban';
import Featured from './Featured/Featured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
        </div>
    );
};

export default Home;