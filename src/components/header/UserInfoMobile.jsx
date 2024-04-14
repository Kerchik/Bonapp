import React from 'react'
import styled from 'styled-components'
import { devices } from '../../styles/styledComponents'
import { useSelector } from 'react-redux'

const StyledCurrentUser = styled.p`
display: none;
@media only screen and ${devices.sm} {
    display: block;
    text-align: end;
    margin: 0;
    padding-top: 5px;
}
`

const UserInfoMobile = () => {
  const currentUser = useSelector((state) => state.auth.value)

  return <StyledCurrentUser>{currentUser?.email}</StyledCurrentUser>
}

export default UserInfoMobile
