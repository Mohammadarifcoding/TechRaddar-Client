import { Button, Dialog, DialogFooter } from '@material-tailwind/react';
import React, { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import  moment  from 'moment';

const Coupons = ({data}) => {
    const [open, setOpen] = useState(false);
    const { couponCode, description, discount, expiryDate } = data;
  const handleOpen = () => {
    setOpen(!open);
  };
    return (
        <tr >
        <td className=" px-6 py-4 text-center">{couponCode}</td>
        <td className=" px-6 py-4 text-center">
          <button
            onClick={() => {
              handleOpen(!open);
            }}
            className="btn hover:bg-[#1a6265] bg-[#0f848a] border-none outline-none text-white px-4 py-1 rounded"
          >
            <FaInfoCircle />
            <Dialog open={open}  handler={handleOpen}>
            <div className='w-full h-[150px] relative'>
  <img className='w-full h-full' src="/images/coupon-Bg.jpg" alt="" />
  <div className='top-[50%] left-[40%] absolute transform [-translate-x-1/2]  [-translate-y-1/2] flex  justify-center'>
    <h2 className='text-[#EEEEEE] text-center text-3xl'>Offer!!</h2>
    <div className="flex items-center justify-center ">
      <img className="w-8 h-8 mx-1" src="/images/offer.png" alt="Offer Icon 1" />
      <img className="w-8 h-8 mx-1" src="/images/offer.png" alt="Offer Icon 2" />
      <img className="w-8 h-8 mx-1" src="/images/offer.png" alt="Offer Icon 3" />
    </div>
  </div>
</div>

<div>
    <h2 className='text-black text-2xl  text-center mt-3 font-bold'>Use <span className='text-[#0f848a]'>{couponCode}</span> Get <span className='text-red-600'>{discount}%</span></h2>
  
</div>
              

              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
              </DialogFooter>
            </Dialog>
          </button>
        </td>
        <td className=" px-6 py-4 text-center">
          <button className="bg-none border-none outline-none text-white px-4 py-1 rounded">
            {moment(expiryDate).format('ll')}

          </button>
        </td>
        <td className=" px-6 py-4 text-center">
          <button className="border-none outline-none  text-white px-4 py-1 rounded">
            {discount}%
          </button>
        </td>
      </tr>
    );
};

export default Coupons;