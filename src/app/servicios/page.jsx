import React from 'react'
import ListProducts from '@/components/products/ListProducts'
import { getProducts } from '@/helpers'
import { localproducts } from '@/data/localproductsdatta.'
import AnimatedText from '@/components/texts/AnimatedText'
import MainServicesComponent from '@/components/services/MainServicesComponent'
import PageLoader from 'next/dist/client/page-loader'
import PageTransition from '@/components/transitions/PageTransition'


const ServiciosPage = async ({ searchParams }) => {
  const productsData = await getProducts(searchParams)

  return (
    
        <>    
              <MainServicesComponent />
              <PageTransition/>
              <ListProducts data={localproducts} />
              
        </>
     
      
  )

}

export default ServiciosPage
