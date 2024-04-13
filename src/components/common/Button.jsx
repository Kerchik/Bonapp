import React from 'react'
import styled, { css } from 'styled-components'

const primaryStyles = css`
  background-color: #42E9F5;
  border: 1px solid #42E9F5;
  color: #000000;
`;

const secondaryStyles = css`
  background-color: #ffffff;
  border: 1px solid #42E9F5;
  color: #42E9F5;
`;

const StyledButton = styled.button`
  outline: 0;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  width: 100%;
  ${({ buttonType }) => buttonType === 'primary' ? primaryStyles : secondaryStyles}
  width: ${({ fullWidth }) => fullWidth  ? '100%' : 'auto'};
  &:hover {
    background-color: ${({ buttonType }) => buttonType === 'primary' ? '#ffffff' : '#42E9F5'};
    color: ${({ buttonType }) => buttonType === 'primary' ? '#42E9F5' : '#ffffff'};
    border-color: ${({ buttonType }) => buttonType === 'primary' ? '#42E9F5' : '#ffffff'};
  }
`;

const Button = ({ onClickFunction, text, buttonType, fullWidth = false,  ...options }) => {
  return <StyledButton buttonType={buttonType} fullWidth={fullWidth} onClick={onClickFunction} {...options}>{text}</StyledButton>
}

export default Button
