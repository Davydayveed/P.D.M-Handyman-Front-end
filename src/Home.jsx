import React from 'react';
import Hero from './Hero';
import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {
	createMuiTheme,
	responsiveFontSizes,
	ThemeProvider,
} from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
	subText: {
		marginLeft: '12em',
	},
	proText: {
		marginTop: 40,
	},
	fieldHeading: {
		textAlign: 'center',
	},

	field: {
		marginLeft: 100,
		marginTop: 20,
		marginBottom: 20,
		display: 'block',
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
					<Paper>
						<Grid>
							<ThemeProvider theme={theme}>
								<Typography variant='h2' className={classes.fieldHeading}>
									Get An Estimate
								</Typography>
								<Typography
									variant='subtitle1'
									className={classes.fieldHeading}>
									Need to know how much your cost?
								</Typography>
							</ThemeProvider>
						</Grid>

						<form className={classes.root} noValidate autoComplete='of'>
							<TextField
								className={classes.field}
								id='outlined-basic'
								label='Name'
								variant='outlined'
								color='secondary'
							/>
							<TextField
								className={classes.field}
								id='outlined-basic'
								label='E-mail'
								variant='outlined'
								color='secondary'
							/>
							<TextField
								className={classes.field}
								label='Phone'
								variant='outlined'
								color='secondary'
							/>
							<TextField
								className={classes.field}
								label='Intrested in'
								variant='outlined'
								color='secondary'
							/>
							<Button variant='contained' color='secondary' size='large'>
								Request a Quote
							</Button>
						</form>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default Home;
