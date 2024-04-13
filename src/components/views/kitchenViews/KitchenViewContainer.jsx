import React, {useState, useEffect} from "react"
import { 
    getOrderItems,
    payOrFinishOrder,
    ORDER_PENDING_STATUS,
    ORDER_FINISHED_STATUS,
} from '../../../requests/firebaseRequests'
import PendingOrders from './PendingOrders'
import FinishedOrders from './FinishedOrders'
import styled from 'styled-components'

const KitchenViewContainerWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
margin: 0 20px;
`

const KitchenViewContainer = () => {
    const [pendingOrders, setPendingOrders] = useState([])
    const [finishedOrders, setFinishedOrders] = useState([])

    const setOrderItemsHandler = async () => {
        await getOrderItems((data) => {
            filterOrdersByStatus(data)
        }, [ORDER_PENDING_STATUS, ORDER_FINISHED_STATUS])
    }

    const filterOrdersByStatus = (orders) => {
        const pending = [];
        const finished = [];

        orders.forEach(order => {
            order.status === ORDER_PENDING_STATUS ? pending.push(order) : finished.push(order)
        });

        setPendingOrders(pending);
        setFinishedOrders(finished);
    }

    const finishOrder = async (orderId, menuItemId) => {
        payOrFinishOrder(orderId, menuItemId, ORDER_FINISHED_STATUS)
    }
    
    useEffect(() => {
        setOrderItemsHandler()
    }, [])

    return (
        <KitchenViewContainerWrapper>
            <PendingOrders orderItems={pendingOrders} finishOrderCallback={finishOrder}/>
            <FinishedOrders orderItems={finishedOrders}/>
        </KitchenViewContainerWrapper>    
    )
}

export default KitchenViewContainer