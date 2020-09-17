import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Container, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
		width: '100%',
		flex: 1
	},
	// container:{
	// 	display: 'flex',
	// 	width: '80%'
	// },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
	},
	large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export function ContactInfo({user}) {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
			<Card className={classes.root} variant="outlined">
				<CardContent>
					<Typography  color="textSecondary">
					Profile Picture:
					</Typography>
					<Avatar alt="Profile Picture" src={user.profileImg} className={classes.large} />
					<Typography  color="textSecondary">
					Name:
					</Typography>
					<Typography className={classes.pos} variant="body2" component="p">
					{user.name}
					</Typography>
					<Typography color="textSecondary">
					Email:
					</Typography>
					<Typography className={classes.pos} variant="body2" component="p">
					{user.email}
					</Typography>
					<Typography  color="textSecondary">
					Phone:
					</Typography>
					<Typography className={classes.pos} variant="body2" component="p">
					{user.phone}
					</Typography>
					<Typography  color="textSecondary">
					Address:
					</Typography>
					<Typography className={classes.pos} variant="body2" component="p">
					{user.address}
					</Typography>
					<Typography  color="textSecondary">
					Date of Birth:
					</Typography>
					<Typography className={classes.pos} variant="body2" component="p">
					{user.dob}
					</Typography>
				</CardContent>
			</Card>
    </Container>
  );
}
