import React from 'react';

const Subscribe = () => {
    return (
        <div className=" bg-fixed w-full py-40 mx-auto flex justify-center items-center flex-col bg-[url('/images/subscribepage.jpg')] bg-cover bg-center max-h-[400px] min-h-[300px] mb-20">
            <h2 className='lg:text-6xl md:text-3xl text-3xl text-center font-semibold font-sans text-[#EEEEEE]'>Do You Love Tech<span className='text-[#00ADB5] font-sans'>Raddar</span> ?</h2>
            <p className='text-[#EEEEEE] font-medium max-w-xl text-center mt-3 font-sans'>If the Answer is yes. And if you want to be one of the most premium customer of TechRaddar .Also if you want to increase your sell using techRaddar marketing stragety. Then Don't wait.</p>
            <button className='btn bg-[#00ADB5] border-2 hover:bg-[#EEEEEE] border-[#00ADB5] hover:border-2 hover:border-[#00ADB5] hover:text-[#393E46] text-[#EEEEEE] mt-5'>Subscribe</button>
        </div>
    );
};

export default Subscribe;