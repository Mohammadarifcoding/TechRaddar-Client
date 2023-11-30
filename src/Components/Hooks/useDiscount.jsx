import React from 'react';
import UseAxious from './UseAxious';
import { useQuery } from '@tanstack/react-query';

const useDiscount = () => {
   const AxiouPublic = UseAxious()

   const {} = useQuery({
    queryKey:['discountPrice']
   })
};

export default useDiscount;