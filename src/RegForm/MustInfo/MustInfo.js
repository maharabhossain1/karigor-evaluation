import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, FormControl, MenuItem } from "@mui/material";
import Grid from "@mui/material/Grid";

const classinformations = [
  {
    value: "কাফিয়া",
    label: "কাফিয়া",
  },
  {
    value: "শরহে বেকায়া",
    label: "শরহে বেকায়া",
  },
  {
    value: "মিশকাত",
    label: "মিশকাত",
  },
  {
    value: "দাওরায়ে হাদীস",
    label: "দাওরায়ে হাদীস",
  },
];

export default function MustInfo() {
  const [mustInfoData, setMustInfoData] = useState({});
  const [classData, setClassData] = React.useState("");

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...mustInfoData };
    newInfo[field] = value;
    setMustInfoData(newInfo);
  };
  const handleClassData = (event) => {
    const studentClass = event.target.value;
    setClassData(studentClass);
  };
  console.log(mustInfoData, classData);
  return (
    <Box component="form" sx={{ width: "75%", mx: "auto", flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth sx={{ m: 3 }} variant="outlined">
            <TextField
              id="outlined-basic"
              label="Student Name"
              name="studentName"
              onBlur={handleOnBlur}
              variant="outlined"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 3 }} variant="outlined">
            <TextField
              id="outlined-basic"
              label="Father Name"
              name="fatherName"
              onBlur={handleOnBlur}
              variant="outlined"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 3 }} variant="outlined">
            <TextField
              id="outlined-basic"
              label="Mobile Number"
              name="mobileNumber"
              onBlur={handleOnBlur}
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
              name="studentClass"
              value={classData}
              onBlur={handleOnBlur}
              onChange={handleClassData}
            >
              {classinformations.map((option) => (
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
              name="admissionDate"
              onBlur={handleOnBlur}
              variant="outlined"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 3 }} variant="outlined">
            <TextField
              id="outlined-basic"
              label="Admission Test Marks"
              name="admissionTestMarks"
              onBlur={handleOnBlur}
              variant="outlined"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 3 }} variant="outlined">
            <TextField
              id="outlined-basic"
              label="Admisssion Fee"
              name="admissionFee"
              onBlur={handleOnBlur}
              variant="outlined"
            />
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
