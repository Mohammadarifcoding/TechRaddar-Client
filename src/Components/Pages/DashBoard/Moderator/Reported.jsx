import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { BiDetail } from "react-icons/bi";
import UseAxious from '../../../Hooks/UseAxious';
import Swal from 'sweetalert2';
import { MdDeleteForever } from "react-icons/md";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { MdReportOff } from "react-icons/md";
import { MdAutoAwesomeMosaic } from "react-icons/md";
const Reported = () => {
    const AxiouPublic = UseAxious()
    const nav = useNavigate()
    const {data:reporteProduct = [],refetch:refetchReport} = useQuery({
      queryKey:['reported'],
      queryFn:async()=>{
        const res = await AxiouPublic.get('/reportedProducts')
        return res.data
      }
    })

    const handleDelete = (productId)=>{
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

             AxiouPublic.delete(`/deleteReported/${productId}`)
             .then(res => {
                console.log(res.data)
                refetchReport()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Product has been deleted.",
                    icon: "success"
                  });
             })
             
            }
          });
    }
    const handleIgnore = (productId)=>{
      AxiouPublic.delete(`/ignoreReport/${productId}`)
      .then(res => {
        refetchReport()
      })
    }
    const handleView = (productId)=>{
      nav(`/productDetails/${productId}`)
    }
    return (
        <div className='bg-[#222831] min-h-[calc(100vh-69px)] pt-10 xl:px-10 p-4 pb-10'>
        <h2 className="text-center text-[#EEEEEE] text-4xl font-bold">Reported Products</h2>
      
        {reporteProduct?.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-14">
            <p className="text-white text-lg mb-4">No reported products found</p>
            <MdReportOff className="w-48 h-48 mb-8 text-[#0f848a]" />

            <button  className="btn outline-none border-none hover:bg-[#1a6265] bg-[#0f848a] text-white px-4 py-2 rounded">
              Do Something Else <MdAutoAwesomeMosaic className='text-lg' />
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto mt-14">
            <table className="min-w-full border border-[#00ADB5] rounded-xl">
              <thead className="bg-[#279297] text-white">
                <tr>
                  <th className="px-6 py-3 text-center">Product Name</th>
                  <th className="px-6 py-3 text-center">View Details</th>
                  <th className="px-6 py-3 text-center">Delete</th>
                  <th className="px-6 py-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-white rounded-xl">
                {reporteProduct?.map((product, index) => (
                  <tr key={index}>
                    <td className="border px-6 py-4 text-center">{product?.Product_name}</td>
                    <td className="border px-6 py-4 text-center">
                      <button onClick={() => handleView(product?.productId)} className="btn hover:bg-[#1a6265] bg-[#0f848a] border-none outline-none text-white px-4 py-1 rounded">
                        Details <BiDetail />
                      </button>
                    </td>
                    <td className="border px-6 py-4 text-center">
                      <button onClick={() => handleDelete(product?.productId)} className="btn bg-red-600 hover:bg-red-800 border-none outline-none text-white px-4 py-1 rounded">
                        Delete <MdDeleteForever className='text-lg' />
                      </button>
                    </td>
                    <td className="border px-6 py-4 text-center">
                      <button onClick={() => handleIgnore(product?.productId)} className="btn bg-red-600 hover:bg-red-800 border-none outline-none  text-white px-4 py-1 rounded">
                        Ignore <IoMdRemoveCircleOutline className='text-lg' />
                      </button>
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

export default Reported;