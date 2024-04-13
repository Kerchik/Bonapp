import React from 'react'
import FoodItem from '../../common/FoodItem'
import styled from 'styled-components'
import Button from '../../common/Button'

const UserViewList = styled.div`
max-width: 1000px;
width: 100%;
margin: 0 auto;
`
const UserViewWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
`

const H4 = styled.h4`
font-weight: 500;
color: #999999l
`

const UserView = ({menuItems, orderMenuItemCallback}) => {
  return (
    <UserViewList>
      <h3>Menu</h3>
      {menuItems.length ?
        <UserViewWrapper>
          {menuItems.map((item) => (
            <FoodItem
              key={item.id}
              name={item.name}
              description={item.description}
            >
              <Button 
                text='Order'
                buttonType='primary'
                onClickFunction={() => orderMenuItemCallback(item.id)}
              />
            </FoodItem>
          ))}
        </UserViewWrapper>
        : <H4>No items found</H4>
      }
    </UserViewList>
  )
}

export default UserView
