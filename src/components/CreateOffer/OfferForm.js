import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { number, object, string, date } from "yup";
import DatePicker from "./DatePicker";
import { Button, Box, TextField, FormGroup } from "@material-ui/core";

const min = new Date();
const minDate = `${min.getMonth() + 1}/${min.getDate()}/${min.getFullYear()}`;
const max = new Date();

const initialValues = {
  startDate: null,
  endDate: null,
  pricePerHour: null,
  address: null,
  qualifications: null
};
const validationSchema = object({
  startDate: date()
    .default(new Date(min))
    .min(min, `start date should be equal or later than ${minDate}`)
    .required("Start date is required"),
  endDate: date()
    .default(new Date(max))
    .min(min, `end date should be equal or later than ${minDate}`)
    .required("End date is required"),
  pricePerHour: number()
    .required("Price per hour is required")
    .min(1, `you can not choose a price less than 1$ per hour`),
  address: string()
    .min(5)
    .required("You address is required"),
  qualifications: string().min(20)
});

const OfferForm = () => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={({ values }) => console.log(values)}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <FormGroup>
            <Field
              as={DatePicker}
              name="startDate"
              label="Start date"
              value={values.startDate}
              onChange={value => setFieldValue("startDate", value)}
            />
            <ErrorMessage name="startDate" />
          </FormGroup>
          <FormGroup>
            <Field
              as={DatePicker}
              name="endDate"
              label="End date"
              value={values.endDate}
              onChange={value => setFieldValue("endDate", value)}
            />
            <ErrorMessage name="endDate" />
          </FormGroup>
          <Box width="100%" mb={2}>
            <FormGroup>
              <Field
                variant="outlined"
                name="pricePerHour"
                type="number"
                as={TextField}
                label="Price per hour"
              />
              <ErrorMessage name="pricePerHour" />
            </FormGroup>
          </Box>
          <Box width="100%" mb={2} mt={2}>
            <FormGroup>
              <Field
                variant="outlined"
                name="address"
                type="text"
                as={TextField}
                label="Your address"
              />
              <ErrorMessage name="address" />
            </FormGroup>
          </Box>
          <Box width="100%" mb={2} mt={2}>
            <FormGroup>
              <Field
                variant="outlined"
                name="qualifications"
                type="text"
                as={TextField}
                label="prefered qualifications"
              />
              <ErrorMessage name="qualifications" />
            </FormGroup>
          </Box>
          <Box width="100%" my={2}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default OfferForm;
