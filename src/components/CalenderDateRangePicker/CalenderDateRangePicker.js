// import * as React from "react";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import TextField from "@material-ui/core/TextField";
// import DateFnsAdapter from "@material-ui/pickers/adapter/date-fns";
// import { DateRangePicker, DateRangeDelimiter, LocalizationProvider} from "@material-ui/pickers";

// export default function CalendarsDateRangePicker() {
//   const [value, setValue] = React.useState([null, null]);

//   return (
//     <Grid container direction="column" alignItems="center">
//         <LocalizationProvider dateAdapter={DateFnsAdapter}>
//         <Typography gutterBottom> 1 calendar </Typography>
//         <DateRangePicker
//             calendars={1}
//             value={value}
//             onChange={(newValue) => setValue(newValue)}
//             renderInput={(startProps, endProps) => (
//             <React.Fragment>
//                 <TextField {...startProps} />
//                 {/* <DateRangeDelimiter> to </DateRangeDelimiter> */}
//                 <TextField {...endProps} />
//             </React.Fragment>
//             )}
//         />
//         </LocalizationProvider>
//     </Grid>
//   );
// }
