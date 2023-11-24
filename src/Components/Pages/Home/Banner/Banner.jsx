import React from 'react';
import NormalButton from '../../../Shared/Button/NormalButton';

const Banner = () => {
    return (
        <div className='min-h-[calc(100vh-73px)]   bg-cover bg-center w-full h-full bg-[url("/images/black-bg.jpg")]'>
           
           <div className='mx-auto max-w-[1300px] 2xl:p-0 xl:p-10 lg:p-10 md:p-10 p-10 flex lg:flex-row-reverse justify-between   flex-col-reverse items-center'>
           <img src="/public/images/22633729_6650960-removebg-preview.png" className='lg:max-w-[550px] ' alt="" />
           <div>
            
            <h2 className='text-[#EEEEEE]  xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl max-w-2xl font-bold lg:text-start text-center'>Your Ultimate <span className='text-[#00ADB5] '>Tech</span> Guide at Tech<span className='text-[#00ADB5]'>Raddar</span></h2>
            
            <NormalButton text={'Explore'}></NormalButton>
           </div>
            
            </div>
         
            
 
        </div>
    );
};

export default Banner;