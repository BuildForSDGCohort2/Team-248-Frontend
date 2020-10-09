import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles((theme) => ({
  container:{
    width: '80%',
    margin: '0 auto'
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
    textAlign: "center",
  },
  listIcon: {
    color: 'green',
  },
  listItemText: {
    fontSize: '14px !important'
  },
  listItem: {
    margin: '0 !important',
    padding: '0'
  },
  sectionTitleContainer: {
    marginTop: "100px",
  },
  sectionTitle: {
    textAlign: "center",
    color: "#560a4e",
    textAlign: "center",
    fontWeight: "bold",
  },
  sectionTitleBottom: {
    height: "5px",
    backgroundColor: "#aaf1d1",
    width: "70px",
    margin: "auto",
  },
  joinUs: {
    marginTop: "40px",
  },

}));

const Qualifictions = [
  "Communication and relationship building",
  "CPR and First Aid",
  "Safety skills",
  "Child development knowledge",
  "Kid Entertainment skills",
  "How to care of sick children",
  "Cooking and food preparation",
  "Patience",
  "Multitasking",
  "Attentive and Loving",
];


const AcceptanceQualifictions = () => {
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
              Join us
            </Typography>
            <div className={classes.sectionTitleBottom}></div>
          </div>
        </Grid>
      </Grid>

    <div className={classes.container}>
      <Typography variant="h6" className={classes.title}>
          To Join our Family, Please make sure you have these Qualifications.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src="/babysitting-illustration.jpg" alt="babysitter"/>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.demo}>
              <List>
                { Qualifictions.map((item, index) => {
                  return <ListItem key={index} className={classes.listItem}>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon className={classes.listIcon}/>
                    </ListItemIcon>
                    <ListItemText
                      className={classes.listItemText}
                      variant="body2"
                      primary={item}
                    />
                  </ListItem>
                }) }
              </List>
          </div>
        </Grid>
      </Grid>
    </div>
    </div>
  )
    
}

export default AcceptanceQualifictions;
