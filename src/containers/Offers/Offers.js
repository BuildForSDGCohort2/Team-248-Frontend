import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Checkbox, Divider, FormControl, 
  FormControlLabel, FormGroup, 
  FormLabel, Slider, Typography } from "@material-ui/core";
import { OffersList } from "../../components/OffersList/OffersList";
import IndexNavbar from "../Navbars/IndexNavbar";
import Footer from "../Footer/Footer";
import "./Offers.scss"
import { axiosInstance } from "../../network/apis";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    width: "80%",
    margin: "0 auto",
    marginTop: "150px"
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  divider: {
    margin: "10px 0"
  },
  slider:{
    color: "#e44463"
  },
  checkboxColor:{
    color: "#e44463"
  }
}));

function valuetext(value) {
  return `${value}`;
}

const Offers = () => {
  const [PriceRangeValue, setPriceRangeValue] = React.useState([0, 10]);
  const [ExpRangeValue, setExpRangeValue] = React.useState([0, 5]);
  const [offersList, setOffersList] = React.useState([])
  const [offers, setOffers] = React.useState([])
  const token = localStorage.getItem('token');

  useEffect(() => {
    axiosInstance.get("/offers", { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      setOffersList(res.data.data);
      setOffers(res.data.data);
    }).catch(err => {
      console.log(err);
    });
  }, [token])

  const handlePriceRangeChange = (event, newValue) => {
    const filteredList = offers.filter(item => item.price_per_hour >= newValue[0] 
      && item.price_per_hour <= newValue[1])
    setOffersList(filteredList)
    setPriceRangeValue(newValue);
  };
  const handleExpRangeChange = (event, newValue) => {
    const filteredList = offers.filter(item => item.exp_from >= newValue[0] 
      && item.exp_to<= newValue[1])
    setOffersList(filteredList)
    setExpRangeValue(newValue);
  };
  const handleCategoryChange = (event) => {
    const filteredList = offers.filter(item => item.category.id === parseInt(event.target.value));
    setOffersList(filteredList)
  };

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <IndexNavbar />
      <Grid container spacing={3}>
        <Grid xs={12} item>
          <a className="text-danger offer-text"href="/create-offer">
            <i className="nc-icon nc-simple-add text-danger offer-icon" /> 
            Create Offer 
          </a>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <FormControl component="fieldset" onChange={handleCategoryChange}>
              <FormLabel component="legend">Categories</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox name="baby_sitter" className={classes.checkboxColor}/>}
                  label="Baby Sitter" value={1}
                />
                <FormControlLabel
                  control={<Checkbox name="elderly_sitter" className={classes.checkboxColor}/>}
                  label="Elderly Sitter" value={2}
                />
              </FormGroup>
            </FormControl>

            <Divider className={classes.divider}/>

            <Typography id="price-range-slider" gutterBottom>
              Price Per Hour
            </Typography>
            <Slider
              className={classes.slider}
              value={PriceRangeValue}
              onChange={handlePriceRangeChange}
              valueLabelDisplay="auto"
              aria-labelledby="price-range-slider"
              getAriaValueText={valuetext}
              step={1}
              marks
              min={0}
              max={100}
            />

            <Divider className={classes.divider}/>

            <Typography id="experiences" gutterBottom>
              Experiences
            </Typography>
            <Slider
              className={classes.slider}
              value={ExpRangeValue}
              onChange={handleExpRangeChange}
              valueLabelDisplay="auto"
              aria-labelledby="experience-range-slider"
              getAriaValueText={valuetext}
              step={1}
              marks
              min={0}
              max={10}
            />
          {/* <CalendarsDateRangePicker/> */}
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <OffersList offers={offersList}/>
        </Grid>
        <Footer/>
      </Grid>
    </div>
  );
};

export default Offers;
