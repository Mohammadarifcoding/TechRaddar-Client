import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import Ban from './Banner/Ban';
import Featured from './Featured/Featured';
import Trending from './Trending/Trending';
import Partners from './Partners/Partners';
import Subscribe from './Subscribe/Subscribe';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <Partners></Partners>
            <Trending></Trending>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;