import ContainerComponent from '@/components/containers/ContainerComponent'
import OrderDetailsComponent from '@/components/orders/OrderDetailsComponent'
import React from 'react'

const OrdersPage = () => {
  return (
    <ContainerComponent>
      <OrderDetailsComponent/>
    </ContainerComponent>
  )
}

export default OrdersPage