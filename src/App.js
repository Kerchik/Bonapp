import LoginView from './components/views/loginViews/LoginView'
import UserViewContainer from './components/views/userViews/UserViewContainer'
import WaiterViewContainer from './components/views/waiterViews/WaiterViewContainer'
import KitchenViewContainer from './components/views/kitchenViews/KitchenViewContainer'
import { useAuth } from './hooks/useAuth'
import Header from './components/header/Header'
import { useSelector } from 'react-redux'

function App() {
	const isAuthChecked = useAuth()
	const currentUser = useSelector((state) => state.auth.value)

	const loggedInViews = () => {
		const role = currentUser.role

		if (!role) return null

		switch (role) {
			case '0':
				return <UserViewContainer />
			case '1':
				return <WaiterViewContainer />
			case '2':
				return <KitchenViewContainer />
		}
	}

	return (
			<div>
				<Header />
				<main>
					{isAuthChecked &&
						<>
							{!currentUser && <LoginView />}
							{currentUser && loggedInViews()}
						</>
					}
				</main>
			</div>
	)
}

export default App
