
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '70vh',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: "#560a4e",
    minHeight: "270px",
  },
  footerText: {
    color :"#ffffff",
  },
  footerTitle: {
    color: "#57cc99",
    fontWeight: "bold",
    marginBottom: theme.spacing(3),
  },
  title: {
    color: "#57cc99",
    fontWeight: "bold",
  },
  noPadding: {
    paddingLeft: "0px !important",
    color: "#ffffff"
  }
}));


const discoverLinks = [
  "About Us",
  "Careers",
  "Trust & Safety",
  "Profiles",
  "Contact Us"
]


const contacts = [
  {
    text: "hello@babejo.com",
    icon: MailIcon
  },
  {
    text :"+20-15-3456-4567",
    icon: PhoneIcon
  }
]

const socilaMedia = [
  FacebookIcon,
  TwitterIcon,
  InstagramIcon
]

const Footer = function() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
          <Grid container direction="row" justify="space-between" spacing={3}>
            <Grid item md={3}>
              <Typography variant="h6" className={classes.footerTitle}>
                About us
              </Typography>
              <Typography variant="body2" className={classes.footerText} >
                BabeJo is a website for babysitting people who need care.
                with us you can hire a babysitter to take care of you children.
              </Typography>
            </Grid>
            <Grid item md={3}>
              <Typography variant="h6" className={classes.title}>
                Discover
              </Typography>
              <div>
              <List dense={true}>
                {discoverLinks.map((link) => (
                  <ListItem  className={classes.noPadding}>
                    <ListItemText>
                      <Typography> 
                    <Link href="#" underline="none" className={classes.footerText}>{link}</Link>
                    </Typography>
                      </ListItemText>
                  </ListItem>
                ))}
            </List>
          </div>
            </Grid>
            <Grid item md={3}>
              <Typography variant="h6" className={classes.title}>
                Contact Us
              </Typography>

            <div>
            <List dense={true}>
              {contacts.map((contact) => (
                <ListItem className={classes.noPadding}>
                  <ListItemIcon className={classes.footerText}>
                    <contact.icon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>
                    <Link href="#" underline="none" className={classes.footerText}>{contact.text}</Link>
                    </Typography>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </div>






            </Grid>
          </Grid>
      </footer>
    </div>
  );
}


export default Footer
