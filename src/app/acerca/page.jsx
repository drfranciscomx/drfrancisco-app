"use client"
import Head from "next/head";
import React from 'react'
import "@/app/css/globals.css"
import WhyUsComponent from "@/components/ctas/WhyUsComponent";
import EducationComponent from "@/components/sections/EducationComponent";
import PageTransition from '@/components/transitions/PageTransition'

const acerca = () => {
  return (
    <>
    <PageTransition />
       
        <WhyUsComponent /> 
      <EducationComponent />
    </>
  )
}

export default acerca