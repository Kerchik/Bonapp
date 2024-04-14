import { render } from '@testing-library/react'
import WaiterView from './WaiterView'

test('renders WaiterView with empty orders', () => {
    const { getByText } = render(<WaiterView orderItems={[]}/>)
    const noItemsFoundText = getByText('No items found')
    
    expect(noItemsFoundText).toBeInTheDocument()
})

test('renders WaiterView with non empty orders', () => {
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
    const { getByText } = render(<WaiterView orderItems={orderItems}/>)

    orderItems.forEach(item => {
        const itemName = getByText(item.name)
        const itemDescription = getByText(item.description)
        expect(itemName).toBeInTheDocument()
        expect(itemDescription).toBeInTheDocument()
    })
})

test('renders UserView with "Pay" button', () => {
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
    const { getAllByText } = render(<WaiterView orderItems={orderItems}/>)

    const finishButtons = getAllByText('Pay')
    expect(finishButtons.length).toBe(3)
    finishButtons.forEach(button => {
        expect(button).toBeInTheDocument()
    })
})
