import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { MdAddModerator } from 'react-icons/md';
import { RiAdminLine } from "react-icons/ri";
import UseAxious from '../../../../Hooks/UseAxious';
import UseCheckAdmin from './../../../../Hooks/UseCheckAdmin';
import UseCheckModerator from './../../../../Hooks/UseCheckModerator';

const ManageUsers = () => {
    const AxiousPublic = UseAxious()
    const [f,checking] = UseCheckAdmin()
    const [fd,checkingModertor] = UseCheckModerator()
    const {data:users = [], refetch} = useQuery({
        queryKey:['usersData'],
        queryFn:async()=>{
            const res = await AxiousPublic.get('/users')
            return res.data
        }
    })
    const handleMakeAdmin = (email)=>{
        AxiousPublic.put(`/makeAdmin/${email}`)
        .then(res =>{
            refetch()
            console.log(res.data)
        })
    }
    const handleMakeModerator = (email)=>{
        AxiousPublic.put(`/makeModerator/${email}`)
        .then(res =>{
            refetch()
            checking()
            checkingModertor()
            console.log(res.data)
        })
    }

    const handleDeleteUser = (email)=>{
        AxiousPublic.delete(`/deleteUser/${email}`)
        .then(res =>{
            console.log(res.data)
            refetch()
            checking()
            checkingModertor()
        })
    }


    return (
        <div className='bg-[#222831] min-h-[calc(100vh-69px)] pt-10 xl:px-10 p-4 pb-10'>
        <h2 className="text-center text-[#EEEEEE] text-4xl font-bold">User Management</h2>
    <div className="overflow-x-auto mt-32">
          <table className="min-w-full border  border-[#00ADB5] rounded-xl">
            <thead className="bg-[#258f95] text-white">
              <tr>
                <th className="px-6 py-3 text-center"> Name</th>
                <th className="px-6 py-3 text-center"> Email</th>
                <th className="px-6 py-3 text-center">Role</th>
                <th className="px-6 py-3 text-center">Make Admin</th>
                <th className="px-6 py-3 text-center">Make Moderator</th>
                <th className="px-6 py-3 text-center">Delete User</th>
              </tr>
            </thead>
            <tbody className="text-white rounded-xl">
                {users?.map(user =>  <tr key={user?._id}>
                <td className="border-t px-6 py-4 text-center ">{user?.name}</td>
                <td className="border-t px-6 py-4 text-center">{user?.email}</td>
                <td className="border-t px-6 py-4 text-center">{user?.role}</td>
                <td className="border-t px-6 py-4 text-center ">
                 {
                    user?.role == 'Admin' ? <button  disabled className=" px-3 disabled:bg-gray-800 py-2 gap-2 rounded-lg text-[#EEEEEE]   bg-[#258f95] hover:bg-[#0f848a] border-0 outline-none">
                    <h2 className='flex items-center gap-3'>Admin <RiAdminLine /></h2> 
                   </button> : <button onClick={()=>{handleMakeAdmin(user?.email)}} className=" px-3 disabled:bg-gray-800 py-2 gap-2 rounded-lg text-[#EEEEEE]   bg-[#258f95] hover:bg-[#0f848a] border-0 outline-none">
                   <h2 className='flex items-center gap-3'>Admin <RiAdminLine /></h2> 
                  </button>
                 }
                  
                </td>
                <td className="border-t px-6 py-4 text-center ">
                    {
                        user?.role == 'Moderator' ?  <button  disabled className=" px-3  disabled:bg-gray-800 py-2 gap-2 rounded-lg text-[#EEEEEE]   bg-[#258f95] hover:bg-[#0f848a] border-0 outline-none">
                        <h2 className='flex items-center gap-3'>Moderator <MdAddModerator /></h2>
                       </button> :  <button onClick={()=>{handleMakeModerator(user?.email)}} className=" px-3  disabled:bg-gray-800 py-2 gap-2 rounded-lg text-[#EEEEEE]   bg-[#258f95] hover:bg-[#0f848a] border-0 outline-none">
                   <h2 className='flex items-center gap-3'>Moderator <MdAddModerator /></h2>
                  </button>
                    }
                 
                </td>
                <td className="px-6 py-4 border-t text-center">
                     <button onClick={()=>{handleDeleteUser(user?.email)}} className="text-red-600 btn btn-ghost  hover:bg-[#393E46] bg-black hover:text-red-800">
                      <FaTimes />
                    </button>
                    
                   
                  </td>
              </tr>)}
             
              {/* Add more rows with user details */}
            </tbody>
          </table>
        </div>
      </div>
      
    );
};

export default ManageUsers;