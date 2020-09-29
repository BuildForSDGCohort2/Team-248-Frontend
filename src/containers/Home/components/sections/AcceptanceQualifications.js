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
  }
}));

const Qualifictions = [
  'Basic Babysitting Course or Training',
  'CPR and First Aid',
  'Identification',
  'Social Media',
  'Age and Maturity',
  'Safety skills',
  'Child development knowledge',
  'How to entertain children',
  'How to care for sick children',
  'Money management',
  'Cooking and food preparation',
  'Patience',
  'Multitasking' 
];


export const AcceptanceQualifictions = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h6" className={classes.title}>
          To Join our Family as A Babysitter, Please make sure you hav most of these Qualifictions,
          that our clients agreed on.  
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
  )
    
}