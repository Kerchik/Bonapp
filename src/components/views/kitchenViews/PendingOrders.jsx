import React from 'react'
import styled from 'styled-components'
import Button from '../../common/Button'
import FoodItem from '../../common/FoodItem'

const PendingOrdersList = styled.div`

max-width: 1000px;
width: 100%;
margin: 0 auto;
`
const PendingOrdersWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
`

const H4 = styled.h4`
font-weight: 500;
color: #999999l
`

const PendingOrders = ({orderItems, finishOrderCallback}) => {
    return (
        <PendingOrdersList>
            <h3>Pending orders</h3>
            {orderItems.length ?
                <PendingOrdersWrapper>
                    {orderItems.map((item) => (
                        <FoodItem
                            key={item.id}
                            name={item.name}
                            description={item.description}
                        >
                            <Button 
                                text='Finish'
                                buttonType='primary'
                                onClickFunction={() => {finishOrderCallback(item.id, item.menuItemId)}}
                            />
                        </FoodItem>
                    ))}
                </PendingOrdersWrapper>
            : <H4>No items found</H4>
            }
        </PendingOrdersList>
    )
}

export default PendingOrders