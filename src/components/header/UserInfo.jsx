import React from 'react'
import { signOut } from '../../firebase/auth'
import styled from 'styled-components'
import Button from '../common/Button'
import { devices } from '../../styles/styledComponents'
import { useSelector } from 'react-redux'

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
    const currentUser = useSelector((state) => state.auth.value)
    return (
        <UserInfoWrapper>
            <StyledCurrentUser>{currentUser?.email}</StyledCurrentUser>
            {currentUser && <Button onClickFunction={signOut} text='Logout' buttonType='secondary' />}
        </UserInfoWrapper>
    )
}

export default UserInfo