import React from 'react'
import styled from 'styled-components'

const FoodItemWrapper = styled.div`
border: 1px solid black;
padding: 8px;
border-radius: 6px;
`

const FoodItem = ({ name, description, children }) => {
  return (
    <FoodItemWrapper>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      {children}
    </FoodItemWrapper>
  )
}

export default FoodItem
