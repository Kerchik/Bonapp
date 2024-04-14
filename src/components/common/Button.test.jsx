import { render, screen } from '@testing-library/react'
import Button from './Button'

test('renders button with correct text', () => {
    const buttonText = 'Hello, world'
    render(<Button text={buttonText} buttonType='primary' onClickFunction={() => {}}/>)

    const buttonElement = screen.getByText(buttonText)
    expect(buttonElement).toBeInTheDocument()
})

test('renders button with primary type', () => {
    const buttonText = 'Hello, world'
    render(<Button text={buttonText} buttonType='primary' onClickFunction={() => {}}/>)
    const buttonElement = screen.getByText(buttonText)

    const buttonStyle = window.getComputedStyle(buttonElement)
    
    const backgroundColor = buttonStyle.getPropertyValue('color')

    /**
     * For some reasong button is being hovered with this test, so I have to
     * check for onHover styles
     */
    expect(backgroundColor).toBe('rgb(66, 233, 245)')
})

test('renders button with secondary type', () => {
    const buttonText = 'Hello, world'
    render(<Button text={buttonText} buttonType='secondary' onClickFunction={() => {}}/>)
    const buttonElement = screen.getByText(buttonText)

    const buttonStyle = window.getComputedStyle(buttonElement)
    
    const backgroundColor = buttonStyle.getPropertyValue('color')

    /**
     * For some reasong button is being hovered with this test, so I have to
     * check for onHover styles
     */
    expect(backgroundColor).toBe('rgb(255, 255, 255)')
})
