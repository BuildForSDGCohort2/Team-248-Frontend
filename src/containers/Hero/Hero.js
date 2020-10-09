// The header with navs and router go here (First section)
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import baby from "../../assets/Images/baby.svg";

const useStyles = makeStyles((theme) => ({
  heroImage: {
    width: "400px",
    height: "auto",
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  actionBtn: {
    borderRadius: "15px",
    color: "#ffffff",
    padding: "5px 15px",
    backgroundColor: "#560a4e",
  },
  mutedText: {
    color: "#7b7f7e",
  },
  actionCallText: {
    fontWeight: "bold",
  }
}));

const Hero = function () {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <div>
      <Grid container alignItems="center" direction="row" justify="space-evenly">
        <Grid item xs={12} sm={4} md={4}>
          <div>
            <Typography variant="h2" gutterBottom={true} className={classes.actionCallText}  color="primary">
              WELCOME TO BABEJO..
            </Typography>
            <Typography variant="body1" gutterBottom={true}  className={classes.mutedText}>
              You're looking for a trustworthy babysitter, you came to the right place because we value safety and transparency above all.
            </Typography>
            <Button variant="contained" color="primary"  className={classes.actionBtn}>See Profiles</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={5} md={5}>
          <div>
            <img src={baby} alt="baby" className={classes.img}/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
