import React from 'react'
import { useAuth } from "../../contexts/AuthContext"
import { signOut } from "../../firebase/auth"
import styled from 'styled-components'
import Button from '../common/Button'
import { devices } from '../../styles/styledComponents'

const UserInfoWrapper = styled.div`
display: flex;
gap: 8px;
`

const StyledCurrentUser = styled.p`
@media only screen and ${devices.sm} {
    display: none;
}
`

const UserInfo = () => {
    const { userLoggedIn, currentUser } = useAuth()
    console.log(currentUser)
    return (
        <UserInfoWrapper>
            <StyledCurrentUser>{currentUser?.email}</StyledCurrentUser>
            {userLoggedIn && <Button onClickFunction={signOut} text="Logout" buttonType="secondary"/>}
        </UserInfoWrapper>
    )
}

export default UserInfo