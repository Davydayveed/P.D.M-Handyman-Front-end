import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CallIcon from '@material-ui/icons/Call';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import logo from "/images/logo.png";
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	abRoot: {
		backgroundColor: '#dda500',
	},

	root: {
		flexGrow: 1,
		color: 'red',
	},

	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		[theme.breakpoints.down('xs')]: {
			flexGrow: 1,
		},
	},
	headerOptions: {
		display: 'flex',
		flex: 4,
		justifyContent: 'flex-end',
		marginRight: '100px',
	},
	logo: {
		maxWidth: 70,
		marginLeft: '50px',
	},

	marginAutoContainer: {
		width: 500,
		height: 80,
		display: 'flex',
		backgroundColor: 'gold',
	},
	marginAutoItem: {
		margin: 'auto',
	},
	alignItemsAndJustifyContent: {
		width: 500,
		height: 80,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'pink',
	},
}));

const Header = (props) => {
	const { history } = props;
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClick = (pageURL) => {
		history.push(pageURL);
		setAnchorEl(null);
	};

	const handleButtonClick = (pageURL) => {
		history.push(pageURL);
	};

	const menuItems = [
		{
			menuTitle: 'Home',
			pageURL: '/',
		},
		{
			menuTitle: 'Contact',
			pageURL: '/contact',
		},
		{
			menuTitle: 'About',
			pageURL: '/about',
		},
		{
			menuTitle: 'Services',
			pageURL: '/services',
		},
	];

	return (
		<div className={classes.root}>
			<AppBar
				position='fixed'
				classes={{
					root: classes.abRoot,
					positionStatic: classes.abStatic,
				}}>
				<Toolbar>
					<div className={classes.marginAutoItem}>
						<img
							src='/images/logo.png'
							alt='P.D.M Logo'
							className={classes.logo}
							onClick={() => handleButtonClick('/')}
						/>

						{/* <img src={logo} alt="P.D.M Logo" className={classes.logo} 
			onClick={() => handleButtonClick('/')}
		 />  */}
					</div>

					{isMobile ? (
						<>
							<IconButton
								edge='start'
								className={classes.menuButton}
								color='inherit'
								aria-label='menu'
								onClick={handleMenu}>
								<MenuIcon />
							</IconButton>

							<Menu
								id='menu-appbar'
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={open}
								onClose={() => setAnchorEl(null)}>
								{menuItems.map((menuItem) => {
									const { menuTitle, pageURL } = menuItem;
									return (
										<MenuItem onClick={() => handleMenuClick(pageURL)}>
											{menuTitle}
										</MenuItem>
									);
								})}
							</Menu>
						</>
					) : (
						<div className={classes.headerOptions}>
							<Button
								color='inherit'
								size='large'
								onClick={() => handleButtonClick('/')}>
								HOME
							</Button>
							<Button
								color='inherit'
								size='large'
								onClick={() => handleButtonClick('/contact')}>
								CONTACT
							</Button>
							<Button
								color='inherit'
								size='large'
								onClick={() => handleButtonClick('/about')}>
								ABOUT
							</Button>
							<Button
								color='inherit'
								size='large'
								onClick={() => handleButtonClick('/services')}>
								SERVICES
							</Button>
							<Button variant='contained' color='secondary' size='large'>
								<CallIcon style={{ fontSize: 30 }} /> 0803476222
							</Button>
						</div>
					)}
				</Toolbar>
			</AppBar>
			<br />
			<br />
			<br />
			<br />
			<br />
		</div>
	);
};

export default withRouter(Header);
