import React, { useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import { NavLink, Outlet } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineQueryStats, MdOutlineWidgets } from "react-icons/md";
import { CgMenuGridO, CgProfile } from "react-icons/cg";
import { IoStatsChart } from "react-icons/io5";
import { RiCoupon3Fill } from "react-icons/ri";
import { HiTemplate } from "react-icons/hi";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { MdReportProblem } from "react-icons/md";
import {
  Button,
  Drawer,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { FaCheck, FaCross, FaHome, FaUser, FaUsers } from "react-icons/fa";
import UseCheckAdmin from "../../Hooks/UseCheckAdmin";
import UseCheckModerator from "../../Hooks/UseCheckModerator";
import { GoGitPullRequestClosed } from "react-icons/go";

const DashBoard = () => {
  const { user } = UseAuth();
  const [open, setOpen] = useState(false);
  const [isAdmin,refetchAdmin] = UseCheckAdmin()
  const [IsModerator,refetchModerator] = UseCheckModerator()
  console.log(isAdmin)

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const DashboardLink = (
    <>
      <NavLink
        to={"myprofile"}
        className="text-lg font-semibold xl:text-xl 2xl:text-xl flex gap-2"
      >
        <CgProfile  className="text-2xl text-[#00ADB5]"/>
        My Profile
      </NavLink>
      <NavLink
        to={"addproducts"}
        className="text-lg font-semibold xl:text-xl 2xl:text-xl flex gap-2"
      >
        <HiTemplate  className="text-2xl text-[#00ADB5]"/>
        Add Products
      </NavLink>
      <NavLink
        to={"myProducts"}
        className="text-lg font-semibold xl:text-xl 2xl:text-xl flex gap-2"
      >
        <MdOutlineWidgets className="text-2xl text-[#00ADB5]"></MdOutlineWidgets>
        My Products
      </NavLink>

      

     
    </>
  );

  const DashBoardAdmin = <>
   
    <NavLink
        to={"statistic"}
        className="text-lg font-semibold  2xl:text-xl flex gap-2"
      >
        <MdOutlineQueryStats className="text-xl text-[#00ADB5]" />
        Statistics Page
      </NavLink>
      <NavLink
        to={"manageUser"}
        className="text-lg font-semibold  2xl:text-xl flex gap-2"
      >
        <FaUsers className="text-2xl text-[#00ADB5]" />
        Manage Users
      </NavLink>
      <NavLink
        to={"manageCoupon"}
        className="text-lg font-semibold xl:text-xl 2xl:text-xl flex gap-2"
      >
        <RiCoupon3Fill className="text-2xl text-[#00ADB5]"/>
        Manage Coupons
      </NavLink>
      
 
  
  
  </>

  const Fronted = <>

   <NavLink to={'/'} className="text-lg font-semibold xl:text-xl 2xl:text-xl flex gap-2">
      <FaHome className="text-2xl text-[#00ADB5]"></FaHome>
        Home
      </NavLink>

      <NavLink to={'/products'} className="text-lg font-semibold xl:text-xl 2xl:text-xl flex gap-2">
      <BsMenuButtonWideFill className="text-2xl text-[#00ADB5]"/>
        Products
      </NavLink>
  
  </>
  
 const DashboardModerator = <>
      <NavLink
        to={"productReview"}
        className="text-lg font-semibold  2xl:text-xl flex gap-2"
      >
        <GoGitPullRequestClosed className="text-2xl text-[#00ADB5]"/>
        Product Review Queue
      </NavLink>
      <NavLink
        to={"reported"}
        className="text-lg font-semibold xl:text-xl 2xl:text-xl flex gap-2"
      >
        <MdReportProblem  className="text-2xl text-[#00ADB5]"/>
        Reported Contents
      </NavLink>
 
 </>
  return (
    <>
      <div className="max-w-[1800px] mx-auto">
        <div className="xl:flex   hidden  bg-[#222831]  min-h-screen">
          <div className="w-[25%]   text-[#EEEEEE] bg-[#393E46] ">
            <div className="w-full flex flex-col border-r-[8px] border-[#00ADB5] h-full  ">
              <div className="flex items-center justify-center p-8">
                <img
                  className="w-[60px] h-[60px] rounded-full"
                  src={user.photoURL}
                  alt="User Avatar"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">Hello 👋</h2>
                  <p className="text-xl font-bold">{user.displayName}</p>
                </div>
              </div>
              <div className="flex dasboard  items-start flex-col space-y-3 px-[10%] py-10">
              {isAdmin && DashBoardAdmin}
              {isAdmin && <div className="divider divider-accent">OR</div>}
              {
                (IsModerator || isAdmin) && DashboardModerator
              }
                {(IsModerator || isAdmin) && <div className="divider divider-accent">OR</div>}
                {DashboardLink}
                <div className="divider divider-accent">OR</div>
                {Fronted}
              </div>
            </div>
          </div>
          <div className="w-[75%]  bg-[#222831]">
            <Outlet></Outlet>
          </div>
        </div>

        <div className="xl:hidden">
          <div className="w-full navbar   border-b-4 bg-[#393E46] border-[#00ADB5] ">
            <div className="flex-none xl:hidden">
              <label onClick={openDrawer} className="btn btn-square btn-ghost">
                <CgMenuGridO className="text-[#00ADB5] text-2xl"></CgMenuGridO>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 text-[#00ADB5]">DashBoard</div>
          </div>
          <div className="bg-[#222831] ">
            <Outlet></Outlet>
          </div>
        </div>

        <React.Fragment>
          <Drawer
            open={open}
            onClose={closeDrawer}
            className="p-4 bg-[#EEEEEE]"
          >
            <div className=" flex items-center justify-between">
              <IconButton
                variant="text"
                color="blue-gray"
                onClick={closeDrawer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>
            <ul className="menu p-4  space-y-3  min-h-full ">
              <div className="flex justify-center pt-5 pb-3 gap-3">
                <img
                  className="w-[50px] bg-[#393E46] rounded-lg"
                  src={user.photoURL}
                  alt=""
                />
                <div>
                  <h2 className="font-semibold ">Hello 👋</h2>
                  <p className="text-xl  font-bold">{user.displayName}</p>
                </div>
              </div>
              <div className="dasboard flex flex-col space-y-2 items-start">
              {isAdmin && DashBoardAdmin}
              {isAdmin && <div className="divider divider-accent ">OR</div>}
              {
                (IsModerator || isAdmin) && DashboardModerator
              }
                {(IsModerator || isAdmin) && <div className="divider divider-accent">OR</div>}
                {DashboardLink}
                <div className="divider divider-accent">OR</div>
                {Fronted}
              
              </div>
              
            </ul>
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
};

export default DashBoard;
