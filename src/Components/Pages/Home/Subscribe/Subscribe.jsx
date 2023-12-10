import React from 'react';
import UseCoupons from '../../../Hooks/UseCoupons';
import { Button, DialogFooter } from '@material-tailwind/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Subscribe = () => {
     const [coupons , refetch , isLoading] = UseCoupons()
     console.log(coupons)
    return (
        // <div className="  w-full py-40 bg-[#EEEEEE] mx-auto flex justify-center items-center flex-col  max-h-[400px]  ">
        //     <div >
        //     <div className="w-full  relative">
        //       <img
        //         className="w-full h-full"
        //         src="/images/coupon-Bg.jpg"
        //         alt=""
        //       />
             
        //       <div className="top-[50%] left-[40%] absolute transform [-translate-x-1/2]  [-translate-y-1/2] flex  justify-center">
        //         <h2 className="text-[#EEEEEE] text-center text-3xl">Offer!!</h2>
        //         <div className="flex items-center justify-center ">
        //           <img
        //             className="w-8 h-8 mx-1"
        //             src="/images/offer.png"
        //             alt="Offer Icon 1"
        //           />
        //           <img
        //             className="w-8 h-8 mx-1"
        //             src="/images/offer.png"
        //             alt="Offer Icon 2"
        //           />
        //           <img
        //             className="w-8 h-8 mx-1"
        //             src="/images/offer.png"
        //             alt="Offer Icon 3"
        //           />
        //         </div>
        //       </div>
        //     </div>

        //     <div>
        //       <h2 className="text-black text-2xl bg-white text-center pt-3 pb-10 font-bold">
        //         Use <span className="text-[#0f848a]">ABC</span> Get{" "}
        //         <span className="text-red-600">45%</span>
        //       </h2>
        //     </div>


        //   </div>
        //     {/* <h2 className='lg:text-6xl md:text-3xl text-3xl text-center font-semibold font-sans text-[#EEEEEE]'>Do You Love Tech<span className='text-[#00ADB5] font-sans'>Raddar</span> ?</h2>
        //     <p className='text-[#EEEEEE] font-medium max-w-xl text-center mt-3 font-sans'>If the Answer is yes. And if you want to be one of the most premium customer of TechRaddar .Also if you want to increase your sell using techRaddar marketing stragety. Then Don't wait.</p>
        //     <button className='btn bg-[#00ADB5] border-2 hover:bg-[#EEEEEE] border-[#00ADB5] hover:border-2 hover:border-[#00ADB5] hover:text-[#393E46] text-[#EEEEEE] mt-5'>Subscribe</button> */}
        // </div>
   <div className='pt-10 pb-20 bg-[#EEEEEE] '>
    <Swiper
        pagination={true} modules={[Pagination]} className="mySwiper"
      >
        {coupons.map(item => <SwiperSlide key={item._id}><div className="  bg-[url('/images/coupon-Bg.jpg')] bg-cover flex flex-col justify-center items-center bg-center lg:min-h-[300px] min-h-[380px]">
            <div className='flex justify-center items-center gap-2 border-b-4 pb-3 border-[#EEEEEE]'>
                <h2 className='text-4xl text-[#EEEEEE]'>Offer</h2>
                <img
                    className="w-8 h-8 mx-1"
                    src="/images/offer.png"
                    alt="Offer Icon 1"
                  />
                  <img
                    className="w-8 h-8 mx-1"
                    src="/images/offer.png"
                    alt="Offer Icon 2"
                  />
                  <img
                    className="w-8 h-8 mx-1"
                    src="/images/offer.png"
                    alt="Offer Icon 3"
                  />
            </div>
            <div className='mt-5 flex justify-center items-center flex-col'>
                <h2 className='text-[#EEEEEE] text-2xl'>Use <span className='text-[#00ADB5] font-extrabold'>{item?.couponCode}</span> Code to get {item?.discount}% off</h2>
                <p className='text-xl text-[#EEEEEE] mt-3 text-center'>{item?.description}</p>
            </div>
            </div>
</SwiperSlide>)}
        
      

      </Swiper>

   </div>
     
    );
};

export default Subscribe;