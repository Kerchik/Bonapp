import React from 'react'
import styled from 'styled-components'
import Button from '../../common/Button'
import FoodItem from '../../common/FoodItem'

const WaiterViewList = styled.div`
max-width: 1000px;
width: 100%;
margin: 0 auto;
`
const WaiterViewWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
`

const H4 = styled.h4`
font-weight: 500;
color: #999999l
`

const WaiterView = ({orderItems, payForOrderCallback, loadingElement}) => {
    return (
        <WaiterViewList>
            <h3>Orders</h3>
            {orderItems.length ?
                <WaiterViewWrapper>
                    {orderItems.map((item) => (
                        <FoodItem
                            key={item.id}
                            name={item.name}
                            description={item.description}
                        >
                            <Button 
                                text='Pay'
                                buttonType='primary'
                                loading={loadingElement ? loadingElement === item.id  : false}
                                onClickFunction={() => {payForOrderCallback(item.id, item.menuItemId)}}
                            />
                        </FoodItem>
                    ))}
                </WaiterViewWrapper>
                : <H4>No items found</H4>
            }
        </WaiterViewList>
    )
}

export default WaiterView