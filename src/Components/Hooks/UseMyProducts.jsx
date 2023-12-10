import { useQuery } from "@tanstack/react-query";
import UseAxious from "./UseAxious";
import UseAuth from "./UseAuth";


const UseMyProducts = () => {
    const AxiousPublic = UseAxious() 
    const {user} = UseAuth()


    const {data : productData = [] , refetch : allProductdata , isLoading} = useQuery({
        queryKey:['productMange',user?.email],
        queryFn : async ()=>{
          const res = await AxiousPublic.get(`/gettingOwnProduct/${user?.email}`)
          return res.data
        }
      })

      return [productData,allProductdata,isLoading]
};

export default UseMyProducts;