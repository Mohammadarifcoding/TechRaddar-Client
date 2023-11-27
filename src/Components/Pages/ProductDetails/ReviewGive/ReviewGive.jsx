import React from "react";
import { CardBody, Rating, Typography, rating } from "@material-tailwind/react";
import UseAuth from "../../../Hooks/UseAuth";
import { Card, CardHeader, Avatar } from "@material-tailwind/react";
import { MdOutlineRateReview } from "react-icons/md";
import UseAxious from "../../../Hooks/UseAxious";
import { useQuery } from "@tanstack/react-query";
import ReviewGetting from "../ReviewGetting/ReviewGetting";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const ReviewGive = ({productId}) => {
  const { user } = UseAuth();
  const AxiousPublic = UseAxious()
  const getReviews = async()=>{
    const res = await AxiousPublic.get(`/review/${productId}`)
    return res.data
  }
  const {data:reviewsdata= [], isLoading , refetch} = useQuery({
    queryKey:[`productReview${productId}`],
    queryFn:getReviews
  })
  console.log(reviewsdata)
  const value = [...Array(3).keys()];
  return (
    <>
      {/* <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg> */}
      <div id="seereview" className="xl:p-0 p-4 group mt-20">
       
        <h2 className="mt-16 group-hover:underline mb-5 flex gap-3 items-center text-3xl font-bold">
          <MdOutlineRateReview />
          Users Feedback
        </h2>
        <hr  className="mt-3 bg-[#00ADB5] text-[#00ADB5] h-[5px]" />
        {
             reviewsdata.length > 0 ? <>{
              reviewsdata?.map(item =>  <Card key={item._id}  color="transparent" shadow={false} className="w-full mt-4 border-b-2 border-[#222831] max-w-full rounded-none">
             <CardHeader
               color="transparent"
               floated={false}
               shadow={false}
               className="mx-0 flex items-center  gap-4 pt-0 pb-8"
             >
               <Avatar
                 size="lg"
                 variant="circular"
                 src={item?.image}
                 alt="tania andrew"
               />
               <div className="flex w-full flex-col gap-0.5">
                 <div className="flex items-center gap-4">
                   <Typography variant="h5" color="blue-gray">
                     {item?.name}
                   </Typography>
                   <div className="5 flex items-center gap-0">
                     <Rating value={item?.rating} readonly></Rating>
                   </div>
                 </div>
                 <Typography color="blue-gray">27 Nov , 2023</Typography>
               </div>
             </CardHeader>
             <CardBody className="mb-6 p-0">
  <div className="flex items-center flex-col lg:flex-row mb-4 text-center lg:text-left">
    <FaQuoteLeft className="text-[#00ADB5] lg:text-3xl text-2xl mb-2 lg:mr-2 lg:mb-0" />
    <Typography className="text-[#393E46] text-base lg:text-lg font-medium italic">{item?.description}</Typography>
    <FaQuoteRight className="text-[#00ADB5] lg:text-3xl text-2xl mt-2 lg:ml-2 lg:mt-0" />
  </div>
</CardBody>
           </Card>)
             }
             <a href="#write">
            <button className="mt-6 btn-outline btn bg-[#00ADB5] text-xl rounded-md text-[#EEEEEE] px-4 py-2">
              Write Your Review
            </button>
          </a>
             </>   : <>
           <div className="my-5  ">
          <h2 className=" font-semibold text-3xl">No Reviews Yet</h2>
          <a href="#write">
            <button className="mt-6 btn-outline btn bg-[#00ADB5] text-xl rounded-md text-[#EEEEEE] px-4 py-2">
              Write Your Review
            </button>
          </a>
        </div>
           </>  
        }
        
      </div>
      <ReviewGetting refetch={refetch} iddata={productId}> </ReviewGetting>
    </>
  
  );
};

export default ReviewGive;
