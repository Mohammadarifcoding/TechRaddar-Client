import React, { useEffect, useState } from 'react';
import UseAxious from './UseAxious';
import {useQuery} from '@tanstack/react-query'
const UseFeatured = () => {
    const AxiousPublic = UseAxious()

    

    // AxiousFunction

    const GetFeautred = async()=>{
        const res = await AxiousPublic.get('/featured')
        return res.data
    }


    const {data: dataValue , refetch ,isLoading}= useQuery({ queryKey: ['Featured'], queryFn: GetFeautred })



    return [dataValue,refetch,isLoading]
};

export default UseFeatured;