import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
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

	hammer: {
		maxWidth: 270,
		// marginRignt: '880px',
	},
}));

const Hero = () => {
	const classes = useStyles();

	return (
		<Grid className={classes.hero} boxShadow={3}>
			<Grid container>
				<Grid item xs={12} md={6}>
					<Grid>
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
					</Grid>
				</Grid>
				<Grid item xs={12} md={6}>
					<Grid>
						<img
							className={classes.hammer}
							src='/images/hammer.svg'
							alt='hammer'
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>

		// 	</Grid>
		// 	<Grid item>
		// 		<Paper>WHY FIX IT YOURSELF LEAVE IT TO THE PROS</Paper>
		// 	</Grid>
		// 	<Grid item>
		// 		<Paper>2</Paper>
		// 	</Grid>
		// </Grid>

		// <Grid container direction='center' md={12} spacing={2}>
		// 	<Grid item>
		// 		<Box className={classes.hero} >
		// 			<Typography variant='h4' color='primary' align='left'>
		// 				Perfection is always in our mind.
		// 			</Typography>
		// 			{/*   */}
		// 		</Box>
		// 	</Grid>
		// 	<Grid item></Grid>
		// </Grid>
		// <Box className={classes.hero} boxShadow={1}>
		// 	<Box>
		// 		<p>Perfection is always in our mind. NO JOB IS TOO BIG </p>
		// 		<Button variant='contained' color='primary' size='large'>
		// 			Request a Quote
		// 		</Button>

		// 		{/* <img src="/images/hammer.svg" alt="hammer" /> */}
		// 	</Box>
		// </Box>
	);
};

export default Hero;
