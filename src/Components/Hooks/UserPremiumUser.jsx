import React from 'react';
import UseAuth from './UseAuth';
import UseAxious from './UseAxious';
import { useQuery } from '@tanstack/react-query';

const UserPremiumUser = () => {
   const {user} = UseAuth()
   const Axious = UseAxious()

   const {data:value = false , refetch} = useQuery({
    queryKey:[`userverifyy`,user?.email],
    queryFn:async ()=>{
        const res = await Axious.get(`/checkUser/${user?.email}`)
        return res.data
    }
   })
   return [value.value, refetch]
};

export default UserPremiumUser;