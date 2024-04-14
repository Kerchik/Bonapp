Bonapp example app.

This app has 4 views: LoginView, UserView, WaiterView, KitchenView.

In LoginView there is a login form, that will help you authenticate to the site.
In task description, registration functionality was not mentioned, so please use one of those login data:

kitchen@kitchen.com kitchen
waiter@waiter.com waiter
user@user.com useruser

In UserView(available only for role User), you can see all available food in menu, and also order it.

In WaiterView(available only for role Waiter), you can see all ordered food, and also inititate payment process.

In KitchenView(available only for role Kitchen), you can see both pending orders, and finished orders.
For pending orders, it is possile to change status to finished.

Folder structure:
src/
│
├── assets/ - Folder with assets(image/gifs etc.)
├── componenets/
│ ├── common/ - Common componenets, that might be used in multiple places
│ ├── header/ - Header elements
│ └── views/ - All available views(for every role)
│ ├── loginViews - Login views for unauthorized user
│ └── userViews - Regular user views
│ └── waiterViews - waiter views
│ └── kitchenViews - Kitchen staff views
├── firebase/ - Folder for firebase configuration
│ ├── auth.js/ - All logic used for authentification
│ ├── firebase.js/ - firebase configuration
├── hooks/ - React hooks
├── redux/ - Redux
│ ├── authSlice.js/ - fAuth reducer
│ ├── store.js/ - Global store configuration
├── request/ - Folder for REST requests
├── styles/ - Folder for stylerd-componenets variables
├── App.js - File, that handles all views
├── index.js - Root file
