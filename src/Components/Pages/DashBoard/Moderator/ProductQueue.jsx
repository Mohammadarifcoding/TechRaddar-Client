import React from 'react';
import { FaCheck, FaHeart, FaInfoCircle, FaRegHeart, FaTimes } from 'react-icons/fa';
import { IoHeartOutline } from 'react-icons/io5';
import { useQuery } from '@tanstack/react-query';
import UseAuth from './../../../Hooks/UseAuth';
import UseAxious from '../../../Hooks/UseAxious';
import { useNavigate } from 'react-router-dom';

const ProductQueue = () => {
  const {user} = UseAuth()
  const AxiousPublic = UseAxious()
  const nav = useNavigate()
  const {data:productQueue = [] , refetch} = useQuery({
    queryKey:['QueeProduct'],
    queryFn:async()=>{
        const res = await AxiousPublic.get('/productQuequ')
        return res.data
    }
  })

  const handleSeeDetails = (productId)=>{
   nav(`/productDetails/${productId}`)
  }

  const handleMakeFeatured = (productId)=>{
     AxiousPublic.put(`/makeFeature/${productId}`)
     .then(res =>{
      console.log(res.data)
      refetch()
     })
  }
  const handleRemoveFeatured = (productId)=>{
    AxiousPublic.put(`/RemoveFeature/${productId}`)
     .then(res =>{
      console.log(res.data)
      refetch()
     })
  }

  const handleAccepting = (productId)=>{
    AxiousPublic.put(`/acceptedProduct/${productId}`)
    .then(res =>{
      console.log(res.data)
      refetch()
    })
  }

  const handleReject = (productId)=>{
    AxiousPublic.put(`/RejectProduct/${productId}`)
    .then(res =>{
      console.log(res.data)
      refetch()
    })
  }
    return (
        <div className='bg-[#222831] min-h-[calc(100vh-69px)] pt-10 xl:px-10 p-4 pb-10'>
        <h2 className="text-center text-[#EEEEEE] text-4xl font-bold">Product Review Queue</h2>
        <div className="overflow-x-auto mt-20">
          <table className="min-w-full border border-[#00ADB5] rounded-lg">
            <thead className="bg-[#258f95] text-white">
              <tr>
                <th className="px-6 py-3 text-start">Product Name</th>
                <th className="px-6 py-3 text-center">Details</th>
                <th className="px-6 py-3 text-center">Featured</th>
                <th className="px-6 py-3 text-center">Status</th>
                <th className="px-6 py-3 text-center">Accept</th>
                <th className="px-6 py-3 text-center">Reject</th>
              </tr>
            </thead>
            <tbody className="text-[#222831]">
           {productQueue?.map(product =>  <tr key={product._id} className="border-t">
                  <td className="px-6 py-4   text-[#EEEEEE]">{product?.Product_name}</td>
                  <td className="px-6 py-4  text-center">
                    <button onClick={()=>{handleSeeDetails(product?.Product_id)}} className="text-[#00ADB5] btn btn-ghost hover:bg-[#393E46]">
                      <FaInfoCircle />
                    </button>
                  </td>
                  <td className="px-6 py-4  text-center">
                    {
                     product?.Featured ?   <button onClick={()=>{handleRemoveFeatured(product?.Product_id)}} className="text-[#00ADB5] btn btn-ghost hover:bg-[#393E46] ">
                    
                     <FaHeart className='text-2xl' />
                     </button> :   <button onClick={()=>{handleMakeFeatured(product?.Product_id)}}  className="text-[#00ADB5] btn btn-ghost hover:bg-[#393E46] ">
                    
                    <FaRegHeart className='text-2xl' />
                    </button>
                    }
                    
                  

                  </td>
                  <th className="px-6 py-3 text-center text-[#EEEEEE]">{product?.Status}</th>
                  <td className="px-6 py-4  text-center">
                    {
                      product.Status == 'Accepted' ? <button  disabled className="text-[#00ADB5]  disabled:text-white btn btn-ghost hover:bg-[#393E46] ">
                      <FaCheck />
                    </button> : <button onClick={()=>{handleAccepting(product?.Product_id)}} className="text-[#00ADB5]  disabled:text-white btn btn-ghost hover:bg-[#393E46] ">
                    <FaCheck />
                  </button>
                    }
                  
                  </td>
                  <td className="px-6 py-4  text-center">
                    {
                      product.Status == 'Rejected' ?  <button disabled className="text-red-600 btn disabled:text-red-600 hover:text-red-800">
                      <FaTimes />
                    </button>: <button onClick={()=>{handleReject(product?.Product_id)}} className="text-red-600 btn btn-ghost hover:bg-black hover:text-red-800">
                      <FaTimes />
                    </button>
                    }
                   
                  </td>
                </tr>)}
               
           
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ProductQueue;