import React from "react";
import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import History from "../../routes/History";

const offers = [
	{
    id: 2,
		title: "Baby sitter for 3 days",
		description: "I want a Baby sitter for 3 days",
		startDate: "Sep, 4 2020",
		endDate: "Sep, 7 2020",
		acceptedSitterName: "Monica",
		status: "Pendding",
		totalPrice: 30
	},
	{
    id: 5,
		title: "Baby sitter for one day",
		description: "I want a Baby sitter for one day",
		startDate: "Oct, 10 2020",
		endDate: "Oct, 10 2020",
		acceptedSitterName: "Eman",
		status: "Confirmed",
		totalPrice: 11
	}
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "&:hover": {
      cursor: "pointer"
    }
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
	},
	dividerMargin: {
		marginBottom: "15px"
	},
	cardHeader:{
		backgroundColor: "#f1f1f1",
		padding: "15px 0"
	},
	green: {
		color: "green"
  },
  status: {
    margin: 0
  }
}));

const handleCardClick = (offerId) => {
  return History.push(`/offers/${offerId}`);
}

export const MyOffers = () => {
  const classes = useStyles();

	return (
			<Container maxWidth="sm">
				<Card>
					<Typography className={classes.cardHeader} 
								gutterBottom variant="h5" component="h2" align="center">
						My Offers
					</Typography>
					<CardContent>
						{offers.map((offer, index) => {
							return (
								<div className={classes.root} key={index} onClick={() => handleCardClick(offer.id)}>
									<Grid container spacing={2}>
										<Grid item xs={12} sm container>
											<Grid item xs container direction="column" spacing={2}>
												<Grid item xs>
													<Typography gutterBottom variant="subtitle1">
														{offer.title}
													</Typography>
													<Typography variant="body2" gutterBottom>
														{offer.description}
													</Typography>
													<Typography variant="body2" color="textSecondary">
													Duration: From {offer.startDate} to {offer.endDate}
													</Typography>
												</Grid>
												<Grid item>
												</Grid>
											</Grid>
											<Grid item>
												<Typography variant="subtitle1">${offer.totalPrice}</Typography> 
												{offer.status === "Confirmed" && <div> <CheckCircleOutlineIcon className={classes.green}/>
                          <p className={classes.status}>{offer.status}</p></div>}
												{offer.status === "Pendding" && <div> <AccessAlarmIcon color="primary"/> 
                          <p className={classes.status}>{offer.status}</p></div>}
											</Grid>
										</Grid>
									</Grid>
									{offers.length - 1 !== index && <Divider className={classes.dividerMargin}/>} 
								</div>
							)
						})}
					</CardContent>
				</Card>
			</Container>
    );
}
