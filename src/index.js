import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { AuthProvider } from './hooks/useAuth'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        {/* <AuthProvider> */}
            <App />
        {/* </AuthProvider> */}
    </Provider>
)

reportWebVitals()
