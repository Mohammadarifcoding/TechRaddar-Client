import axios from 'axios';
import React, { useEffect } from 'react';
import UseAuth from './UseAuth';
import { useNavigate } from 'react-router-dom';

const axious = axios.create({
    baseURL:'https://techraddarserver.vercel.app'
})

const UseAxiousSecure = () => {


    const {OUT} = UseAuth()
    const nav = useNavigate()

    
   useEffect(()=>{
    axious.interceptors.request.use(function (config){
     const token = localStorage.getItem("token")
     config.headers.authorization = `Bearer ${token}`
     return config
    },function (error){
       return Promise.reject(error)
    })

 axious.interceptors.response.use(function (res){
        return res
    },async function (error){
        const resposne = error.response
        if(resposne.status == 401 || resposne.status == 403){
            console.log('Log out the user')
            // await OUT()
            // nav('/login')
        }
        return Promise.reject(error)
    })
   },[])
   
 
  return axious
    
};

export default UseAxiousSecure;