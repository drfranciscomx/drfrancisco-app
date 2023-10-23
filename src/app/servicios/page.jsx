import React from 'react'
import ListProducts from '@/components/products/ListProducts'
import MainServicesComponent from '@/components/services/MainServicesComponent'
import PageLoader from 'next/dist/client/page-loader'
import PageTransition from '@/components/transitions/PageTransition'




const ServiciosPage =  ({ searchParams }) => {

  return (
    
        <>    
              <PageTransition/>
              <MainServicesComponent />
              
              <ListProducts searchParams={searchParams} />
              
        </>
     
      
  )

}

export default ServiciosPage
