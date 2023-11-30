import React from 'react';
import UseAuth from './UseAuth';
import UseAxious from './UseAxious';
import { useQuery } from '@tanstack/react-query';

const UseCheckModerator = () => {
    const {user} = UseAuth()
    const AxiosPublic = UseAxious()

    const {data:IsModerator = false , refetch,isLoading:loadingModerator} = useQuery({
        queryKey:['moderatorCheck',user?.email],
        queryFn:async()=>{
        const res = await AxiosPublic.get(`/moderatorCheck/${user?.email}`)
        console.log(res.data)
          return res.data
        }
    })
    return [IsModerator,refetch,loadingModerator]
};

export default UseCheckModerator;