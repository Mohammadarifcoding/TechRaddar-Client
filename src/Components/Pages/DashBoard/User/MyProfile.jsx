
import UseAuth from '../../../Hooks/UseAuth';

import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";

const MyProfile = () => {
    const {user} = UseAuth()
    return (
        <div className='mt-10 '>
            <div className='bg-[#EEEEEE] mb-10 rounded-full mx-auto w-[200px] border-[6px] border-[#00ADB5]'>
                <img src={user?.photoURL} className='w-full rounded-full' alt="" />
            </div>

            <div className='max-w-[700px] md:p-0 px-10 mx-auto flex justify-start gap-10 md:flex-row flex-col'>
               <div className='flex flex-col flex-1'>
                  <label className='text-2xl text-[#EEEEEE]'>Your Name</label>
                  <input type="text" readOnly value={user?.displayName || 'Unknown'}  className='input py-2 mt-3 text-xl focus:border focus:border-[#00ADB5] focus:outline focus:outline-[#00ADB5] outline outline-[#00ADB5]'  />
                </div> 
                <div className='flex flex-col flex-1'>
                  <label className='text-2xl text-[#EEEEEE]'>Your Email</label>
                  <input type="text" readOnly value={user?.email || 'Unknown'}  className='input py-2 mt-3 text-xl focus:border focus:border-[#00ADB5] focus:outline focus:outline-[#00ADB5] outline outline-[#00ADB5]'  />
                </div> 
            </div>
            <div className='max-w-[700px] md:p-0 mt-12 px-10 mx-auto flex justify-start gap-10 md:flex-row flex-col'>
               <div className='flex border-[4px] rounded-2xl border-[#00ADB5] flex-col flex-1'>
               <div className="stat max-h-[300px] min-h-[140px] bg-[#EEEEEE] rounded-xl">
    <div className="stat-figure text-primary">
    <img className='w-[70px]' src="/images/product.png" alt="" />
    </div>
    <div className="stat-title text-xl text-[#222831] font-semibold">Total Products</div>
    <div className="stat-value text-[#393E46] ">25</div>
    
  </div>
                </div> 
                <div className='flex border-[4px] rounded-2xl border-[#00ADB5] flex-col flex-1'>
                <div className="stat bg-[#EEEEEE] flex rounded-xl max-h-[300px] gap-10 min-h-[140px]">
    <div className=" flex flex-col gap-6 ">
    <div className="stat-title text-xl text-[#222831] font-semibold">Total Votes</div>
    <div className='flex justify-between gap-20 w-full'>
    <div className="stat-value  text-[#00ADB5] flex gap-2">25 <BiSolidUpvote></BiSolidUpvote></div>
    <div className="stat-value  text-red-500 flex gap-2">5 <BiSolidDownvote /></div>
    </div>
    

    </div>
   
   
   
  </div>
                </div> 
            </div>

        </div>
    );
};

export default MyProfile;