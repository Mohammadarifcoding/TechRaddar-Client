import React from "react";

const Partners = () => {
  return (
    <div className="bg-[#EEEEEE] md:pt-20 md:pb-40 pb-20">
      <div className="max-w-[1300px] mx-auto flex lg:flex-row flex-col justify-between items-center">
        <div>
          <h2 className="lg:text-2xl sm:text-xl text-lg sm:flex-nowrap flex-wrap text-[#393E46] font-semibold flex gap-10 lg:justify-start justify-center">
            {" "}
            <span>TEAM.</span> <span>CUSTOMER.</span> <span>COMMUNITY</span>
          </h2>
          <h1 className=" mt-10 lg:text-5xl lg:mr-auto lg:ml-0 mx-auto sm:text-4xl text-3xl font-extrabold max-w-lg text-[#222831] leading-[50px] lg:text-start text-center">
            We Work With The Best Partners
          </h1>
          <p className="text-[#393E46] max-w-2xl lg:px-0 px-3 my-5 md:text-xl text-lg font-medium lg:text-start text-center ">
            Embark on a transformative journey with us! Together, we unlock
            possibilities, drive innovation, and cultivate a dynamic
            partnership. Join hands to shape the future and create impactful,
            lasting collaborations.
          </p>
          <div className="flex lg:justify-start justify-center">
            <button className="btn bg-[#00ADB5] border-2 hover:bg-[#EEEEEE] border-[#00ADB5] hover:border-2 hover:border-[#00ADB5] hover:text-[#393E46] text-[#EEEEEE]">
              Read More
            </button>
          </div>
        </div>

        <div className=" flex flex-col space-y-4 items-center">
          <div className="flex md:gap-24 items-center justify-between">
            <img src="/images/amazonLog.png" alt="" className="sm:w-[200px] drop-shadow-xl  w-[150px]" />
            <img src="/images/apple.png" alt="" className="sm:w-[200px] drop-shadow-xl w-[150px]" />
          </div>
          <div className="flex md:gap-24 items-center justify-between">
            <img src="/images/bose.png" alt="" className="sm:w-[200px] drop-shadow-xl w-[150px]" />
            <img src="/images/sony.png" alt="" className="sm:w-[200px]  w-[150px]" />
          </div>
          <div className="flex md:gap-24 items-center justify-between">
            <img src="/images/samsung.png" alt="" className="sm:w-[200px] drop-shadow-xl w-[150px]" />
            <img src="/images/logitech.png" alt="" className="sm:w-[200px] drop-shadow-xl w-[150px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
