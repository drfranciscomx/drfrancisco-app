"use client"
import FaqComponent from "@/components/sections/FaqComponent";
import PageTransition from "@/components/transitions/PageTransition";

const index = () => {
  return (
    <>
   
    <div className='faq-wrapper h-full'>
      
        <PageTransition />
        <FaqComponent/>
    </div>
    </>
  )
}

export default index