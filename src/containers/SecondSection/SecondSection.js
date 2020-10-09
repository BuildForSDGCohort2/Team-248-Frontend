import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: "210px",
    minHeight: "260px",
    paddingBottom: "50px !important",
    borderRadius: "16px",
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
  howItWorks: {
    marginTop: "40px",
  },
  paperIcon: {
    marginTop: "20px",
    fontSize: "59px",
    color: "#5ee8d1",
  },
  paperTitle: {
    marginBottom:"15px",
    color: "#270a25",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  paperText: {
    fontSize: "14px",
  }
}));

const titles = [
  {
    "icon": SearchIcon,
    "title": "Search",
    "description": "BabeJo for our handselected babysitters near you."
  },
  {
    "icon": FilterListIcon,
    "title": "Filter",
    "description": "after search, to tune your search result and only select your perfect match."
  },
  {
    "icon": TouchAppIcon,
    "title": "Choose",
    "description": "your new family member, we treat our babysitters as a family."
  },
  {
    "icon": CheckCircleIcon,
    "title": "Order",
    "description": "and your sitter will show up ready to take care of your love ones."
  }
]


const SecondSection = () => {
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
              How it Works
            </Typography>
            <div className={classes.sectionTitleBottom}></div>
          </div>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center" spacing={3} className={classes.howItWorks}>
        {titles.map((t) => (
        <Grid item key={t.title}>
          <Paper className={classes.paper}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <t.icon className={classes.paperIcon}/>
                <Typography variant="h5" className={classes.paperTitle}>
                  {t.title}
                </Typography>
                <Typography variant="body2">
                  {t.description}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SecondSection;
