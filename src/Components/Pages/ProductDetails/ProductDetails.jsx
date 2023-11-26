import moment from "moment";
import React, { useEffect } from "react";
import { BiDownvote, BiLink, BiUpvote } from "react-icons/bi";
import { FaCalendar, FaLink, FaTags } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa6";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import UseAxious from "../../Hooks/UseAxious";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../Hooks/UseAuth";
import { IoWarning } from "react-icons/io5";
import  Swal  from 'sweetalert2';


const ProductDetails = () => {
  const data = useLoaderData();
  const { user } = UseAuth();
  const AxiousPublic = UseAxious();
  const {
    Product_name,
    Product_image,
    Tags,
    Owner_email,
    ownerName,
    Date,
    Status,
    Description,
    Up_Vote,
    External_Links,
    Product_id,
    Featured,
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
      
      handleVoteRefetch();
      handleDownVoteDataRefetch();
    });
  };


  const handleReport = ()=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#00ADB5",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, report it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Reported!",
            text: "The moderator will review your report.",
            icon: "success"
          });
        }
      });
  }

  return (
    <>
      <div className="my-10 max-w-[1300px] mx-auto">
        <div className="flex xl:flex-row  flex-col md:p-0 gap-4 xl:justify-between justify-center xl:items-start items-center p-4">
          <div className="max-w-[630px]  overflow-hidden rounded-xl group-hover:scale-125 transition-transform ease-in-out duration-300  flex justify-center ">
            <img
              className="rounded-xl  w-full  shadow-xl transition-all duration-300 transform-gpu hover:scale-125"
              src={Product_image}
              alt=""
            />
          </div>
          <div className="max-w-[630px]   group w-full flex-col flex xl:justify-start justify-center">
            <h2 className="md:text-4xl  flex justify-start text-[#222831]  group-hover:underline xl:text-start font-bold text-center sm:text-3xl text-2xl">
              {Product_name} <BiLink></BiLink>{" "}
            </h2>
            <div className="flex flex-col mt-3 space-y-4  font-semibold text-[#393E46] justify-start ">
              {Description.slice(0, 2).map((value) => (
                <div className="max-w-xl flex  text-start ">{value}</div>
              ))}
            </div>
            <div className="flex justify-start  mt-3 items-center gap-3">
              <h2 className="font-bold text-lg flex items-center gap-2">
                <FaLink className="text-[#00ADB5]"></FaLink> External Links :{" "}
              </h2>
              <a href={External_Links.Amazon}>
                <img className="w-[60px]" src={"/images/amazon.png"} alt="" />
              </a>
              <a href={External_Links.Ebay}>
                <img className="w-[60px]" src={"/images/ebay.png"} alt="" />
              </a>
            </div>
            <div className="mt-2">
              <h2 className="font-bold text-lg flex items-center gap-2">
                <FaCalendar className="text-[#00ADB5]"></FaCalendar> Posted Date
                : {moment(Date).format("MMM D , YYYY")}
              </h2>
            </div>
            <div className="mt-3">
              <h2 className="text-lg flex items-center gap-2 font-bold">
                {" "}
                <FaHashtag className="text-[#00ADB5]"></FaHashtag> Tags :{" "}
                {Tags?.map((value) => (
                  <span
                    key={value}
                    className="px-2 py-1.5 bg-gray-300 text-black text-xs rounded-md"
                  >
                    {value}
                  </span>
                ))}
              </h2>
            </div>
            <div className=" flex items-center mt-4">
          {user ? ( // Checking if a user exists
            <div className="flex items-center gap-6 mt-2 group">
              {/* Upvote Button */}
              <div className="flex items-center gap-3 ">
                <span
                  onClick={user ? handleVote : handleSend}
                  data-tooltip-target="upvote-tooltip"
                  className="cursor-pointer rounded-full border border-[#00ADB5]/5 bg-[#00ADB5]/5 p-3 text-[#00ADB5] transition-colors hover:border-[#00ADB5]/10 hover:bg-[#00ADB5]/10 hover:!opacity-100 group-hover:opacity-70"
                >
                  <BiUpvote />
                </span>
                <span className="text-[#00ADB5] text-lg font-bold">
                  {UpvoteData?.length} Vote
                </span>{" "}
                {/* Replace with actual upvote count */}
              </div>

              {/* Downvote Button */}
              <div className="flex items-center gap-3">
                <span
                  onClick={user ? handleDownVote : handleSend}
                  data-tooltip-target="downvote-tooltip"
                  className="cursor-pointer rounded-full border border-[#00ADB5]/5 bg-[#00ADB5]/5 p-3 text-red-500 transition-colors hover:border-[#00ADB5]/10 hover:bg-[#00ADB5]/10 hover:!opacity-100 group-hover:opacity-70"
                >
                  <BiDownvote />
                </span>
                <span className="text-red-500 text-lg font-bold">
                  {DownVoteData?.length} DownVote
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
          <button onClick={handleReport} className="flex items-center ml-8 btn border border-[#00ADB5]/5 bg-[#00ADB5]/5 p-3 text-red-500 transition-colors hover:border-[#00ADB5]/10 hover:bg-[#00ADB5]/10 hover:!opacity-100 group-hover:opacity-70">
            <span data-tooltip-target="downvote-tooltip"
                  className="cursor-pointer  rounded-full "> <IoWarning /></span>
            Report
        </button>
        </div>
        
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;