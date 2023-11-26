import { useQuery } from '@tanstack/react-query';

import UseAxious from './UseAxious';


const UseTrending = () => {
    const AxiousPublic = UseAxious()
    const getTrending = async()=>{
        const res = await AxiousPublic('/trending')
        return res.data
    }
    const {data:treding = [],refetch } = useQuery({
        queryKey:['trending'],
        queryFn:getTrending
    })
    return [treding,refetch]
};

export default UseTrending;