"use client"
import FaqComponent from "@/components/sections/FaqComponent";
import PageTransition from "@/components/transitions/PageTransition";
import { ToastContainer } from "react-toastify";

const index = () => {
  return (
    <>
   
    <div className='faq-wrapper h-full'>
      
        <PageTransition />
        <FaqComponent/>
        <ToastContainer />
        
    </div>
    </>
  )
}

export default index