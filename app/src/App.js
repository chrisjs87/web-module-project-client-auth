import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Login from './components/Login'
import FriendsList from './components/FriendsList'

import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
		<Router>
			<h1>This is the App</h1>
			<Switch>
				<PrivateRoute path="/friends" component={FriendsList} />
				{/* <Route path="/login" component={Login} /> */}
				<Route component={Login} />
			</Switch>
		</Router>
  );
}

export default App;
