import React from "react";
import UseFeatured from "../../../Hooks/UseFeatured";
import { FaHeart } from "react-icons/fa";
import Card from "../../../Shared/Card/Card";

const Featured = () => {
  const [data, refetch, isLoading] = UseFeatured();
  console.log(data);
  return (
    <div className="bg-[#393E46]   pt-32 pb-36">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="md:text-6xl flex justify-center text-[#EEEEEE] gap-3 sm:text-5xl text-3xl text-center font-bold">
          Featured Products
        </h2>
        <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 gap-5 mt-20 md:grid-cols-2 grid-cols-1">
            {
                data?.map(value => <Card data={value} featured={true} key={value._id}></Card>)
            }
        </div>
      </div>
    </div>
  );
};

export default Featured;
