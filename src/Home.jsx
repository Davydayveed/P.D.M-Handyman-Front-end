import React from 'react';
import Hero from './Hero';
import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import {
	createMuiTheme,
	responsiveFontSizes,
	ThemeProvider,
} from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
	subText: {
		marginLeft: '230px',
	},
});

const Home = (props) => {
	const classes = useStyles();
	return (
		<div>
			<Hero />
			<Grid container>
				<Grid item xs={12} md={6}>
					<Box className={classes.subText}>
						<ThemeProvider theme={theme}>
							<Typography variant='h1' className={classes.proText}>
								WHY FIX IT YOURSELF LEAVE IT TO THE PROS
							</Typography>
						</ThemeProvider>
					</Box>
				</Grid>
				<Grid item md={5}>
					<Paper>2</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default Home;
