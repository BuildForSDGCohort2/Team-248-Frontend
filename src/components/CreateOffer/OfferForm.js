import React from "react";
import { Formik, Form, Field } from "formik";
import { number, object, string, date } from "yup";
import { Button, Box, TextField, FormGroup } from "@material-ui/core";
import DatePicker from "../DatePicker/DatePicker";
import InputError from "../InputError/InputError";
import { axiosInstance } from "../../network/apis/index";

const min = new Date();
const minDate = `${min.getMonth() + 1}/${min.getDate()}/${min.getFullYear()}`;
const max = new Date();

const initialValues = {
  title: "",
  description: "",
  startDate: null,
  endDate: null,
  pricePerHour: "",
  address: "",
  exp_from: "",
  exp_to: "",
  qualifications: ""
};

const validationSchema = object({
  title: string()
    .required("Title is required"),
  description: string()
    .required("Description is required"),
  startDate: date()
    .default(new Date(min))
    .min(min, `Start date should be equal or later than ${minDate}`)
    .required("Start date is required"),
  endDate: date()
    .default(new Date(max))
    .min(min, `End date should be equal or later than ${minDate}`)
    .required("End date is required"),
  pricePerHour: number()
    .required("Price per hour is required")
    .min(1, "You can not choose a price less than 1$ per hour"),
  exp_from: number()
    .min(1, "You can not choose less then 1 year of experiences"),
  exp_to: number()
    .min(1, "You can not choose less then 1 year of experiences"),
  address: string()
    .min(5)
    .required("Your address is required"),
  qualifications: string()
});

const handleSubmit = (values, setSnackbar) => {
  axiosInstance.post("/create-offer", values).then((res) => {
    setSnackbar(res.data.message, true);
  }).catch((error) => {
    setSnackbar(error?.data?.message, false);
  });
};

const OfferForm = ({ setSnackbar }) => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={({ values }) => handleSubmit(values, setSnackbar)}
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
          <Box width="100%">
            <FormGroup width="100%">
              <Field
                id="create-offer-startDate"
                as={DatePicker}
                className="date-input"
                name="startDate"
                label="Start date *"
                value={values.startDate}
                onChange={(value) => setFieldValue("startDate", value)}
              />
              <InputError name="startDate" message="Invalid start date" />
            </FormGroup>
          </Box>
          <Box width="100%">
            <FormGroup className="date-input">
              <Field
                id="create-offer-endDate"
                as={DatePicker}
                name="endDate"
                label="End date *"
                value={values.endDate}
                onChange={(value) => setFieldValue("endDate", value)}
              />
              <InputError name="endDate" message="Invalid end date" />
            </FormGroup>
          </Box>
          <Box width="100%" mb={2}>
            <FormGroup>
              <Field
                id="create-offer-pricePerHour"
                variant="outlined"
                name="pricePerHour"
                type="number"
                as={TextField}
                min="1"
                label="Price per hour *"
              />
              <InputError name="pricePerHour" message="Invalid price" />
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
                name="qualifications"
                type="text"
                as={TextField}
                label="Prefered Qualifications"
                multiline
                rows={4}
                rowsMax={4}
              />
              <InputError name="qualifications" message="Invalid text" />
            </FormGroup>
          </Box>
          <Box width="100%" mb={2}>
            <FormGroup>
              <p>Years of Experience</p>
              <div style={{display: "flex"}}>
                <Field
                  id="create-offer-experience-from"
                  variant="outlined"
                  name="exp_from"
                  type="number"
                  as={TextField}
                  label="From"
                />
                <Field
                  id="create-offer-experience-to"
                  variant="outlined"
                  name="exp_to"
                  type="number"
                  as={TextField}
                  label="To"
                />
              </div>
              <InputError name="experience" message="Invalid experience" />
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
