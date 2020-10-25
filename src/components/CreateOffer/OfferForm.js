import React from "react";
import { Formik, Form, Field } from "formik";
import { number, object, string, date } from "yup";
import { Button, Box, TextField, FormGroup } from "@material-ui/core";
import DatePicker from "../DatePicker/DatePicker";
import InputError from "../InputError/InputError";
import { axiosInstance } from "../../network/apis/index";
import History from "../../routes/History";

const min = new Date();
const minDate = `${min.getMonth() + 1}/${min.getDate()}/${min.getFullYear()}`;
const max = new Date();

const initialValues = {
  title: "",
  description: "",
  category_id: "",
  start_at: null,
  end_at: null,
  price_per_hour: "",
  address: "",
  exp_from: "",
  exp_to: "",
  preferred_qualifications: ""
};

const validationSchema = object({
  title: string()
    .required("Title is required"),
  description: string()
    .required("Description is required"),
  category_id: number()
    .required("Category is required"),
  start_at: date()
    .default(new Date(min))
    .min(min, `Start date should be equal or later than ${minDate}`)
    .required("Start date is required"),
  end_at: date()
    .default(new Date(max))
    .min(min, `End date should be equal or later than ${minDate}`)
    .required("End date is required"),
  price_per_hour: number()
    .required("Price per hour is required")
    .min(1, "You can not choose a price less than 1$ per hour"),
  exp_from: number()
    .min(1, "You can not choose less then 1 year of experiences"),
  exp_to: number()
    .min(1, "You can not choose less then 1 year of experiences"),
  address: string()
    .min(5)
    .required("Your address is required"),
  preferred_qualifications: string()
});

const handleSubmit = (values, setSnackbar) => {
  values.start_at = `${values.start_at.getMonth() + 1}/${values.start_at.getDate()}/${values.start_at.getFullYear()}`
  values.end_at = `${values.end_at.getMonth() + 1}/${values.end_at.getDate()}/${values.end_at.getFullYear()}`
  
  const token = localStorage.getItem('token');

  axiosInstance.post("/offers", values, { headers: { Authorization: `Bearer ${token}` } } )
  .then((res) => {
    setSnackbar(res.data.message, true);
  }).catch((error) => {
    setSnackbar(error?.data?.message, false);
  });

  setTimeout(() => History.push('/offers'), 2000)
};

const OfferForm = ({ setSnackbar }) => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values) => handleSubmit(values, setSnackbar)}
    >
      {({ values, setFieldValue }) => (
        <Form id="create-offer-form">
          <Box width="100%" mb={2}>
            <FormGroup>
              <Field
                id="create-offer-title"
                variant="outlined"
                name="title"
                type="text"
                as={TextField}
                label="Title *"
              />
              <InputError name="title" message="Invalid title" />
            </FormGroup>
          </Box>
          <Box width="100%" mb={2}>
            <FormGroup>
              <Field
                id="create-offer-description"
                variant="outlined"
                name="description"
                type="text"
                as={TextField}
                label="Description *"
              />
              <InputError name="description" message="Invalid description" />
            </FormGroup>
          </Box>
          <Box width="100%" mb={2}>
            <FormGroup>
              <Field as="select" name="category_id" className="category-input">
                <option value="">Select Category *</option>
                <option value="1">BabySitter</option>
                <option value="2">Elerly care</option>
              </Field>
              <InputError name="category" message="Invalid category" />
            </FormGroup>
          </Box>
          <Box width="100%">
            <FormGroup width="100%">
              <Field
                id="create-offer-startDate"
                as={DatePicker}
                className="date-input"
                name="start_at"
                label="Start date *"
                value={values.start_at}
                onChange={(value) => setFieldValue("start_at", value)}
              />
              <InputError name="start_at" message="Invalid start date" />
            </FormGroup>
          </Box>
          <Box width="100%">
            <FormGroup className="date-input">
              <Field
                id="create-offer-endDate"
                as={DatePicker}
                name="end_at"
                label="End date *"
                value={values.end_at}
                onChange={(value) => setFieldValue("end_at", value)}
              />
              <InputError name="end_at" message="Invalid end date" />
            </FormGroup>
          </Box>
          <Box width="100%" mb={2}>
            <FormGroup>
              <Field
                id="create-offer-pricePerHour"
                variant="outlined"
                name="price_per_hour"
                type="number"
                as={TextField}
                min="1"
                label="Price per hour *"
              />
              <InputError name="price_per_hour" message="Invalid price" />
            </FormGroup>
          </Box>
          <Box width="100%" mb={2}>
            <FormGroup>
              <Field
                id="create-offer-address"
                variant="outlined"
                name="address"
                type="text"
                as={TextField}
                label="Your address *"
              />
              <InputError name="address" message="Invalid address" />
            </FormGroup>
          </Box>
          <Box width="100%" mb={2}>
            <FormGroup>
              <Field
                id="create-offer-qualifications"
                variant="outlined"
                name="preferred_qualifications"
                type="text"
                as={TextField}
                label="Prefered Qualifications"
                multiline
                rows={4}
                rowsMax={4}
              />
              <InputError name="preferred_qualifications" message="Invalid text" />
            </FormGroup>
          </Box>
          <Box width="100%" mb={2}>
            <FormGroup>
              <p>Requested Years of Experience</p>
              <div style={{display: "flex"}}>
                <Field
                  id="create-offer-experience-from"
                  variant="outlined"
                  name="exp_from"
                  type="number"
                  as={TextField}
                  label="From"
                />
                <InputError name="exp_from" message="Invalid experience" />
                <Field
                  id="create-offer-experience-to"
                  variant="outlined"
                  name="exp_to"
                  type="number"
                  as={TextField}
                  label="To"
                />
                <InputError name="exp_to" message="Invalid experience" />
              </div>
            </FormGroup>
          </Box>
          <Box width="100%" my={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth size="large">
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default OfferForm;
