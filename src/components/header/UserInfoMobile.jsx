import React from "react"
import { useAuth } from "../../contexts/AuthContext"
import styled from "styled-components"
import { devices } from "../../styles/styledComponents"

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
  const { currentUser } = useAuth()

  return <StyledCurrentUser>{currentUser?.email}</StyledCurrentUser>
}

export default UserInfoMobile
