import React, { useState } from 'react';
import { TfiWrite } from "react-icons/tfi";
import UseAuth from '../../../Hooks/UseAuth';
import { FaStar } from 'react-icons/fa';
import { FaPen } from "react-icons/fa";
import UseAxiousSecure from './../../../Hooks/UseAxiousSecure';
import { useNavigate } from 'react-router-dom';
const ReviewGetting = ({iddata,refetch}) => {
    const {user} = UseAuth()
    const [userRating, setUserRating] = useState(0);
    const AxiouSecure = UseAxiousSecure()
    const nav = useNavigate()
    const handleRatingChange = (rating) => {
        setUserRating(rating);
      };
    
const handlePost = (e)=>{
    e.preventDefault()
     console.log('ff')
     const image = user.photoURL
     const email = user.email
     const name = e.target.name.value
     const description = e.target.descripton.value
     const productId = iddata
     const rating = userRating
     const ratingdata = {image,name,description,productId,rating,email}
     console.log(ratingdata)
     AxiouSecure.post('/review',ratingdata)
     .then(res => {
        console.log(res.data)
        refetch()
        nav('#seereview')
        e.target.reset()
    })
}

    return (
        <div id='write' className='mt-32 md:p-0 p-4 w-full'>
            <h2 className='text-3xl font-bold gap-3 flex'><TfiWrite /> Write You Review</h2>
            <hr className='mt-3 bg-[#00ADB5] text-[#00ADB5] h-[5px]' />
           
           <form onSubmit={handlePost} className='mt-10'>
            <div className='w-[70px] rounded-md'>
                <img className='rounded-full' src={user.photoURL} alt="" />
            </div>

            <div className='mt-7 flex flex-col'>
                <label className='text-xl font-semibold'>Your Name</label>
                <input name='name' value={user?.displayName} type="text" className='max-w-[400px] border-[3px] text-lg mt-2 input  border-[#00ADB5]' />
            </div>
            <div className='mt-4 flex flex-col'>
            <label className='text-xl font-semibold'>Your Feeback</label>
                <textarea  name='descripton'  className=' py-3  border-[3px]  max-w-[700px] text-lg mt-2 input min-h-[170px] border-[#00ADB5]' />
            </div>

            <div className='mt-7 flex items-center gap-3'>
            <label className='text-xl font-semibold'>Your Rating : </label>
            <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`text-${
                star <= userRating ? "orange" : "gray"
              }-500 cursor-pointer  text-2xl`}
              onClick={() => handleRatingChange(star)}
            />
          ))}
        </div>
            </div>
            <div className='mt-4 '>
              <button className='bg-[#00ADB5] px-4 text-[#EEEEEE] text-lg rounded-md py-2 flex gap-2 items-center' type='submit'>Post Review <FaPen /></button>
            </div>
           </form>
          
        </div>
    );
};

export default ReviewGetting;