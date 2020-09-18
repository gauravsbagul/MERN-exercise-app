import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateExercises from './components/CreateExercises';
import CreateUser from './components/CreateUser';
import EditExercisesList from './components/EditExercisesList';
import ExercisesList from './components/ExercisesList';
import NavBar from './components/NavBar';

function App() {
	return (
		<Router>
			<NavBar />
			<div className="container">
				<br />
				<Route path="/" exact component={ExercisesList} />
				<Route path="/edit/:id" exact component={EditExercisesList} />
				<Route path="/create" exact component={CreateExercises} />
				<Route path="/createUser" exact component={CreateUser} />
			</div>
		</Router>
	);
}

export default App;
