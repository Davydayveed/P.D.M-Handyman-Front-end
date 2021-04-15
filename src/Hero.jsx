import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
import {
	createMuiTheme,
	responsiveFontSizes,
	ThemeProvider,
} from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
	hero: {
		// backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://unsplash.com/photos/Z3vFp7szCAY')`,
		backgroundColor: '#dda500',
		height: '400px',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#fff',
		fontSize: '4rem',
		[theme.breakpoints.down('sm')]: {
			height: 300,
			fontSize: '3em',
		},
	},

	mainText: {
		marginLeft: '240px',
	},

	hammer: {
		marginTop: 50,
		maxWidth: 340,
		marginLeft: '170px',
	},
}));

const Hero = () => {
	const classes = useStyles();

	return (
		<Grid className={classes.hero} boxShadow={3}>
			<Grid container alignItems='center'>
				<Grid item xs={12} md={6}>
					<Box className={classes.mainText}>
						<ThemeProvider theme={theme}>
							<Typography variant='h3'>
								Dedicated to quality handyman work.
							</Typography>
							<Typography variant='subtitle1'>
								Are you Looking for a Professional HANDYMAN? Get the best
								Handyman service here.
							</Typography>
						</ThemeProvider>
						<Button variant='contained' color='secondary' size='large'>
							Request a Quote
						</Button>
					</Box>
				</Grid>
				<Grid item xs={12} md={6}>
					<Box>
						<img
							className={classes.hammer}
							src='/images/hammer.svg'
							alt='hammer'
						/>
					</Box>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Hero;
