import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import ReactStars from "react-rating-stars-component";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  name: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(5),
    width: "25ch",
  },
  submit: {
    margin: theme.spacing(2, 0, 1),
  },
  error: {
    color: "red",
    margin: theme.spacing(1),
  },
}));

const RateApplicant = () => {
  const [stars, setStars] = useState(0);
  const [name, setName] = useState("Anonymous");
  const [review, setReview] = useState([]);
  const [error, setError] = useState(null);

  const classes = useStyles();

  const handleChangeStars = (event) => {
    setStars(event.target.value);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const addReview = () => {
    if (stars === 0) {
      setError("Can't submit None value!");
    } else {
      setReview((review) =>
        review.concat({
          stars,
          name,
          id: Math.random() * 100,
        })
      );
      setName("Anonymous");
      setStars(0);
      setError(null);
    }
  };

  return (
    <Container maxWidth="sm" data-test="rateApplicant">
      <Typography component="h3" variant="h5">
        Rate this applicant
      </Typography>
      <FormControl className={classes.formControl} data-test="form">
        <InputLabel id="select-label">Stars</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={stars}
          onChange={handleChangeStars}
          data-test="select"
        >
          <MenuItem value={0}>None</MenuItem>
          <MenuItem value={1}>One star</MenuItem>
          <MenuItem value={2}>Two stars</MenuItem>
          <MenuItem value={3}>Three stars</MenuItem>
          <MenuItem value={4}>Four stars</MenuItem>
          <MenuItem value={5}>Five stars</MenuItem>
        </Select>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue={name}
          onChange={handleChangeName}
          className={classes.name}
          data-test="name"
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          data-test="button"
          size="small"
          onClick={addReview}
        >
          Submit
        </Button>
        <Typography component="span" variant="body2" className={classes.error}>
          {error}
        </Typography>
      </FormControl>
      <div>
        {/* If the rate data will be shown in anther UI component, so the data should be passed as a props! */}
        {review.map(({ id, name, stars }) => (
          <ul key={id}>
            <li>
              <Typography component="span" variant="body1" data-test="review">
                {name}: <ReactStars size={30} edit={false} value={stars} />
              </Typography>
            </li>
          </ul>
        ))}
      </div>
    </Container>
  );
};

export default RateApplicant;
