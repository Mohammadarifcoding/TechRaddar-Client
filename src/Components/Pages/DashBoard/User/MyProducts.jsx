import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAuth from '../../../Hooks/UseAuth';
import UseAxious from '../../../Hooks/UseAxious';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { GrTechnology } from "react-icons/gr";
import UseMyProducts from '../../../Hooks/UseMyProducts';

const MyProducts = () => {
    const {user} = UseAuth()
   const AxiousPublic = UseAxious()
   const nav = useNavigate()
   const [productData,allProductdata,isLoading] = UseMyProducts()
   
    if(isLoading){
      return (<div className=" w-full min-h-screen  flex justify-center items-center ">
      <div className="loading-wave">
 <div className="loading-bar" />
 <div className="loading-bar" />
 <div className="loading-bar" />
 <div className="loading-bar" />
 </div>
 
 </div>)
    }

    const handleDelete = (id)=>{
      const productIdData = id.toString()
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(productIdData)
         AxiousPublic.delete(`/deleteProduct/${productIdData}`)
         .then(res => {
          console.log(res.data)
          allProductdata()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        })
          
        }
      });
      
    }
    const handleSEndUser = (productId)=>{
     nav(`/dashboard/updateProduct/${productId}`)
    }
    const handleAddPRodcutSEnd = ()=>{
      nav('/dashboard/addproducts')
    }
    
    return (
      <div className='bg-[#222831] min-h-[calc(100vh-69px)] pt-10 xl:px-10 p-4 pb-10'>
      <h2 className="text-center text-[#EEEEEE] text-4xl font-bold">Manage Your Products</h2>
    
      {productData?.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-20 text-[#EEEEEE]">
          <GrTechnology  className="w-20 h-20" />
          <p className="mt-4 text-xl">No products found</p>
          <button onClick={handleAddPRodcutSEnd} className="btn mt-6 bg-[#0f848a] hover:bg-[#1f6569] text-[#EEEEEE] border-0 outline-none py-2 px-6 rounded-lg">Create Product</button>
        </div>
      )}
    
      {productData?.length > 0 && (
        <div className="overflow-x-auto mt-10 border-[#00ADB5] xl:rounded-xl">
          <table className="min-w-full border rounded-xl">
            <thead className="bg-[#00ADB5] text-white">
              <tr>
                <th className="px-6 py-3 text-left">Product Name</th>
                <th className="px-6 py-3 text-left">Upvote</th>
                <th className="px-6 py-3 text-left">Downvote</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Action</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-white rounded-xl">
              {productData?.map(item => (
                <tr key={item._id}>
                  <td className="border-t px-6 py-4">{item?.Product_name}</td>
                  <td className="border-t px-6 py-4">{item?.totalUp.length}</td>
                  <td className="border-t px-6 py-4">{item?.totalDown.length}</td>
                  <td className="border-t px-6 py-4">{item?.Status}</td>
                  <td className="border-t px-6 py-4">
                    <button onClick={() => { handleSEndUser(item?.Product_id) }} className="btn text-[#EEEEEE] bg-[#00ADB5] hover:bg-[#0f848a] border-0 outline-none">Edit</button>
                  </td>
                  <td className="border-t px-6 py-4">
                    <button onClick={() => { handleDelete(item?.Product_id) }} className="btn hover:bg-red-700 border-red-500 bg-red-500 text-white border-2 py-1 px-3 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    

      
    );
};

export default MyProducts;