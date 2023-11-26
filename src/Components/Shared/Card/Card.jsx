import React, { useEffect } from "react";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import moment from "moment";
import UseAuth from "./../../Hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHashtag } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import UseAxious from "../../Hooks/UseAxious";
import { useQuery } from "@tanstack/react-query";
import UseTrending from "../../Hooks/UseTrending";
import { IoIosHeart } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
const Card = ({ featured, data, trend }) => {
  const { user } = UseAuth();
  const [treding, refetchData] = UseTrending();
  const AxiousPublic = UseAxious();
  const {
    Product_name,
    Product_image,
    Description,
    Product_id,
    Date,
    Tags,
    External_Links,
  } = data;
  const nav = useNavigate();
  const lo = useLocation();

  const { data: UpvoteData = [], refetch: handleVoteRefetch } = useQuery({
    queryKey: [`UpvoteData${Product_id}`, user?.email],
    queryFn: async () => {
      const res = await AxiousPublic.get(`/upvoteData/${Product_id}`);
      return res.data;
    },
  });
  const { data: DownVoteData = [], refetch: handleDownVoteDataRefetch } =
    useQuery({
      queryKey: [`DownVoteData${Product_id}`, user?.email],
      queryFn: async () => {
        const res = await AxiousPublic.get(`/downVoteData/${Product_id}`);
        return res.data;
      },
    });

  useEffect(() => {
    AxiousPublic.put(`/updateUPVote/${Product_id}`, {
      vote: UpvoteData?.length,
    }).then((res) => {
      console.log(res.data);
    });
  }, [UpvoteData, DownVoteData]);

  const handleSend = () => {
    nav("/login", { state: { from: lo } });
    //  console.log(lo)
  };

  const handleVote = async () => {
    console.log("vote 1 done");
    AxiousPublic.post(`/upVote/${Product_id}/${user?.email}`).then((res) => {
      console.log(res.data);
      AxiousPublic.put(`/updateUPVote/${Product_id}`, {
        vote: UpvoteData?.length,
      }).then((res) => {
        console.log(res.data);
      });
      refetchData();
      handleVoteRefetch();
      handleDownVoteDataRefetch();
    });
  };

  const handleDownVote = async () => {
    console.log("downvote 1 done");
    AxiousPublic.post(`/downVote/${Product_id}/${user?.email}`).then((res) => {
      console.log(res.data);
      AxiousPublic.put(`/updateUPVote/${Product_id}`, {
        vote: UpvoteData?.length,
      }).then((res) => {
        console.log(res.data);
      });
      refetchData();
      handleVoteRefetch();
      handleDownVoteDataRefetch();
    });
  };
  return (
    <div className="relative shadow-2xl flex w-full max-w-[26rem] border-[#00ADB5] group border-[4px] mx-auto flex-col rounded-xl bg-white text-gray-700  overflow-hidden">
      <div className="relative mx-4 mt-4 rounded-xl overflow-hidden bg-[#222831] shadow-lg">
        <div className="group-hover:scale-125 transition-transform ease-in-out duration-300">
          <img
            src={Product_image}
            alt="ui/ux review check"
            className="w-full h-auto shadow-xl transition-all duration-300 transform-gpu hover:scale-125"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/60" />
        {featured && (
          <button className="absolute top-4 border border-[#00ADB5]  right-4 h-10 w-10 bg-[#222831] hover:bg-[#393E46] rounded-full flex items-center justify-center">
            <IoIosHeart className="text-[#00ADB5] text-xl"></IoIosHeart>
          </button>
        )}
        {trend && (
          <button className="absolute top-4 border border-[#00ADB5] right-4 h-10 w-10 bg-[#222831] hover:bg-[#393E46] rounded-full flex items-center justify-center">
            <FaArrowTrendUp className="text-[#00ADB5] text-xl"></FaArrowTrendUp>
          </button>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <Link to={`/productDetails/${Product_id}`}>
            <h5 className="cursor-pointer flex gap-3 hover:underline font-bold text-xl xl:text-2xl antialiased leading-snug tracking-normal text-[#222831]">
              {Product_name}
              <FaLink className="group-hover:underline"></FaLink>
            </h5>
          </Link>
          <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            5.0
          </p>
        </div>
        {/* <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
         {Description[0][0] + Description[0][1]}...
        </p> */}

        <div className="space-y-4 flex-grow   mt-4 mb-4">
          <div className="flex items-center">
            <SlCalender className="text-[#00ADB5]"></SlCalender>
            <p className="ml-2 text-sm text-[#393E46]  font-bold">
              {moment(Date).format("MMM D , YYYY")}
            </p>{" "}
            {/* Replace with actual date */}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-gray-600  flex items-center gap-2">
              <FaHashtag className="text-[#00ADB5]"></FaHashtag> Tags:
            </span>
            <div className="flex items-center gap-1">
              {Tags?.map((value) => (
                <span
                  key={value}
                  className="px-2 py-1.5 bg-gray-300 text-black text-xs rounded-md"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-start gap-3 items-center">
            <span className="text-sm text-gray-600 flex items-center gap-2 font-bold">
              <FaLink className="text-[#00ADB5]"></FaLink> External Link :
            </span>
            <a href={External_Links?.Amazon}>
              <img
                className="w-[70px] cursor-pointer  rounded-xl "
                src="/images/amazon.png"
                alt=""
              />
            </a>
            <a href={External_Links?.Ebay}>
              <img
                className="w-[70px] cursor-pointer  rounded-xl "
                src="/images/ebay.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="">
          {user ? ( // Checking if a user exists
            <div className="flex items-center gap-3 mt-2 group">
              {/* Upvote Button */}
              <div className="flex items-center gap-2">
                <span
                  onClick={user ? handleVote : handleSend}
                  data-tooltip-target="upvote-tooltip"
                  className="cursor-pointer rounded-full border border-[#00ADB5]/5 bg-[#00ADB5]/5 p-3 text-[#00ADB5] transition-colors hover:border-[#00ADB5]/10 hover:bg-[#00ADB5]/10 hover:!opacity-100 group-hover:opacity-70"
                >
                  <BiUpvote />
                </span>
                <span className="text-[#00ADB5] text-lg font-bold">
                  {UpvoteData?.length}
                </span>{" "}
                {/* Replace with actual upvote count */}
              </div>

              {/* Downvote Button */}
              <div className="flex items-center gap-2">
                <span
                  onClick={user ? handleDownVote : handleSend}
                  data-tooltip-target="downvote-tooltip"
                  className="cursor-pointer rounded-full border border-[#00ADB5]/5 bg-[#00ADB5]/5 p-3 text-red-500 transition-colors hover:border-[#00ADB5]/10 hover:bg-[#00ADB5]/10 hover:!opacity-100 group-hover:opacity-70"
                >
                  <BiDownvote />
                </span>
                <span className="text-red-500 text-lg font-bold">
                  {DownVoteData?.length}
                </span>{" "}
                {/* Replace with actual downvote count */}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center mt-8">
              <button
                onClick={handleSend}
                className="btn bg-[#00ADB5] text-white hover:bg-white hover:text-[#00ADB5] border-2 border-[#00ADB5] hover:border-2 hover:border-[#00ADB5]"
              >
                Login To Vote
              </button>
            </div>
          )}
        </div>
      </div>
    </div>

    // <div className="relative flex w-full max-w-[26rem] border-[4px] border-[#00ADB5] mx-auto flex-col rounded-xl bg-[EEEEEE] text-[#222831] shadow-lg overflow-hidden">
    // <div className="relative mx-4 mt-4 rounded-xl overflow-hidden bg-[#222831] shadow-lg">
    //   <img src={Product_image} alt="ui/ux review check" className="w-full h-auto" />
    //   <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/60" />
    //   {featured && (
    //     <button className="absolute top-4 right-4 h-8 w-8 bg-red-500/10 hover:bg-red-500/30 rounded-full flex items-center justify-center">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 24 24"
    //         fill="currentColor"
    //         className="w-6 h-6 text-red-500"
    //       >
    //         {/* SVG Path */}
    //       </svg>
    //     </button>
    //   )}
    // </div>
    // <div className="p-6 flex-grow">
    //   <div className="flex items-center justify-between mb-3">
    //     <h5 className="cursor-pointer flex gap-3 hover:underline font-bold text-xl xl:text-2xl antialiased leading-snug tracking-normal text-[#EEEEEE]">
    //       {Product_name}<FaLink className="group-hover:underline"></FaLink>
    //     </h5>
    //     <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 24 24"
    //         fill="currentColor"
    //         aria-hidden="true"
    //         className="-mt-0.5 h-5 w-5 text-yellow-700"
    //       >
    //         <path
    //           fillRule="evenodd"
    //           d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
    //           clipRule="evenodd"
    //         />
    //       </svg>
    //       <p className="text-[#EEEEEE]">5.0</p>

    //     </p>
    //   </div>
    //   {/* <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
    //    {Description[0][0] + Description[0][1]}...
    //   </p> */}

    //   <div className="flex space-y-4 flex-grow flex-col  mt-4 mb-4">
    //     <div className="flex items-center">
    //       <SlCalender className="text-[#00ADB5]"></SlCalender>
    //       <p className="ml-2 text-sm text-[#EEEEEE]  font-bold">
    //         {moment(Date).format("MMM D , YYYY")  }
    //       </p>{" "}
    //       {/* Replace with actual date */}
    //     </div>
    //     <div className="flex items-center gap-2">
    //       <span className="text-sm font-bold text-[#EEEEEE]  flex items-center gap-2"><FaHashtag className="text-[#00ADB5]"></FaHashtag> Tags:</span>
    //       <div className="flex items-center gap-1">
    //         {
    //           Tags?.map(value =>  <span key={value} className="px-2 py-1.5 bg-[#00ADB5] text-[#EEEEEE] text-xs rounded-md">
    //           {value}
    //         </span>)
    //         }

    //       </div>
    //     </div>
    //     <div className="flex justify-start gap-3 items-center">
    //         <span className="text-sm text-[#EEEEEE] flex items-center gap-2 font-bold"><FaLink className="text-[#00ADB5]"></FaLink> External Link :</span>
    //         <a href={External_Links?.Amazon}><img className="w-[70px] cursor-pointer  rounded-xl " src="/images/amazon.png" alt="" /></a>
    //         <a href={External_Links?.Ebay}><img className="w-[70px] cursor-pointer  rounded-xl " src="/images/ebay.png" alt="" /></a>
    //     </div>
    //   </div>

    //     <div className="flex items-center gap-3 mt-2 group">
    //       {/* Upvote Button */}
    //       <div className="flex items-center gap-2">
    //         <span
    //         onClick={user ? handleVote : handleSend}
    //           data-tooltip-target="upvote-tooltip"
    //           className="cursor-pointer rounded-full  border border-[#00ADB5]/5 bg-[#00ADB5]/5 p-3 text-[#00ADB5] transition-colors hover:border-[#00ADB5]/10 hover:bg-[#00ADB5]/10 hover:!opacity-100 group-hover:opacity-70"
    //         >
    //           <BiUpvote className="" />
    //         </span>
    //         <span className="text-[#00ADB5] text-lg font-bold">{UpvoteData?.length}</span>{" "}
    //         {/* Replace with actual upvote count */}
    //       </div>

    //       {/* Downvote Button */}
    //       <div className="flex items-center gap-2">
    //         <span
    //         onClick={user ? handleDownVote : handleSend}
    //           data-tooltip-target="downvote-tooltip"
    //           className="cursor-pointer rounded-full border border-[#00ADB5]/5 bg-[#00ADB5]/5 p-3 text-red-500 transition-colors hover:border-[#00ADB5]/10 hover:bg-[#00ADB5]/10 hover:!opacity-100 group-hover:opacity-70"
    //         >
    //           <BiDownvote />
    //         </span>
    //         <span className="text-[#8FB1AA] text-lg font-bold">{DownVoteData?.length}</span>{" "}
    //         {/* Replace with actual downvote count */}
    //       </div>
    //     </div>

    // </div>
    // {
    //   featured ||<div className="px-6 pb-5 pt-0">
    //   <button className="block w-full rounded-lg bg-[#00ADB5] py-3.5 px-7 text-sm font-bold uppercase text-white shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]" type="button">
    //     See Details
    //   </button>
    // </div>
    // }

    // </div>
  );
};

export default Card;
