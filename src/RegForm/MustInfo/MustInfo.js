import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, FormControl, MenuItem } from "@mui/material";
import Grid from "@mui/material/Grid";

const currencies = [
  {
    value: "class1",
    label: "কাফিয়া",
  },
  {
    value: "class2",
    label: "শরহে বেকায়া",
  },
  {
    value: "class3",
    label: "মিশকাত",
  },
  {
    value: "class4",
    label: "দাওরায়ে হাদীস",
  },
];

export default function MustInfo() {
  const [mustInfoData, setMustInfoData] = useState({});
  const [currency, setCurrency] = React.useState("class1");
  const [dateValue, setDateValue] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  // Date Changing handle funtion
  const handleDateChange = (newDateValue) => {
    setDateValue(newDateValue);
  };
  return (
    <Box component="form" sx={{ width: "75%", mx: "auto", flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth sx={{ m: 3 }} variant="outlined">
            <TextField
              id="outlined-basic"
              label="Student Name"
              variant="outlined"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 3 }} variant="outlined">
            <TextField
              id="outlined-basic"
              label="Father Name"
              variant="outlined"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 3 }} variant="outlined">
            <TextField
              id="outlined-basic"
              label="Mobile Number"
              variant="outlined"
            />
          </FormControl>
          <FormControl></FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth sx={{ m: 3 }} variant="outlined">
            <TextField
              id="outlined-select-currency"
              select
              label="Select Your Class"
              value={currency}
              onChange={handleChange}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <FormControl fullWidth sx={{ m: 3 }} variant="outlined">
            <TextField
              id="outlined-basic"
              label="Admission Date"
              variant="outlined"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 3 }} variant="outlined">
            <TextField
              id="outlined-basic"
              label="Admission Test Marks"
              variant="outlined"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 3 }} variant="outlined">
            <TextField
              id="outlined-basic"
              label="Admisssion Fee"
              variant="outlined"
            />
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
