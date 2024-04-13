import React, {useState, useEffect} from 'react'
import { 
    getOrderItems,
    payOrFinishOrder,
    ORDER_UNPAID_STATUS,
    ORDER_PENDING_STATUS
} from '../../../requests/firebaseRequests'
import WaiterView from './WaiterView'
import styled from 'styled-components'

const WaiterViewContainerWrapper = styled.div`
margin: 0 20px;
`

const WaiterViewContainer = () => {
    const [orders, setOrders] = useState([])
    
    const setOrderItemsHandler = async () => {
        await getOrderItems((data) => {
            setOrders(data)
        }, [ORDER_UNPAID_STATUS])
    }

    const payForOrderHandle = async (orderId, menuItemId) => {
        await payOrFinishOrder(orderId, menuItemId, ORDER_PENDING_STATUS)
    }

    useEffect(() => {
        setOrderItemsHandler()
    }, [])

    return (
        <WaiterViewContainerWrapper>
            <WaiterView orderItems={orders} payForOrderCallback={payForOrderHandle}/>
        </WaiterViewContainerWrapper>
    )
}

export default WaiterViewContainer