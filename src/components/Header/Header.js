import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";


import "./Header.scss";


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    backgroundColor: "#ffffff",
    //borderBottom: `1px solid ${theme.palette.divider}`,
  },
  brand: {
    color: "#560a4e",
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
    color: "#560a4e",
    margin: theme.spacing(1, 10),
  },
  nav: {
    margin: theme.spacing(1, 10),
  
  },
  link: {
    color: "#560a4e",
    margin: theme.spacing(1, 3),
    fontWeight: "bold",
    textDecorationLine: "none !important",
     textTransform:"capitalize",
    "&:hover": {
      borderBottom: "4px solid #aaf1d1",
    },
  },
  loginButton: {
    borderRadius: "20px",
    backgroundColor: "#560a4e",
    color: "#ffffff",
    textTransform:"capitalize",
  }
}));


const Header = function () {
  const classes = useStyles();


  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="default"
            noWrap
            className={classes.toolbarTitle}
          >
            BabeJo
          </Typography>
          <nav className={classes.nav}>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Sitters
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Apply
            </Link>
          </nav>
          <Button
            href="#"
            color="primary"
            variant="contained"
            className={classes.loginButton}
            elevation={0}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};



export default Header;
