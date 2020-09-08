import React from "react";
import { Formik, Form, Field } from "formik";
import { number, object, string, date } from "yup";
import { Button, Box, TextField, FormGroup } from "@material-ui/core";
import DatePicker from "./DatePicker";
import InputError from "./InputError";
import {axiosInstance} from "../../network/apis/index"

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
  qualifications: string().min(20)
});
const handleSubmit = (values, setSnackbar) => {
  axiosInstance.post(`/api/create-offer`, values).then((res)=>{
    setSnackbar(res.data.message, true);
  }).catch((error)=>{
    setSnackbar(error.data.message, false);
  })
}

const OfferForm = ({setSnackbar}) => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={({ values }) => handleSubmit(values, setSnackbar)}
    >
      {({ values, setFieldValue }) => (
        <Form id="create-offer-form">
          <FormGroup>
            <Field
              id="create-offer-startDate"
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
              id="create-offer-endDate"
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
                id="create-offer-pricePerHour"
                variant="outlined"
                name="pricePerHour"
                type="number"
                as={TextField}
                label="Price per hour"
              />
              <InputError name="pricePerHour" message="Invalid price" />
            </FormGroup>
          </Box>
          <Box width="100%" mb={2} mt={2}>
            <FormGroup>
              <Field
                id="create-offer-address"
                variant="outlined"
                name="address"
                type="text"
                as={TextField}
                label="Your address"
              />
              <InputError name="address" message="Invalid address" />
            </FormGroup>
          </Box>
          <Box width="100%" mb={2} mt={2}>
            <FormGroup>
              <Field
                id="create-offer-qualifications"
                variant="outlined"
                name="qualifications"
                type="text"
                as={TextField}
                label="prefered qualifications"
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
  );
};

export default OfferForm;
