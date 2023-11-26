import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import Ban from './Banner/Ban';
import Featured from './Featured/Featured';
import Trending from './Trending/Trending';
import Partners from '../Partners/Partners';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <Partners></Partners>
            <Trending></Trending>
        </div>
    );
};

export default Home;