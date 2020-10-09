import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';


import sitterOne from "../../assets/sitters/sitter1.png";
import sitterTwo from "../../assets/sitters/sitter2.png";
import sitterThree from "../../assets/sitters/sitter3.png";
import sitterFour from "../../assets/sitters/sitter4.png";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  sectionTitleContainer: {
    marginTop: "100px",
  },
  sectionTitle: {
    textAlign: "center",
    color: "#560a4e",
    fontWeight: "bold",
  },
  sectionTitleBottom: {
    height: "5px",
    backgroundColor: "#aaf1d1",
    width: "70px",
    margin: "auto",
  },
  sittersContainer: {
    marginTop: "40px",
  },
  img: {
    width: "100px",
    height: "auto", 
  },
  sitter: {
    fontWeight: "bold",
    color: "#270a25",
    marginTop: "15px",
  },
  job: {
    marginTop: "6px",
  },
  seeMore: {
    borderRadius: "15px",
    color: "#ffffff",
    padding: "5px 40px",
    backgroundColor: "#560a4e",
    textTransform: "capitalize",
  },
}));


const sitters = [
  {
    name: "Mona Ehab",
    img: sitterOne,
    job: "Babysitter",
  }, 
  {
    name: "Salma Yousef",
    img: sitterTwo,
    job: "Babysitter"
  },
  {
    name: "Omnia Ahmed",
    img: sitterThree,
    job: "Babysitter"
  },
  {
    name: "Alaa Mabrouk",
    img: sitterFour,
    job: "Nannysitter"
  }
];



const ThirdSection = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.sectionTitleContainer}
      >
        <Grid item xs={4}>
          <div>
            <Typography variant="h5" className={classes.sectionTitle}>
              Sitters Profiles
            </Typography>
            <div className={classes.sectionTitleBottom}></div>
          </div>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center" spacing={8} className={classes.sittersContainer}>
        {sitters.map((sitter) => (
        <Grid item>
          <Paper className={classes.paper} elevation={0}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <img src={sitter.img} className={classes.img} alt="sitter profile"/>
              </Grid>
              <Grid item>
                <Typography variant="h6" className={classes.sitter}>{sitter.name}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" className={classes.job}>{sitter.job}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
          ))}
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
          <Button color="primary" variant="contained" className={classes.seeMore}>See More</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ThirdSection;
