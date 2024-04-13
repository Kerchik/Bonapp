import LoginView from './components/views/loginViews/LoginView';
import UserViewContainer from './components/views/userViews/UserViewContainer'
import WaiterViewContainer from './components/views/waiterViews/WaiterViewContainer'
import KitchenViewContainer from './components/views/kitchenViews/KitchenViewContainer'
import { useAuth } from "./contexts/AuthContext";
import Header from './components/header/Header'

function App() {
	const { userLoggedIn, currentUser } = useAuth()

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
			<div className="App">
				<Header />
				<main>
					{!userLoggedIn && <LoginView />}
					{userLoggedIn && loggedInViews()}
				</main>
			</div>
	)
}

export default App
