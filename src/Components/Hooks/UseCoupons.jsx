import React from 'react';
import UseAxious from './UseAxious';
import { useQuery } from '@tanstack/react-query';

const UseCoupons = () => {
    const AxiousPublic = UseAxious()
    const {data:coupon = [],refetch , isLoading} = useQuery({
        queryKey:['coupons'],
        queryFn : async()=>{
           const res = await AxiousPublic.get('/Coupons')
           return res.data
        }
      })
      return [coupon , refetch , isLoading]
};

export default UseCoupons;