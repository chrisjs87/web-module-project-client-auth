import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Login from './components/Login'

function App() {
  return (
		<Router>
			<h1>This is the App</h1>
			<Switch>
				{/* <Route path="/login" component={Login} /> */}
				<Route component={Login} />
			</Switch>
		</Router>
  );
}

export default App;
