import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';

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
		marginLeft: '250px',
	},

	hammer: {
		maxWidth: 300,
		marginLeft: '150px',
	},
}));

const Hero = () => {
	const classes = useStyles();

	return (
		<Grid className={classes.hero} boxShadow={3}>
			<Grid container>
				<Grid item xs={12} md={6}>
					<Box className={classes.mainText}>
						<Typography variant='h3'>
							Dedicated to quality handyman work.
						</Typography>
						<Typography variant='subtitle1'>
							Are you Looking for a Professional HANDYMAN? Get the best Handyman
							service here.
						</Typography>
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
