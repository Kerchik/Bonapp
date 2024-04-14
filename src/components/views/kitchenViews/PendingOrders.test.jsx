import { render } from '@testing-library/react'
import PendingOrders from './PendingOrders'

test('renders PendingOrders with empty orders', () => {
    const { getByText } = render(<PendingOrders orderItems={[]}/>)
    const noItemsFoundText = getByText('No items found')
    
    expect(noItemsFoundText).toBeInTheDocument()
})

test('renders PendingOrders with non empty orders', () => {
    const orderItems = [
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
    const { getByText } = render(<PendingOrders orderItems={orderItems}/>)

    orderItems.forEach(item => {
        const itemName = getByText(item.name)
        const itemDescription = getByText(item.description)
        expect(itemName).toBeInTheDocument()
        expect(itemDescription).toBeInTheDocument()
    })
})

test('renders PendingOrders with "Finish" button', () => {
    const orderItems = [
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
    const { getAllByText } = render(<PendingOrders orderItems={orderItems}/>)

    const finishButtons = getAllByText('Finish')
    expect(finishButtons.length).toBe(3)
    finishButtons.forEach(button => {
        expect(button).toBeInTheDocument()
    })
})
