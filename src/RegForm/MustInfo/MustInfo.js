import React from "react";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import "../OptionalInfo/StudentInfo/StudentInfo.css";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import useStepStates from "../../hooks/useStepStates";

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
    },
    {
      id: 2,
      label: "পিতার নাম",
      name: "fatherName",
      type: "text",
      placeholder: "Father Name",
    },
    {
      id: 3,
      label: "জন্ম তারিখ",
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
    },
    {
      id: 4,
      label: "মোবাইল নাম্বার",
      name: "mobileNumber",
      type: "text",
      placeholder: "Mobile Number",
    },
  ];
  // second array
  const inputArray2 = [
    {
      id: 1,
      label: "ক্লাস",
      name: "studentClass",
      type: "text",
      placeholder: "Student Class",
    },
    {
      id: 2,
      label: "ভর্তির তারিখ",
      name: "admissionDate",
      type: "date",
      placeholder: "Admission Date",
    },
    {
      id: 3,
      label: "ভর্তি পরীক্ষার মার্কস",
      name: "admissionTestMarks",
      type: "number",
      placeholder: "Admission Test Marks",
    },
    {
      id: 4,
      label: "ভর্তির ফিস",
      name: "admissionFee",
      type: "number",
      placeholder: "Admission Fee",
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
  //////////////////////
  const handleOnNextStep = (e) => {
    e.preventDefault();
    setCourrentStep(2);
  };
  return (
    <Box
      component="form"
      onSubmit={handleOnNextStep}
      sx={{ border: "1px solid #E7E8FA", pt: 4, borderRadius: "15px", my: 2 }}
    >
      <Box sx={{ height: "60vh", overflow: "scroll" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ mx: "auto" }}>
            <Box className="student-info" sx={{ width: "87%", mx: "auto " }}>
              {inputArray.map((inputs) => {
                const { label, id, ...other } = inputs;
                return (
                  <div key={id} className="input-field">
                    <label htmlFor="text">{label}</label>
                    <input
                      required="required"
                      onBlur={handleOnBlur}
                      defaultValue={userData[inputs.name] || ""}
                      {...other}
                    />
                  </div>
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="student-info" sx={{ width: "87%", mx: "auto " }}>
              {inputArray2.map((inputs) => {
                const { label, id, ...other } = inputs;
                return (
                  <div key={id} className="input-field">
                    <label htmlFor="text">{label}</label>
                    <input
                      onBlur={handleOnBlur}
                      required="required"
                      defaultValue={userData[inputs.name] || ""}
                      {...other}
                    />
                  </div>
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
          border: "1px solid #E7E8FA",
          borderRadius: "0px 0px 15px 15px",
        }}
      >
        <div>
          <Button
            disabled
            variant="outlined"
            color="error"
            style={{ verticalAlign: "middle" }}
          >
            <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
              <HiOutlineArrowLeft style={{ verticalAlign: "middle" }} /> ফিরে
              যান
            </span>
          </Button>
        </div>
        <div>
          <Button
            type="submit"
            className="confirm-btn"
            variant="contained"
            style={{ verticalAlign: "middle", backgroundColor: "#007BFF" }}
          >
            <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
              এগিয়ে চলুন{" "}
              <HiOutlineArrowRight style={{ verticalAlign: "middle" }} />
            </span>
          </Button>
        </div>
      </Box>
    </Box>
  );
}
