import React from 'react'
import ListProducts from '@/components/products/ListProducts'
import MainServicesComponent from '@/components/services/MainServicesComponent'
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
