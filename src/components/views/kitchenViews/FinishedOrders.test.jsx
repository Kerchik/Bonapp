import { render } from '@testing-library/react'
import FinishedOrders from './FinishedOrders'

test('renders FinishedOrders with empty orders', () => {
    const { getByText } = render(<FinishedOrders orderItems={[]}/>)
    const noItemsFoundText = getByText('No items found')
    
    expect(noItemsFoundText).toBeInTheDocument()
})

test('renders FinishedOrders with non empty orders', () => {
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
    const { getByText } = render(<FinishedOrders orderItems={orderItems}/>)

    orderItems.forEach(item => {
        const itemName = getByText(item.name)
        const itemDescription = getByText(item.description)
        expect(itemName).toBeInTheDocument()
        expect(itemDescription).toBeInTheDocument()
    })
})
