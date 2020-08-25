import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Copyright from '../../components/CopyRight'
import './SignUp.scss'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


export default class SignUp extends React.Component {

  state = {
    name: {
      value: '',
      error: '',
    },
    email: {
      value: '',
      error: '',
    },
    password: {
      value: '',
      error: ''
    },
    password_confirmation: {
      value: '',
      error: ''
    },
    phone: {
      value: '',
      error: ''
    },
    address: {
      value: '',
      error: ''
    },
    date_of_birth: {
      value: '',
      error: ''
    },
  }

  handleChange = (event) => {
    const required = event.target.value !== ""
    this.setState({
        [event.target.name]: {
          value: event.target.value,
          error: (!required && "This feild is required"),
        }
      })
  }

  handleEmailChange = (event) => {
    const validEmail = /\S+@\S+\.\S+/.test(event.target.value);
    const required = event.target.value !== ""
    this.setState({
        email: {
          value: event.target.value,
          error: (!required && "This field is required")
          || (!validEmail && "Not valid"),
        }
      })
  }

  handlePasswordChange = (event) => {
    const min = event.target.value.length >= 6
    const max = event.target.value.length <= 12
    this.setState({
        password: {
          value: event.target.value,
          error: ((!min || !max) 
          && "This field should be 6 minimum charachter and 12 maximum charachter")        }
      })
  }

  handleConfirmPassword = (event) =>{
    const matched = event.target.value === this.state.password.value && event.target.value !== ""
    this.setState({
        password_confirmation: {
          value: event.target.value,
          error: (!matched && "Password doesn't match")        }
      })
  }

  handlePhoneNumberChange = (event) =>{
    const validPhone = /^[0-9]*$/.test(event.target.value)
    this.setState({
        phone: {
          value: event.target.value,
          error: (!validPhone && "Invalid Phone number")        }
      })
  }

  validate = (event) => {
    this.handleChange({ target: { 
      value: event.target.name.value, 
      name:  event.target.name.name
    } })
    this.handleEmailChange({ target: { 
      value: event.target.email.value, 
    } })
    this.handlePasswordChange({ target: { 
      value: event.target.password.value, 
    } })
    this.handleConfirmPassword({ target: { 
      value: event.target.password_confirmation.value, 
    } })
    this.handleChange({ target: { 
      value: event.target.phone.value,
      name: event.target.phone.name
    } })
    this.handleChange({ target: { 
      value: event.target.address.value, 
      name: event.target.address.name
    } })
  }

  handleSubmission = (event) => {
    event.preventDefault()
    this.validate(event)
  }

  render(){
    return (
      <Container component="main" maxWidth="xs">
        <div className="paper">
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form onSubmit={this.handleSubmission}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="name"
                  variant="outlined"
                  onChange={this.handleChange}
                  fullWidth
                  id="name"
                  label="Your Name"
                  autoFocus
                />
                <small className="error d-block">{this.state.name.error}</small>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  onChange={this.handleEmailChange}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                <small className="error d-block">{this.state.email.error}</small>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  onChange={this.handlePasswordChange}
                  id="password"
                  type="password"
                  label="Password"
                  name="password"
                  autoComplete="current-password"
                />
                <small className="error d-block">{this.state.password.error}</small>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="password_confirmation"
                  onChange={this.handleConfirmPassword}
                  label="Confirm Password"
                  type="password"
                  id="password_confirmation"
                />
                <small className="error d-block">{this.state.password_confirmation.error}</small>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  onChange={this.handlePhoneNumberChange}
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                />
                <small className="error d-block">{this.state.phone.error}</small>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="address"
                  onChange={this.handleChange}
                  label="Your address"
                  name="address"
                  autoComplete="address"
                />
              </Grid>
              <Grid item xs={12}>
                <FormLabel component="legend">Date of Birth</FormLabel>
                <TextField
                  id="date_of_birth"
                  name="date_of_birth"
                  type="date"
                  onChange={this.handleChange}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender" value="male">
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                </RadioGroup>
              </FormControl>
              </Grid>
              
            </Grid>
  
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className=""
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
  );
  }
}