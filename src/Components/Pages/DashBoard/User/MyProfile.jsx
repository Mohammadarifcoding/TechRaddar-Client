import UseAuth from "../../../Hooks/UseAuth";
import CountUp from "react-countup";
import { MdDownloadDone } from "react-icons/md";
import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";
import UseAxious from "../../../Hooks/UseAxious";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { FaQuestion, FaStar } from "react-icons/fa";
import { useState } from "react";
import CheckOutForm from "./CheckOutForm/CheckOutForm";
import UserPremiumUser from "../../../Hooks/UserPremiumUser";
import { GoDotFill, GoVerified } from "react-icons/go";
import GiveAccess from "../../../Hooks/GiveAccess";

const stripPromise = loadStripe(
  "pk_test_51OEkzgLa09z8fqkr4WvYcZCztbeiCHAUoNw3rBeZrb9L5vwvwqxmhC30zBRiAdbbLL6eqbDFz7bp5DEX4hEdA5oP00lMBN79S0"
);

const MyProfile = () => {
  const { user } = UseAuth();
  const [open, setOpen] = useState(false);
  const [query, setquery] = useState(false);
  const [premium, againcheck] = UserPremiumUser();
  const [access,accessRefetcb] = GiveAccess()
  console.log(premium);

  const handleOpen = () => setOpen(!open);
  const AxiousPublic = UseAxious();

  const getStats = async () => {
    const res = await AxiousPublic.get(`/myProfile/${user?.email}`);
   againcheck()
    return res.data;
  };

  const {
    data: myprofile = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["myprofilestats", user?.email,againcheck],
    queryFn: getStats,
  });

  const handleQuery = () => {
    setquery(!query);
  };
  const handlePayment = () => {
    setquery(false);
    setOpen(true);
  };
  return (
    <div className="pt-10 relative pb-10 max-w-[1000px] mx-auto">
      {/* focus:border focus:border-[#00ADB5] focus:outline focus:outline-[#00ADB5] outline outline-[#00ADB5] */}
      <div className="bg-[#EEEEEE] relative mb-10 mt-20 rounded-full mx-auto w-[200px] border-[2px] border-[#00ADB5]">
        <img src={user?.photoURL} className="w-full rounded-full" alt="" />
        {premium && (
          <div className="absolute group  flex items-center flex-col  rounded-full hover:-right-14 hover:bottom-8 -right-[5px] bottom-8">
           <div className="text-[#EEEEEE] px-2 group-hover:block hidden py-1 rounded-lg mb-1 bg-black/90 ">
            <p className="flex  items-center"><GoDotFill className="text-green-600 text-xl" /> Status Verified</p>
           </div>
            <img
              className=" w-[40px] rounded-full "
              src="/images/badge.png"
              alt=""
            />

          </div>
        )}
      </div>
      {!premium && (
        <div className="absolute top-0 mt-10 lg:right-20 right-10 flex items-center">
          <div
            onClick={handleQuery}
            className="bg-black cursor-pointer text-white p-3 rounded-full flex items-center"
          >
            <FaQuestion className="text-[#00ADB5]"></FaQuestion>
          </div>
          <button
            onClick={handleOpen}
            className="btn text-[#EEEEEE] bg-[#00ADB5] hover:bg-[#0f848a] border-0 outline-none ml-3"
          >
            Be Pro User <FaStar className="text-yellow-800" />
          </button>
        </div>
      )}

      <div className="max-w-[700px] md:p-0 px-10 mx-auto flex justify-start gap-10 md:flex-row flex-col">
        <div className="flex flex-col flex-1">
          <label className="text-2xl text-[#EEEEEE]">Your Name</label>
          <input
            type="text"
            readOnly
            value={user?.displayName || "Unknown"}
            className="input py-2 mt-3 text-xl "
          />
        </div>
        <div className="flex flex-col flex-1">
          <label className="text-2xl text-[#EEEEEE]">Your Email</label>
          <input
            type="text"
            readOnly
            value={user?.email || "Unknown"}
            className="input py-2 mt-3 text-xl "
          />
        </div>
      </div>
      <div className="max-w-[700px] md:p-0 mt-12 px-10 mx-auto flex justify-start gap-10 md:flex-row flex-col">
        <div className="flex border-[2px] rounded-2xl border-[#00ADB5] flex-col flex-1">
          <div className="stat max-h-[300px] min-h-[140px] bg-[#EEEEEE] rounded-xl">
            <div className="stat-figure text-primary">
              <img className="w-[70px]" src="/images/product.png" alt="" />
            </div>
            <div className="stat-title text-xl text-[#222831] font-semibold">
              Total Products
            </div>
            <div className="stat-value text-[#393E46] ">
              <CountUp
                end={myprofile?.products > 0 ? myprofile?.products : 0}
              />
            </div>
          </div>
        </div>
        <div className="flex border-[2px] rounded-2xl border-[#00ADB5] flex-col flex-1">
          <div className="stat bg-[#EEEEEE] flex rounded-xl max-h-[300px] gap-10 min-h-[140px]">
            <div className=" flex flex-col gap-6 ">
              <div className="stat-title text-xl text-[#222831] font-semibold">
                Total Votes
              </div>
              <div className="flex justify-between gap-20 w-full">
                <div className="stat-value  text-[#00ADB5] flex gap-2">
                  <CountUp
                    end={myprofile?.upvotes > 0 ? myprofile?.upvotes : 0}
                  />{" "}
                  <BiSolidUpvote></BiSolidUpvote>
                </div>
                <div className="stat-value  text-red-500 flex gap-2">
                  <CountUp
                    end={myprofile?.downvotes > 0 ? myprofile?.downvotes : 0}
                  />{" "}
                  <BiSolidDownvote />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* payment  */}
      <Dialog open={open} handler={handleOpen}>
        <h2 className="text-center font-bold text-2xl my-6 text-black ">
          One Payment , LifeTime Access
        </h2>
        <Elements stripe={stripPromise}>
          <CheckOutForm accessRefetcb={accessRefetcb} againcheck={againcheck} setOpen={setOpen}></CheckOutForm>
        </Elements>
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
      {/* Query section */}
      <Dialog open={query} size="sm" handler={handleQuery}>
        <DialogBody>
          <div className=" px-4 mb-8 lg:mb-0">
            <div className="max-w-sm lg:max-w-none mx-auto pt-10 px-10 pb-8 bg-gray-900 rounded-3xl">
              <div className="text-center mb-6">
                <h5 className="text-2xl font-semibold text-white mb-3">
                  Pro User
                </h5>
                <span className="block text-5xl font-bold text-white mb-3">
                  $50
                </span>
                <span className="block text-gray-300 font-medium mb-6">
                  One Payment , Life Time
                </span>
              </div>
              <ul>
                <li className="flex mb-4 items-center">
                  <MdDownloadDone className="text-lg text-[#00ADB5]" />
                  <span className="ml-2 text-white">Unlimited Upload</span>
                </li>
                <li className="flex mb-4 items-center">
                  <MdDownloadDone className="text-lg text-[#00ADB5]" />
                  <span className="ml-2 text-white">Advanced Statistic</span>
                </li>
                <li className="flex mb-4 items-center">
                  <MdDownloadDone className="text-lg text-[#00ADB5]" />
                  <span className="ml-2 text-white">Profile Badge</span>
                </li>
                <li className="flex mb-4 items-center">
                  <MdDownloadDone className="text-lg text-[#00ADB5]" />
                  <span className="ml-2 text-white">No Due In Upload</span>
                </li>
                <li className="flex items-center">
                  <MdDownloadDone className="text-lg text-[#00ADB5]" />
                  <span className="ml-2 text-white">Directory mentoring</span>
                </li>
              </ul>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleQuery}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handlePayment}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default MyProfile;
