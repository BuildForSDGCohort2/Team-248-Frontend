import React from "react";
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

export const offers = [
	{
    id: 1,
		title: "Baby sitter for 3 days",
		description: "I want a Baby sitter for 3 days",
		startDate: "Sep, 4 2020",
		endDate: "Sep, 7 2020",
		acceptedSitterName: "Monica",
    status: "Pendding",
    experience: 1,
    category: 1,
		hours: 3,
		pricePerHour: 10,
		preferedQualification: "I want someone who has the abilities to take care of adult boy.",
		address: "Alexandria"
  },
	{
    id: 2,
		title: "Baby sitter for one day",
		description: "I want a Baby sitter for one day",
		startDate: "Oct, 10 2020",
		endDate: "Oct, 10 2020",
		acceptedSitterName: "Eman",
    status: "Confirmed",
    experience: 2,
    hours: 2,
    category: 1,
		pricePerHour: 5.5,
		preferedQualification: "I want someone who can take care of a child during a trip",
		address: "Alexandria"
	},
	{
    id: 3,
		title: "Baby sitter for one day",
		description: "I want a Baby sitter for one day",
		startDate: "Oct, 10 2020",
		endDate: "Oct, 10 2020",
		acceptedSitterName: "Eman",
    status: "Confirmed",
    experience: 8,
    hours: 2,
    category: 1,
		pricePerHour: 8,
		preferedQualification: "I want someone who can take care of a child during a trip",
		address: "Alexandria"
	},
	{
    id: 4,
		title: "Baby sitter for one day",
		description: "I want a Baby sitter for one day",
		startDate: "Oct, 10 2020",
		endDate: "Oct, 10 2020",
		acceptedSitterName: "Eman",
		status: "Confirmed",
    hours: 2,
    category: 2,
    experience: 2,
		pricePerHour: 6.5,
		preferedQualification: "I want someone who can take care of a child during a trip",
		address: "Alexandria"
	},
	{
    id: 5,
		title: "Baby sitter for one day",
		description: "I want a Baby sitter for one day",
		startDate: "Oct, 10 2020",
		endDate: "Oct, 10 2020",
		acceptedSitterName: "Eman",
		status: "Confirmed",
    hours: 2,
    category: 2,
    experience: 4,
		pricePerHour: 20,
		preferedQualification: "I want someone who can take care of a child during a trip",
		address: "Alexandria"
	}
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    width: "80%",
    margin: "0 auto",
    marginTop: "120px"
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
  const [offersList, setOffersList] = React.useState(offers)

  const handlePriceRangeChange = (event, newValue) => {
    const filteredList = offers.filter(item => item.pricePerHour >= newValue[0] && item.pricePerHour <= newValue[1])
    setOffersList(filteredList)
    setPriceRangeValue(newValue);
  };
  const handleExpRangeChange = (event, newValue) => {
    const filteredList = offers.filter(item => item.experience >= newValue[0] && item.experience <= newValue[1])
    setOffersList(filteredList)
    setExpRangeValue(newValue);
  };
  const handleCategoryChange = (event) => {
    const filteredList = offers.filter(item => item.category === parseInt(event.target.value));
    console.log(filteredList)
    setOffersList(filteredList)
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <IndexNavbar />
      <Grid container spacing={3}>
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
