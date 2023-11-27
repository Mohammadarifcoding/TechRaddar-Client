import React from "react";
import UseAuth from "../../Hooks/UseAuth";
import { NavLink, Outlet } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineWidgets } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";

const DashBoard = () => {
  const { user } = UseAuth();
  const DashboardLink = (
    <>
      <NavLink
        to={"myprofile"}
        className="text-lg font-semibold xl:text-xl 2xl:text-2xl flex gap-2"
      >
        <img className="w-[30px]" src="/images/user.png" alt="" />
        My Profile
      </NavLink>
      <NavLink
        to={"addproducts"}
        className="text-lg font-semibold xl:text-xl 2xl:text-2xl flex gap-2"
      >
        <IoIosAddCircleOutline className="text-3xl text-[#00ADB5]" />
        Add Products
      </NavLink>
      <NavLink
        to={"myproducts"}
        className="text-lg font-semibold xl:text-xl 2xl:text-2xl flex gap-2"
      >
        <MdOutlineWidgets className="text-3xl text-[#00ADB5]"></MdOutlineWidgets>
        My Products
      </NavLink>
    </>
  );

  return (
 <>
{/* Big screen dashboard */}
<div className="max-w-[1800px] mx-auto">
<div className="xl:flex p-3 gap-10 hidden  bg-[#222831]  min-h-screen">
      <div className="w-[25%] rounded-xl bg-[#EEEEEE] ">
        <div className="w-full h-full  rounded-xl">
          <div className="flex justify-center pt-5 pb-3 gap-3">
            <img
              className="lg:w-[50px] 2xl:w-[60px] bg-[#393E46] rounded-lg"
              src={user.photoURL}
              alt=""
            />
            <div>
              <h2 className="font-semibold xl:text-lg 2xl:text-xl">Hello 👋</h2>
              <p className="text-xl xl:text-2xl 2xl:text-[27px] font-bold">
                {user.displayName}
              </p>
            </div>
          </div>
          <div className="flex dasboard flex-col space-y-3 px-3 py-10">
            {DashboardLink}
          </div>
        </div>
      </div>
      <div className="w-[75%] rounded-xl bg-[#393E46]">
        <Outlet></Outlet>
      </div>
    </div>

{/* Mobile screen dashboard */}

    <div className="drawer xl:hidden bg-[#222831] min-h-screen">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar border-b-4 border-[#00ADB5] ">
      <div className="flex-none xl:hidden">
        <label htmlFor="my-drawer-3"  className="btn btn-square btn-ghost">
          <CgMenuGridO className="text-[#00ADB5] text-2xl"></CgMenuGridO>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2 text-[#00ADB5]">DashBoard</div>
    </div>
    <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    
    <ul className="menu p-4 dasboard space-y-3 w-80 min-h-full bg-[#EEEEEE]">
    <div className="flex justify-center pt-5 pb-3 gap-3">
            <img
              className="w-[50px] bg-[#393E46] rounded-lg"
              src={user.photoURL}
              alt=""
            />
            <div>
              <h2 className="font-semibold ">Hello 👋</h2>
              <p className="text-xl  font-bold">
                {user.displayName}
              </p>
            </div>
          </div>
     {DashboardLink}
    </ul>
  </div>
</div>
</div>
   
 </>
    






  );
};

export default DashBoard;
