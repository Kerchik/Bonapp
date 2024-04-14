import React from 'react'
import styled, { css } from 'styled-components'
import Loading from '../../assets/Loading.jsx'

const primaryStyles = css`
  background-color: #42E9F5;
  border: 1px solid #42E9F5;
  color: #000000;
`

const secondaryStyles = css`
  background-color: #ffffff;
  border: 1px solid #42E9F5;
  color: #42E9F5;
`

const StyledButton = styled.button`
  outline: 0;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  position: relative;
  ${({ $buttonType }) => $buttonType === 'primary' ? primaryStyles : secondaryStyles}
  width: ${({ $fullWidth }) => $fullWidth  ? '100%' : 'auto'};
  &:hover {
    background-color: ${({ $buttonType }) => $buttonType === 'primary' ? '#ffffff' : '#42E9F5'};
    color: ${({ $buttonType }) => $buttonType === 'primary' ? '#42E9F5' : '#ffffff'};
    border-color: ${({ $buttonType }) => $buttonType === 'primary' ? '#42E9F5' : '#ffffff'};
  }
`

const LoadingOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Button = ({
  onClickFunction,
  text,
  buttonType,
  loading = false,
  fullWidth = false,
  ...options 
}) => {
  return (
    <StyledButton 
      $buttonType={buttonType} 
      $fullWidth={fullWidth} 
      onClick={onClickFunction} 
      {...options}
    >
      {loading ? (
        <>
          <LoadingOverlay>
            <Loading />
          </LoadingOverlay>
          <span style={{ visibility: 'hidden' }}>{text}</span>
        </>
      ) : (
        text
      )}
    </StyledButton>
  )
}

export default Button
