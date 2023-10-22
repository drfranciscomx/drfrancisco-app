"use client"
import React from 'react'
import FormatedPrice from '@/helpers/FormatedPrice'
import { useSelector } from 'react-redux'
useSelector;
import { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai'
import { IoMdCart } from "react-icons/io";
import { useSession, signIn } from 'next-auth/react'
import { loadStripe } from '@stripe/stripe-js';
import { useDispatch } from 'react-redux';
import { resetCart, saveOrder } from '@/redux/shoppingSlice';


const PaymentForm = () => {
    
    const dispatch = useDispatch()
    const {data:session} = useSession();
    const isLoggedIn = Boolean(session?.user)
    const {productData, userInfo} = useSelector((state) => state.shopping);

    const [totalQty, settotalQty] = useState(0)
    const [totalAmnt, settotalAmnt] = useState(0)
    const [subtotalAmnt, setsubtotalAmnt] = useState(0)
    const [totalTax, settotalTax] = useState(0)
    const [totalPending, setTotalPending] = useState(0)
    const [shippingCost, setshippingCost] = useState(0)
    
    useEffect(() => {
        let amt = 0;
        let pndg = 0;
        let tax = 0;
        let sub = 0;
        //let taxrate = 16 / 100;
        let taxrate = 0;
        let ship = 0;
        let qty = 0;
        productData.map((item) => {
          sub += item.price;
          tax = sub * taxrate;
          amt = tax + sub + ship;
          qty += item.quantity;
          pndg += item.deposit - item.price;  

          return
        })
        
        setTotalPending(pndg)
        settotalQty(qty)
        setshippingCost(ship);
        setsubtotalAmnt(sub);
        settotalTax(tax);
        settotalAmnt(amt);
        
      }, [productData])

      //=============================== Stripe Payment starts here ============================

      const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
      const handleCheckout = async () => {
        const stripe = await stripePromise
        const response = await fetch(`${process.env.NEXTAUTH_URL}/api/checkout`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                items: productData,
                email: session?.user?.email,
            }),
        })
        const data = await response.json()

        if (response.ok) {
            await dispatch(saveOrder({order: productData, id: data.id}))
            stripe?.redirectToCheckout({ sessionId: data.id })
            dispatch(resetCart())
        }else {
            throw new Error("Fallo el intento de pago de stripe")
        }
      }
      
      //=============================== Stripe Payment starts here ============================
  return (
    <div className='w-full bg-white p-10 flex flex-col justify-between '> 
        <h2>Quote Totals</h2>
        <div className='border-b-[1px] border-b-slate-300 py-2'>
           <div className=' flex items-center justify-between'>
                <p className='uppercase font-medium'>Cantidades</p><p>{totalQty}</p>
           </div>
        </div>
        <div className='border-b-[1px] border-b-slate-300 py-2'>
           <div className=' flex items-center justify-between'>
            <p className='uppercase font-medium'>Desposito</p>
               
                <p><FormatedPrice amount={totalAmnt}/>
            </p>
           </div>
        </div>
       
        <div className='border-b-[1px] border-b-slate-300 py-2'>
           <div className='flex items-center justify-between'>
            <p className='uppercase font-medium'>Balance pendiente</p>
                <p><FormatedPrice amount={totalPending}/>
            </p>
           </div>
        </div>
        {
            isLoggedIn ? (
                <button onClick={handleCheckout} className='bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-yellow-700 cursor-pointer duration-500'>Haz tu deposito </button>
            ):( 
                <div>
                    {/** Login/Register */}
                    {

                        !session &&  (<div onClick={ () => signIn() } className=' w-1/4 md:w-2/3 sm:w-full bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-yellow-700 duration-500 cursor-pointer'>
                        <div className='flex flex-row justify-center items-center gap-x-3 '>
                            <AiOutlineUser className="text-ld" />
                            <p className='text-sm font-base'>Iniciar/Registro</p>
                        </div>
                    </div>)
                    }
                    <p className='text-sm mt-1 text-red-600 py-2'>Por favor inicie sesión para continuar</p>
                </div>
            )
        }
  </div>
  )
}

export default PaymentForm

