import React from 'react';
import NormalButton from '../../../Shared/Button/NormalButton';

const Banner = () => {
    return (
        <div className='max-h-[700px] py-10    bg-cover bg-center w-full h-full bg-[url("/images/superbg.jpg")]'>
           
           <div className='mx-auto max-w-[1300px] 2xl:px-0 xl:px-10 lg:px-10 md:px-10 px-10 py-5 flex lg:flex-row-reverse justify-between  flex-col-reverse items-center'>
           <img src="/public/images/22633729_6650960-removebg-preview.png" className='lg:max-w-[550px] ' alt="" />
           <div>
            
           <h2 className='text-[#EEEEEE] xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl max-w-2xl font-bold lg:text-start text-center'>
      <span className='secondcolorRunningText'>Your</span> Ultimate <span className='colorRunningText'>Tech</span> <span className='secondcolorRunningText'>Guide</span> at Tech<span className='colorRunningText'>Raddar</span>
    </h2>
            
            <NormalButton text={'Explore'}></NormalButton>
           </div>
            
            </div>
         
            
 
        </div>
    );
};

export default Banner;