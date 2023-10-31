import ContainerComponent from '@/components/containers/ContainerComponent'
import OrderDetailsComponent from '@/components/orders/OrderDetailsComponent'
import React from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

const OrdersPage = async () => {
  const session = await getServerSession()
    if (!session) {
        redirect("/")
    }
    
  return (
    <ContainerComponent>
      <OrderDetailsComponent/>
    </ContainerComponent>
  )
}

export default OrdersPage