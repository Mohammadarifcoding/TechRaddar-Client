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
  const [couponCode, setCouponCode] = useState('')
  const axiousS = UseAxious()
  const [payemntLoading,setPaymentLoading] = useState(false)
  const [totalPayment , setAmountPay] = useState(50)


  useEffect(()=>{

      axiousS.post('/create-payment-intent',{totalPayment})
      .then(res => {console.log(res.data)
        setClientSecret(res.data.clientSecret)
      })
    
       
  },[axiousS,totalPayment,setAmountPay])

  const handleCouponChange = (event) => {
    // Update the coupon code state when the input value changes
    setCouponCode(event.target.value);
    
    
  };
  const  handleDiscount = async()=>{
    console.log(couponCode)
    axiousS.get(`/verifyCoupon/${couponCode}`)
    .then(res => {
      const discountPrice = 50 - (res.data.discount * (50 / 100))
      setAmountPay(discountPrice)
    })
  }
  
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
      <form className='px-10 py-3' onSubmit={handleSubmit}>
    
      <h2 className='text-[#036b70] font-extrabold text-xl text-center pb-6'>
        Total You Need To Pay ${totalPayment}
      </h2>
      
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
      <div className="flex items-center mt-7 mb-4">
        <input
          type="text"
          onChange={handleCouponChange}
          placeholder="Enter coupon code"
          className="border border-gray-300 px-3 py-2 rounded-md mr-2"
          // Add necessary state/handlers for coupon input value
        />
        <button
          type="button"

          onClick={handleDiscount}
          className="btn text-white bg-[#00ADB5] hover:bg-[#1f6165] px-4 py-2 rounded-md"
           // Add onClick handler for coupon check
        >
          Check Coupon
        </button>
      </div>
      
      <button
        className="btn mt-2 text-white bg-black"
        type="submit"
        disabled={!strip || !clientSecret}
      >
        Pay
      </button>
      
      {transectionId && <p>Success</p>}
      <p className="text-red-600 mt-4">{error}</p>
    </form>
    
    );
};

export default CheckOutForm;