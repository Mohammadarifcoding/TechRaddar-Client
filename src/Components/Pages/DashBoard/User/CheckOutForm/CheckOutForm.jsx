import React, { useEffect, useState } from 'react';
import UseAuth from '../../../../Hooks/UseAuth';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import UseAxious from '../../../../Hooks/UseAxious';

const CheckOutForm = ({againcheck,setOpen,accessRefetcb}) => {
    const [error,setError] = useState('')
  const {user} = UseAuth()
  const [clientSecret, setClientSecret] = useState('')
  const [transectionId, settransectionId] = useState('')
  const strip = useStripe()
  const Elements = useElements()
  const axiousS = UseAxious()
  const [payemntLoading,setPaymentLoading] = useState(false)
  const totalPayment = 50

  useEffect(()=>{

      axiousS.post('/create-payment-intent',{totalPayment})
      .then(res => {console.log(res.data)
        setClientSecret(res.data.clientSecret)
      })
    
       
  },[axiousS])
    const handleSubmit = async(e)=>{
     e.preventDefault()
     
     if(!strip || !Elements ){
        
      return
     }
     const card = Elements.getElement(CardElement)
     if(card == null){
        
      return
     }
     const {error , paymentMethod} = await strip.createPaymentMethod({
      type:'card',
      card
     })
     if(error){
      console.log('Payment Error',error)

      setError(error.message)
     }
     else{
      console.log('Payment Method',paymentMethod)
      setError('')
     }
     const {paymentIntent,error:confromPaymentError} = await strip.confirmCardPayment(clientSecret,{
      payment_method:{
        card : card,
        billing_details:{
          email:user?.email || 'nabirasek@gmail.com'
        }
      }
     })
     if(confromPaymentError){
      setError('confirm Erro')
      
     }
     else{
      console.log('payment intent',paymentIntent)
      if(paymentIntent.status === 'succeeded'){
        console.log('transaction id',paymentIntent.id)
        settransectionId(paymentIntent.id)
        const payements = {
          email : user?.email,
          price: totalPayment,
          date: new Date(),
          transectionID : paymentIntent.id,
          status :'pending'
        }
        setPaymentLoading(true)
         axiousS.post('/payments',payements)
         .then(res =>{
            setPaymentLoading(false)
            console.log(res.data)
            againcheck()
            accessRefetcb()
            
            setOpen(false)
         })

        
        
      }
     }
    }
  console.log(strip)
  console.log(clientSecret)

  if(payemntLoading){
    return <>
  <div className="dot-spinner">
  <div className="dot-spinner__dot" />
  <div className="dot-spinner__dot" />
  <div className="dot-spinner__dot" />
  <div className="dot-spinner__dot" />
  <div className="dot-spinner__dot" />
  <div className="dot-spinner__dot" />
  <div className="dot-spinner__dot" />
  <div className="dot-spinner__dot" />
</div>

    </>
  }
    return (
        <form className='p-10' onSubmit={handleSubmit}>
<div className="payment-card-element">
        <CardElement
          id="card-element"
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>
     <button  className="btn mt-10 text-white  bg-black" type="submit" disabled={!strip || !clientSecret}>
  Pay
</button>
{transectionId && <p>Success</p>}
<p className="text-red-600 mt-4">{error}</p>

  </form>
    );
};

export default CheckOutForm;