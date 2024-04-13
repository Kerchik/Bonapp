import React from "react"
import styled from 'styled-components'
import FoodItem from '../../common/FoodItem'

const FinishedOrdersList = styled.div`
max-width: 1000px;
width: 100%;
margin: 0 auto;
`
const FinishedOrdersWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
`

const H4 = styled.h4`
font-weight: 500;
color: #999999l
`

const FinishedOrders = ({orderItems}) => {
    return (
        <FinishedOrdersList>
            <h3>Finished orders</h3>
            {orderItems.length ?
                <FinishedOrdersWrapper>
                    {orderItems.map((item) => (
                        <FoodItem
                            key={item.id}
                            name={item.name}
                            description={item.description}
                        >
                        </FoodItem>
                    ))}
                </FinishedOrdersWrapper>
                : <H4>No items found</H4>
            }
        </FinishedOrdersList>
    )
}

export default FinishedOrders