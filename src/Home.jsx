import React from 'react';
import Hero from './Hero';
import './index.css';
// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const Home = (props) => {
	return (
		<div>
			<Hero />
			<Grid container>
				<Grid item>
					<Box component='span'>
						<img src='images/repair-tools.svg' alt='repair tool' id='tool' />
					</Box>
				</Grid>
			</Grid>
			<Grid item xs={12} md={6}>
				<Paper>WHY FIX IT YOURSELF LEAVE IT TO THE PROS</Paper>
			</Grid>
			<Grid item md={6}>
				<Paper>2</Paper>
			</Grid>
		</div>
	);
};

export default Home;
