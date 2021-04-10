import React from 'react';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Header from './Header';
// import Hero from './Hero';
import Services from './Services';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({});

export default function App() {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Header />
			<Switch>
				<Route exact from='/' render={(props) => <Home {...props} />} />
				<Route
					exact
					path='/contact'
					render={(props) => <Contact {...props} />}
				 />
				<Route exact path='/about' render={(props) => <About {...props} />} />
				<Route exact path='/services' render={(props) => <Services {...props} />} />
			</Switch>
		</div>
	); 
}
