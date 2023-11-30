import React from 'react';
import UseAuth from './UseAuth';
import { useQuery } from '@tanstack/react-query';
import UseAxious from './UseAxious';

const UseCheckAdmin = () => {
    const {user} = UseAuth()
    const AxiosPublic = UseAxious()

    const {data:Isadmin = false , refetch,isLoading :loadingAdmin} = useQuery({
        queryKey:['adminCheck',user?.email],
        queryFn:async()=>{
        const res = await AxiosPublic.get(`/adminCheck/${user?.email}`)
        console.log(res.data)
          return res.data
        }
    })
    return [Isadmin,refetch,loadingAdmin]
};

export default UseCheckAdmin;