import { TextField } from "@material-ui/core";
import React from "react";
import { Formik, Form, Field } from "formik";
import { number, object, string, date } from "yup";
import { Button, Box, FormGroup } from "@material-ui/core";
import DatePicker from "../DatePicker/DatePicker";
import InputError from "../InputError/InputError";

const min = new Date();
const minDate = `${min.getMonth() + 1}/${min.getDate()}/${min.getFullYear()}`;
const max = new Date();

const validationSchema = object({
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
  address: string()
    .min(5)
    .required("Your address is required"),
  qualifications: string()
});

export const UpdateOffer = ({offer, setSnackbar, closeDialog }) => {
  const initialValues = {
    startDate: offer.startDate,
    endDate: offer.startDate,
    pricePerHour: offer.pricePerHour,
    address: offer.address,
    qualifications: offer.preferedQualification
  };

  const handleSubmit = (values) => {
    setSnackbar("Updated Successfully");
    closeDialog();
  };
  
  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={({ values }) => handleSubmit(values)}
      >
      {({ values, setFieldValue }) => (
        <Form id="update-offer-form">
          <FormGroup>
            <Field
              id="update-offer-startDate"
              as={DatePicker}
              name="startDate"
              label="Start date"
              value={values.startDate}
              onChange={(value) => setFieldValue("startDate", value)}
            />
            <InputError name="startDate" message="Invalid start date" />
          </FormGroup>
          <FormGroup>
            <Field
              id="update-offer-endDate"
              as={DatePicker}
              name="endDate"
              label="End date"
              value={values.endDate}
              onChange={(value) => setFieldValue("endDate", value)}
            />
            <InputError name="endDate" message="Invalid end date" />
          </FormGroup>
          <Box width="100%" mb={2}>
            <FormGroup>
              <Field
                id="update-offer-pricePerHour"
                variant="outlined"
                name="pricePerHour"
                type="number"
                as={TextField}
                label="Price Per Hour"
              />
              <InputError name="pricePerHour" message="Invalid price" />
            </FormGroup>
          </Box>
          <Box width="100%" mb={2} mt={2}>
            <FormGroup>
              <Field
                id="update-offer-address"
                variant="outlined"
                name="address"
                type="text"
                as={TextField}
                label="Your Address"
              />
              <InputError name="address" message="Invalid address" />
            </FormGroup>
          </Box>
          <Box width="100%" mb={2} mt={2}>
            <FormGroup>
              <Field
                id="update-offer-qualifications"
                variant="outlined"
                name="qualifications"
                type="textarea"
                as={TextField}
                label="Prefered Qualifications"
              />
              <InputError name="qualifications" message="Invalid text" />
            </FormGroup>
          </Box>
          <Box width="100%" my={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Box>
        </Form>
      )}
      </Formik>
    </div>
    );
};