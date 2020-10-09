import React from "react";
import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import History from "../../routes/History"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "&:hover": {
      cursor: "pointer"
    }
  },
  container:{
    width: "100% !important",
    margin: "0 !important"
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
	},
	dividerMargin: {
		margin: "15px"
	},
	cardHeader:{
    padding: "15px",
    backgroundColor: '#e44463',
    color: 'white'
	},
}));

export const OffersList = ({offers}) => {
  const classes = useStyles();

  const handleCardClick = (id) => {
    History.push(`/offers/${id}`)
  };
  
	return (
    <Container maxWidth="sm" className={classes.container}>
		<Card>
			<Typography className={classes.cardHeader} 
					gutterBottom variant="h5" component="h2">
				Offers 
			</Typography>
			<CardContent>
			{offers.length === 0 && "There is no Available offers"}
				{offers.map((offer, index) => {
					return (
						<div className={classes.root} key={index}>
							<Grid container spacing={2}>
								<Grid item xs={12} sm container>
									<Grid item xs container direction="column" spacing={2}>
										<Grid item xs onClick={() => handleCardClick(offer.id)}>
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
									</Grid>
                  <Grid item>
                    <Typography variant="body1">
                      {"$"+ offer.pricePerHour + "/hr"}
                    </Typography>
                  </Grid>
						</Grid>
					</Grid>
					{offers.length - 1 !== index && <Divider className={classes.dividerMargin}/>} 
						</div>
					);
				})}
			</CardContent>
		</Card>
	</Container>
    );
};