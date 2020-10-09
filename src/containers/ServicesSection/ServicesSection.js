import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { green } from '@material-ui/core/colors';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
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
  servicesContainer: {
    marginTop: "40px",
  },
  title: {
    marginBottom:"15px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
}));


const services1 = [
    "Part-time sitter", 
    "full-time nanny",
    "Occasional babysitters",
]


const services2 = [
    "Backup childcare",
    "Last minute sitters",
    "Date night babysitters",
]



const ServicesSection = () => {
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
              Our Services
            </Typography>
            <div className={classes.sectionTitleBottom}></div>
          </div>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center" spacing={3} className={classes.servicesContainer}>
        <Grid item xs={12} md={3}>
          <div className={classes.demo}>
            <List>
              {services1.map((service) => (
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon style={{color: green[500]}}/>
                  </ListItemIcon>
                  <ListItemText
                    primary={service}
                  />
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>

        <Grid item xs={12} md={3}>
          <div className={classes.demo}>
            <List>
              {services2.map((service) => (
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon style={{color: green[500]}}/>
                  </ListItemIcon>
                  <ListItemText
                    primary={service}
                  />
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ServicesSection;
