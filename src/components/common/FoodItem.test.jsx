import { render, screen } from '@testing-library/react'
import FoodItem from './FoodItem'

test('renders FoodItem with correct data', () => {
    const name = 'Lorem'
    const description = 'Lorem Ipsum'
    render(<FoodItem name={name} description={description}/>)

    const h3 = screen.getByRole('heading', { level: 3 })
    const p = screen.getByText(description)
    
    expect(h3).toHaveTextContent(name)
    expect(p).toBeInTheDocument()
})

test('renders FoodItem with button', () => {
    const name = 'Lorem'
    const description = 'Lorem Ipsum'
    const buttonText = 'Button'
    render(<FoodItem name={name} description={description}><button>{buttonText}</button></FoodItem>)

    const buttonElement = screen.getByText(buttonText)

    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toBeInstanceOf(HTMLButtonElement)
})