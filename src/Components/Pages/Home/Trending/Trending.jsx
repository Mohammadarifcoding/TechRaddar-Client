import React from 'react';
import UseAxious from '../../../Hooks/UseAxious';
import { useQuery } from '@tanstack/react-query';
import UseTrending from '../../../Hooks/UseTrending';
import Card from '../../../Shared/Card/Card';
import { FaArrowTrendUp } from "react-icons/fa6";

const Trending = () => {
   const [trending] = UseTrending()
   console.log(trending)
    return (
        <div className="bg-[#EEEEEE]  pb-36">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="md:text-6xl flex justify-center text-[#222831] gap-2 sm:text-5xl text-3xl text-center font-bold">
       <FaArrowTrendUp className='text-[#00ADB5]'></FaArrowTrendUp>  Trending Products
        </h2>
        <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 gap-5 mt-20 md:grid-cols-2 grid-cols-1">
          {trending?.map((value) => (
            <Card data={value} trend={true} key={value._id}></Card>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Trending;