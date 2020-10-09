import { Button, Card, CardContent, 
  Divider, Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import React from "react"
import { offers } from "../../containers/Offers/Offers";
import Footer from "../Footer/Footer";
import IndexNavbar from "../Navbars/IndexNavbar";

const useStyles = makeStyles((theme) => ({
	cardHeader:{
    padding: "15px 15px",
    backgroundColor: '#e44463',
    color: 'white'
  },
  container: {
    width: "80%",
    margin: "0 auto"
  },
  divider: {
    margin: "20px 0"
  },
  submitBtn:{
    width: "20%",
    margin: "20px auto"
  },
  gridWidth: {
    maxWidth: "90% !important",
    marginBottom: "40px"
  },
  relatedHeader: {
    padding: "20px",
    fontSize: "24px"
  },
  relatedContainer: {
    flexWrap: "unset"
  },
  card:{
    margin: "140px 0 50px 0"
  }
}));

const OfferDetials = (props) => {
  const classes = useStyles();

  let id = parseInt(props.computedMatch.params.id);
  const offer = offers.filter(offer => offer.id === id)[0]

  const relatedOffers = offers.splice(0, 3)
  
  const handleCardClick = (id) => {
    History.push(`/offers/${id}`)
  }

  return (
    <div className={classes.container}>
      <IndexNavbar />
      <Card className={classes.card}>
        <Typography className={classes.cardHeader} 
            gutterBottom variant="h5" component="h2">
          {offer.title}
        </Typography>
        <CardContent>
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
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    {"$"+ offer.pricePerHour + "/hr"}
                  </Typography>
                </Grid>
              </Grid>
              <Divider />
              <Grid item xs={12}>
                <TextField
                  placeholder="Submit Your Proposal"
                  multiline
                  fullWidth
                  variant="outlined"
                  rows={4}
                  rowsMax={4}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submitBtn}
                > Submit</Button>
              </Grid>
            </Grid>
        </CardContent>
      </Card>
      <Typography variant="body1" component="h2" className={classes.relatedHeader}>
        Related Offers
      </Typography>
      <Grid container spacing={2} className={classes.relatedContainer}>
        {relatedOffers.map((offer, index) => {
          return (
            <div >
              <Grid item xs={3} key={index} className={classes.gridWidth}>
                <Card>
                  <Typography className={classes.cardHeader} 
                      gutterBottom variant="h5" component="h2" align="center">
                    {offer.title}
                  </Typography>
                  <CardContent>
                  <Grid container spacing={2}>
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
                    <Grid item>
                      <Typography variant="body1">
                        {"$"+ offer.pricePerHour + "/hr"}
                      </Typography>
                    </Grid>
                  </Grid>
                  </CardContent>
                </Card>  
              </Grid>
            </div>
          )
        })}
      </Grid>
      <Footer/>
    </div>
  )
}

export default OfferDetials;