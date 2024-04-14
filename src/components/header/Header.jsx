import React from 'react'
import styled from 'styled-components'
import UserInfo from './UserInfo'
import UserInfoMobile from './UserInfoMobile'
import { devices } from '../../styles/styledComponents'

const StyledHeader = styled.header`
padding: 20px;
background-color: #42E9F5;
`

const HeaderContainer = styled.div`
max-width: 1000px;
width: 100%;
margin: 0 auto;
display: flex;
justify-content: space-between;
`

const H1 = styled.h1`
margin: 0;
text-transform: uppercase;
@media only screen and ${devices.sm} {
  font-size: 18px;
}
`

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <H1>Bonapp</H1>
        <UserInfo />
      </HeaderContainer>
      <UserInfoMobile />
    </StyledHeader>
  )
}

export default Header
