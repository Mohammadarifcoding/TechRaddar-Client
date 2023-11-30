import { Button, Dialog, DialogFooter } from "@material-tailwind/react";
import React, { useState } from "react";
import { FaInfoCircle, FaPlus } from "react-icons/fa";
import Coupons from "./Coupons";
import { useQuery } from "@tanstack/react-query";
import UseAxious from "../../../../Hooks/UseAxious";
import UseCoupons from "../../../../Hooks/UseCoupons";

const ManageCoupon = () => {
  const [open, setOpen] = useState(true);
  const AxiousPublic = UseAxious()
  const [coupons, refetch, isloading] = UseCoupons()
  const handleOpen = () => {
    setOpen(!open);
  };
 

  const hello = [{value:'value'}, {value:'value-2'}]

  return (
    <div className="bg-[#222831] min-h-[calc(100vh-69px)] pt-10 xl:px-10 p-4 pb-10">
      <h2 className="text-center text-[#EEEEEE] text-4xl font-bold">
        Manage Coupon{" "}
      </h2>
      <div className="overflow-x-auto mt-24">
        <button className="btn bg-[#279297] text-white hover:bg-[#1b6468] mb-4">
          Add Coupon <FaPlus></FaPlus>
        </button>
        <table className="min-w-full border border-[#00ADB5] rounded-xl">
          <thead className="bg-[#279297] text-white">
            <tr>
              <th className="px-6 py-3 text-center">Coupon Code</th>
              <th className="px-6 py-3 text-center">View Details</th>
              <th className="px-6 py-3 text-center">Expiry Date</th>
              <th className="px-6 py-3 text-center">Discount Amount</th>
            </tr>
          </thead>
          <tbody className="text-white rounded-xl">
            {
                coupons?.map(item =>  <Coupons key={item.value} data={item}></Coupons>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCoupon;
