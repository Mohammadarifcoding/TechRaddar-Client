import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Textarea } from "@material-tailwind/react";
import React, { useState } from "react";
import { FaInfoCircle, FaPlus } from "react-icons/fa";
import Coupons from "./Coupons";
import { useQuery } from "@tanstack/react-query";
import UseAxious from "../../../../Hooks/UseAxious";
import UseCoupons from "../../../../Hooks/UseCoupons";
import  moment  from 'moment';

const ManageCoupon = () => {
 const [open,setOpen] = useState(false)
  const AxiousPublic = UseAxious()
  const [coupons, refetch, isloading] = UseCoupons()

 const handleOpen = ()=> {setOpen(!open)}


 const handleCouponAdd = (e)=>{
  e.preventDefault()
  const from = e.target;
  const couponCode = from.couponCode.value
  const description = from.couponDes.value
  const expiryDate =from.expireDate.value
  const discount = parseInt(from.amount.value)
  const cuponData = {couponCode , description, expiryDate, discount}
  AxiousPublic.post('/Coupons',cuponData)
  .then(res =>{
    console.log(res.data)
    refetch()
    handleOpen()
  })
 }

  return (
    <div className="bg-[#222831] min-h-[calc(100vh-69px)] pt-10 xl:px-10 p-4 pb-10">
     <Dialog open={open} handler={handleOpen}>
  <DialogHeader>Add Coupon</DialogHeader>
  <DialogBody>
    <form onSubmit={handleCouponAdd}>
      <div className="mb-4">
        <lable>
          Coupon Code
        </lable>
        <Input
        name="couponCode"
          type="text"
          placeholder="Enter coupon code"
          // Add necessary state handling for the coupon code input
        />
      </div>
      <div className="mb-4 ">
        <lable>
          Coupon Description
        </lable>
        <Textarea
        name="couponDes"
        className="border"
          placeholder="Enter coupon description "
          // Add necessary state handling for the coupon description input
        />
      </div>
      <div className="mb-4">
        <label>
          Expiration Date
        </label>
        <Input
        name="expireDate"
          type="datetime-local"
          // Add necessary state handling for the expiration date input
        />
      </div>
      <div className="mb-4">
        <label>
          Discount Amount
        </label>
        <Input
          type="number"
          name="amount"
          placeholder="Enter discount amount"
          // Add necessary state handling for the discount amount input
        />
      </div>
      <div className="gap-5 flex ">
      <Button type="submit" variant="filled" className="bg-[#00ADB5]">
      Add Coupon
    </Button>
    <Button variant="filled" color="red"  onClick={handleOpen} className="mr-1">
      Cancel
    </Button>
      </div>
     
    </form>
  </DialogBody>
  
</Dialog>

      <h2 className="text-center text-[#EEEEEE] text-4xl font-bold">
        Manage Coupon{" "}
      </h2>
      <div className="overflow-x-auto mt-24">
        <button onClick={handleOpen} className="btn bg-[#279297] text-white hover:bg-[#1b6468] mb-4">
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
