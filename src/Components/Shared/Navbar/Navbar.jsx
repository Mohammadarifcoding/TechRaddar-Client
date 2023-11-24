import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
  const {OUT ,user} = UseAuth()
  const [visible, setVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const handleSignOut = ()=>{
         OUT()
  }
  const link = (
    <>
      <NavLink
        className="text-lg hover:text-[#EEEEEE] rounded-lg hover:bg-[#00ADB5] px-3 py-2 font-semibold text-[#00ADB5]   ml-2 "
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className="text-lg hover:text-[#EEEEEE] rounded-lg hover:bg-[#00ADB5] px-3 py-2  font-semibold text-[#00ADB5]  ml-2 "
        to={"/products"}
      >
        Products
      </NavLink>
      {
        user? '':<NavLink
        className="text-lg hover:text-[#EEEEEE] rounded-lg hover:bg-[#00ADB5] px-3 py-2 font-semibold text-[#00ADB5]  ml-2 "
        to={"/login"}
      >
        Login
      </NavLink>
      }
      
    </>
  );
  return (
    // <div className=' text-[#00ADB5] bg-[#393E46]'>
    <div className=" text-[#00ADB5] bg-[#393E46] border-b-[6px] border-[#00ADB5]">
      <div className="navbar  mx-auto max-w-[1300px]">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              onClick={() => {
                setToggle(!toggle);
              }}
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              <CgMenuGridO className="text-[#00ADB5] text-2xl"></CgMenuGridO>
            </label>
            <ul
              tabIndex={0}
              className={`menu ${
                toggle ? "" : "hidden"
              } menu-sm navDatat space-y-3  lg:hidden absolute  z-[1] px-2 py-3 shadow border border-[#00ADB5] bg-[#393E46] rounded-box w-52`}
            >
              {link}
            </ul>
          </div>
          <a className=" text-xl font-bold"><span className="text-[#EEEEEE]">Tech</span>Raddar</a>
        </div>
        <div className="navbar-end gap-10">

        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1 navbarLink"> <NavLink
        className="text-lg   font-semibold text-[#00ADB5] hover:border-b-[3px] hover:border-[#EEEEEE] border-b-[3px] border-[#393E46]  ml-7 "
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className="text-lg   font-semibold text-[#00ADB5] hover:border-b-[3px] hover:border-[#EEEEEE] border-b-[3px] border-[#393E46] ml-7 "
        to={"/products"}
      >
        Products
      </NavLink>
      {
        user? '': <NavLink
        className="text-lg   font-semibold text-[#00ADB5] hover:border-b-[3px] hover:border-[#EEEEEE] border-b-[3px] border-[#393E46] ml-7 "
        to={"/login"}
      >
        Login
      </NavLink>
      }
     </ul>
        </div>
        <div className={`${user ? '':'hidden'}`}>
          <div className="dropdown dropdown-end">
            <label
              onClick={() => {
                setVisible(!visible);
              }}
              tabIndex={0}
              className="btn btn-ghost  btn-circle avatar"
            >
              <div className="w-10 rounded-full border-2 border-[#00ADB5]">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.photoURL}
                  className=" rounded-full"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className={`menu ${
                visible ? "" : "hidden"
              } bg-[#393E46] menu-sm absolute -left-[180px]  z-[1] p-2 shadow-xl border border-[#00ADB5] rounded-box w-52`}
            >
              <Link className=" py-2  px-3  font-semibold rounded-xl   ">
                {user?.displayName}
              </Link>
              <Link
                to={"/dashboard"}
                className=" py-2 text-[#00ADB5] hover:bg-[#00ADB5] px-3  font-semibold rounded-xl  hover:text-[#EEEEEE] "
              >
                Dashboard
              </Link>
              <Link
                onClick={handleSignOut}
                className=" py-2 text-[#00ADB5] hover:bg-[#00ADB5] px-3  font-semibold rounded-xl  hover:text-[#EEEEEE] "
              >
                Logout
              </Link>
            </ul>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
