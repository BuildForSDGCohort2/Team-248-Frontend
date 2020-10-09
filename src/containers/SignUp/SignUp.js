import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Copyright from "../../components/CopyRight";
import "./SignUp.scss";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Masseges from "../../assets/Local/messages";
import { axiosInstance } from "../../network/apis";
import History from "../../routes/History";
import Footer from "../Footer/Footer";

export default class SignUp extends React.Component {

  state = {
    name: {
      value: "",
      error: "",
    },
    email: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: ""
    },
    passwordConfirmation: {
      value: "",
      error: ""
    },
    phone: {
      value: "",
      error: ""
    },
    gender: {
      value: "male",
      error: ""
    },
    address: {
      value: "",
      error: ""
    },
    dob: {
      value: "",
      error: ""
    },
    profileImg: {
      value: "",
      error: "",
    },
    idImg: {
      value: "",
      error: "",
    },
    networkError: ""
  }

  imgTypes = ["jpeg", "png", "jpg"];

  handleChange = (event) => {
    const required = event.target.value !== "";
    this.setState({
      [event.target.name]: {
        value: event.target.value,
        error: (!required && "This feild is required"),
      }
    });
  }

  handleEmailChange = (event) => {
    const validEmail = /\S+@\S+\.\S+/.test(event.target.value);
    const required = event.target.value !== "";
    this.setState({
      email: {
        value: event.target.value,
        error: (!required && "This field is required")
        || (!validEmail && "Not valid"),
      }
    });
  }

  handlePasswordChange = (event) => {
    const min = event.target.value.length >= 6;
    const max = event.target.value.length <= 12;
    this.setState({
      password: {
        value: event.target.value,
        error: ((!min || !max) 
        && "This field should be 6 minimum charachter and 12 maximum charachter")        
      }
    });
  }

  handleConfirmPassword = (event) => {
    const matched = event.target.value === this.state.password.value && event.target.value !== "";
    this.setState({
      passwordConfirmation: {
        value: event.target.value,
        error: (!matched && "Password doesn't match")        
      }
    });
  }

  handlePhoneNumberChange = (event) => {
    const validPhone = /^[0-9]*$/.test(event.target.value);
    this.setState({
      phone: {
        value: event.target.value,
        error: (!validPhone && "Invalid Phone number")        
      }
    });
  }

  handleImgChange = (event) => {
    const file = event.target.files[0];
    const imgMemeType = file.type.split("/")[1]; // Where file type is like "image/png"
    const validMemeType = this.imgTypes.indexOf(imgMemeType) !== -1;

    this.setState({
      [event.target.name]: {
        value: file,
        error: (!validMemeType && Masseges.en.regitserFormValidation.notValidMemetype),
      }
    });
  }

  validate = (formBody) => {
    this.handleChange({ target: { 
      value: formBody.name.value, 
      name:  formBody.name.name
    } });
    this.handleEmailChange({ target: { 
      value: formBody.email.value, 
    } });
    this.handlePasswordChange({ target: { 
      value: formBody.password.value, 
    } });
    this.handleConfirmPassword({ target: { 
      value: formBody.passwordConfirmation.value, 
    } });
    this.handleChange({ target: { 
      value: formBody.phone.value,
      name: formBody.phone.name
    } });
    this.handleChange({ target: { 
      value: formBody.address.value, 
      name: formBody.address.name
    } });
  }

  handleSubmission = (event) => {
    event.preventDefault();
    this.validate(event.target);

    let data = new FormData();
    data.append("name", event.target.name.value);
    data.append("email", event.target.email.value);
    data.append("phone_number", event.target.phone.value);
    data.append("password", event.target.password.value);
    data.append("password_confirmation", event.target.passwordConfirmation.value);
    data.append("address", event.target.address.value);
    data.append("gender", event.target.gender.value);
    data.append("dob", event.target.dob.value);
    data.append("id_img", this.state.idImg.value);
    data.append("profile_img", this.state.profileImg.value);

    axiosInstance.post("/api/register", data, {
      headers:{
        "Content-Type": "multipart/form-data"
      }
    })
    .then((res) => {
      localStorage.setItem("token", res.data.data.token);
      History.push("/");
    })
    .catch(async (err) => {
      if(!err.response){
        this.setState({networkError:"Error:Network Error"});
      }else{
        this.setState({networkError:err.response.data.message});
       }
    });
  }

  render(){
    return (
      <Container component="main" maxWidth="xs" className="register-container">
        <div className="paper">
          <Typography component="h1" variant="h3">
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
                  name="passwordConfirmation"
                  onChange={this.handleConfirmPassword}
                  label="Confirm Password"
                  type="password"
                  id="password_confirmation"
                />
                <small className="error d-block">{this.state.passwordConfirmation.error}</small>
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
                  id="dob"
                  name="dob"
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
                <RadioGroup aria-label="gender" name="gender" value={this.state.gender.value} 
                  onChange={this.handleChange}>
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                </RadioGroup>
              </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormLabel component="legend">Choose your Profile Image</FormLabel>
                <TextField
                  type="file"
                  id="profile_img"
                  name="profileImg"
                  fullWidth
                  variant="outlined"
                  onChange={this.handleImgChange}
                />
                <small className="error d-block">{this.state.profileImg.error}</small>

              </Grid>
              <Grid item xs={12}>
                <FormLabel component="legend">Add Image for your National ID card</FormLabel>
                <TextField
                  type="file"
                  id="id_img"
                  name="idImg"
                  variant="outlined"
                  fullWidth
                  onChange={this.handleImgChange}
                />
              </Grid>
              <small className="error d-block">{this.state.idImg.error}</small>
            
            </Grid>
  
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit-btn"
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
        <Footer/>
      </Container>
  );
  }
}

