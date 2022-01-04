import React from "react";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import "../OptionalInfo/StudentInfo/StudentInfo.css";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import useStepStates from "../../hooks/useStepStates";
import FormInput from "../FormInput/FormInput";
import "./MustInfo.css";

export default function MustInfo() {
  const { setCourrentStep, userData, setUserData } = useStepStates();

  /// Input filed Object which containts input attributes and label etc.
  const inputArray = [
    {
      id: 1,
      label: "নাম",
      name: "studentName",
      type: "text",
      placeholder: "Student Name",
      required: "required",
    },
    {
      id: 2,
      label: "পিতার নাম",
      name: "fatherName",
      type: "text",
      placeholder: "Father Name",
      required: "required",
    },
    {
      id: 3,
      label: "জন্ম তারিখ",
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      required: "required",
    },
    {
      id: 4,
      label: "মোবাইল নাম্বার",
      name: "mobileNumber",
      type: "text",
      placeholder: "Mobile Number",
      required: "required",
    },
  ];
  // second array
  const inputArray2 = [
    {
      id: 1,
      label: "ক্লাস",
      name: "studentClass",
      type: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      placeholder: "Student Class",
      required: "required",
    },
    {
      id: 2,
      label: "ভর্তির তারিখ",
      name: "admissionDate",
      type: "date",
      placeholder: "Admission Date",
      required: "required",
    },
    {
      id: 3,
      label: "ভর্তি পরীক্ষার মার্কস",
      name: "admissionTestMarks",
      type: "number",
      placeholder: "Admission Test Marks",
      required: "required",
    },
    {
      id: 4,
      label: "ভর্তির ফিস",
      name: "admissionFee",
      type: "number",
      placeholder: "Admission Fee",
      required: "required",
    },
  ];

  ////////////////////////
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...userData };
    newInfo[field] = value;
    setUserData(newInfo);
  };
  console.log(userData);
  //////////////////////
  const handleOnNextStep = (e) => {
    e.preventDefault();
    setCourrentStep(2);
  };
  return (
    <Box component="form" onSubmit={handleOnNextStep} sx={{ my: 2 }}>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ mx: "auto" }}>
            <Box className="student-info" sx={{ width: "87%", mx: "auto " }}>
              {inputArray.map((inputs) => {
                return (
                  <FormInput
                    key={inputs.id}
                    {...inputs}
                    value={userData[inputs.name]}
                    handleOnBlur={handleOnBlur}
                  />
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="student-info" sx={{ width: "87%", mx: "auto " }}>
              {inputArray2.map((inputs) => {
                return (
                  <FormInput
                    key={inputs.id}
                    {...inputs}
                    value={userData[inputs.name]}
                    handleOnBlur={handleOnBlur}
                  />
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* Button box next and back button  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 3,
          px: 0.5,
        }}
      >
        <div>
          <Button
            disabled
            variant="outlined"
            color="error"
            style={{
              verticalAlign: "middle",
              borderRadius: "50%",
              width: "64px",
              height: "64px",
            }}
          >
            <HiOutlineArrowLeft
              style={{ verticalAlign: "middle", fontSize: "1.5rem" }}
            />
          </Button>
        </div>
        <div>
          <Button
            type="submit"
            className="custom-btn-forward "
            variant="contained"
          >
            <HiOutlineArrowRight
              style={{
                fontSize: "1.5rem",
              }}
            />
          </Button>
        </div>
      </Box>
    </Box>
  );
}
