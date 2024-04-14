import { render } from '@testing-library/react'
import UserView from './UserView'

test('renders UserView with empty menu', () => {
    const { getByText } = render(<UserView menuItems={[]}/>)
    const noItemsFoundText = getByText('No items found')
    
    expect(noItemsFoundText).toBeInTheDocument()
})

test('renders UserView with non empty menu', () => {
    const menuItems = [
        {
            id: 1,
            name: 'lorem',
            description: 'lorem ipsum'
        },
        {
            id: 2,
            name: 'lorem1',
            description: 'lorem ipsum1'
        },
        {
            id: 3,
            name: 'lorem2',
            description: 'lorem ipsum2'
        },
    ]
    const { getByText } = render(<UserView menuItems={menuItems}/>)

    menuItems.forEach(item => {
        const itemName = getByText(item.name)
        const itemDescription = getByText(item.description)
        expect(itemName).toBeInTheDocument()
        expect(itemDescription).toBeInTheDocument()
    })
})

test('renders UserView with "Order" button', () => {
    const menuItems = [
        {
            id: 1,
            name: 'lorem',
            description: 'lorem ipsum'
        },
        {
            id: 2,
            name: 'lorem1',
            description: 'lorem ipsum1'
        },
        {
            id: 3,
            name: 'lorem2',
            description: 'lorem ipsum2'
        },
    ]
    const { getAllByText } = render(<UserView menuItems={menuItems}/>)

    const finishButtons = getAllByText('Order')
    expect(finishButtons.length).toBe(3)
    finishButtons.forEach(button => {
        expect(button).toBeInTheDocument()
    })
})
