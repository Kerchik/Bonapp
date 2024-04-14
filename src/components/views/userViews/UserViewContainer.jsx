import React, { useEffect, useState } from 'react'
import { getMenuItems, transformResponseToArray, orderFood } from '../../../requests/firebaseRequests'
import UserView from './UserView'
import styled from 'styled-components'

const UserViewContainerWrapper = styled.div`
margin: 0 20px;
`

const UserViewContainer = () => {
  const [menuItems, setMenuItems] = useState([])
  const [loadingElement, setLoadingElement] = useState(null)

  const setMenuItemsHandler = async () => {
    const unparsedMenuItems = await getMenuItems()
    setMenuItems(transformResponseToArray(unparsedMenuItems))
  }

  const orderMenuItem = async (itemId) => {
    try {
      setLoadingElement(itemId)
      await orderFood(itemId)
    } catch (e) {
      console.error(e)
    } finally {
      setLoadingElement(null)
    }
  }

  useEffect(() => {
    setMenuItemsHandler()
  }, [])

  return (
    <UserViewContainerWrapper>
      <UserView menuItems={menuItems} orderMenuItemCallback={orderMenuItem} loadingElement={loadingElement}/>
    </UserViewContainerWrapper>
  )
}

export default UserViewContainer
