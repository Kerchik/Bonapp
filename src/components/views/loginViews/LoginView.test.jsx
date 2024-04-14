import { render } from '@testing-library/react'
import LoginView from './LoginView'

jest.mock('../../../firebase/auth', () => ({
    signIn: jest.fn()
}))

test('renders LoginView with all inputs', () => {
    const { getByTestId } = render(<LoginView />)
    const emailInput = getByTestId('email')
    const passwordInput = getByTestId('password')

    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
})

test('renders LoginView with login button', () => {
    const { getByText  } = render(<LoginView />)
    const loginButton = getByText('Login')

    expect(loginButton).toBeInTheDocument()
})