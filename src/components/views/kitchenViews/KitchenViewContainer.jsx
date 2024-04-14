import React, {useState, useEffect} from 'react'
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
    const [loadingElement, setLoadingElement] = useState(null)

    const setOrderItemsHandler = async () => {
        await getOrderItems((data) => {
            filterOrdersByStatus(data)
        }, [ORDER_PENDING_STATUS, ORDER_FINISHED_STATUS])
    }

    const filterOrdersByStatus = (orders) => {
        const pending = []
        const finished = []

        orders.forEach(order => {
            order.status === ORDER_PENDING_STATUS ? pending.push(order) : finished.push(order)
        })

        setPendingOrders(pending)
        setFinishedOrders(finished)
    }

    const finishOrder = async (orderId, menuItemId) => {
        try {
            setLoadingElement(orderId)
            await payOrFinishOrder(orderId, menuItemId, ORDER_FINISHED_STATUS)
        } catch (e) {
            console.error(e)
        } finally {
            setLoadingElement(null)
        }
    }
    
    useEffect(() => {
        setOrderItemsHandler()
    }, [])

    return (
        <KitchenViewContainerWrapper>
            <PendingOrders orderItems={pendingOrders} finishOrderCallback={finishOrder} loadingElement={loadingElement}/>
            <FinishedOrders orderItems={finishedOrders}/>
        </KitchenViewContainerWrapper>    
    )
}

export default KitchenViewContainer