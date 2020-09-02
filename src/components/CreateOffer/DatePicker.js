import React from "react";
import { Box } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  // KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
const DatePicker = ({ label, value, onChange }) => {
  return (
    <Box width="100%" mb={2}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          id="data-picker-dialog"
          label={label}
          inputVariant="outlined"
          format="MM/dd/yyyy"
          value={value}
          onChange={onChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </MuiPickersUtilsProvider>
    </Box>
  );
};

export default DatePicker;
