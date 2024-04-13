import React, { useState } from 'react'
import { signIn as signInRequest } from '../../../firebase/auth'
import styled from 'styled-components'
import { devices } from '../../../styles/styledComponents'
import Button from '../../common/Button'

const StyledFormWrapper = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
`
const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 14px;
max-width: 1000px;
width: 100%;
margin: 0 auto;
@media only screen and ${devices.sm} {
    padding: 0 10px;
}
`

const InputWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
width: 100%;
max-width: 300px;
`
const ButtonWrapper = styled.div`
width: 100%;
max-width: 300px;
`
const Input = styled.input`
padding: 7px;
font-size: 18px;
border: 1px solid ${props => props.error ? '#FF0000' : '#000000'};
border-radius: 6px;
`
const Label = styled.label`
color: ${props => props.error ? '#FF0000' : '#000000'};
font-weight: 500;
`

const LoginView = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [error, setError] = useState(false)

    const handleEmailChange = (e) => {
        setError(false)
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setError(false)
        setPassword(e.target.value)
    }

    const signIn = async (e) => {
        e.preventDefault()

        if (!isSigningIn) {
            setIsSigningIn(true)
            try {
                await signInRequest(email, password)
            } catch(e) {
                setIsSigningIn(false)
                setError(true)
            }
        }
    }

    return (
        <StyledFormWrapper>
            <StyledForm onSubmit={signIn}>
                <InputWrapper>
                    <Label error={error}>Email</Label>
                    <Input value={email} onChange={handleEmailChange} type='email' placeholder='email' error={error}/>
                </InputWrapper>
                <InputWrapper>
                    <Label error={error}>Password</Label>
                    <Input value={password} onChange={handlePasswordChange} type='password' placeholder='password' error={error}/>
                </InputWrapper>
                <ButtonWrapper>
                    <Button type='submit' buttonType={'primary'} text='Login' fullWidth={true}></Button>
                </ButtonWrapper>
            </StyledForm>
        </StyledFormWrapper>
    )
}

export default LoginView