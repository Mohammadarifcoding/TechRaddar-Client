import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAuth from './UseAuth';
import UseAxious from './UseAxious';

const GiveAccess = () => {
    const {user} = UseAuth()
    const Axious = UseAxious()
 
    const {data:value = false , refetch} = useQuery({
     queryKey:[`userverifyyfg`,user?.email],
     queryFn:async ()=>{
         const res = await Axious.get(`/givingAcess/${user?.email}`)
         return res.data
     }
    })
    return [value.value, refetch]
};

export default GiveAccess;