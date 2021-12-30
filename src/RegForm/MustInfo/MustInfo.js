import React, { useContext, useState } from "react";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { multiStepContext } from "../../context/StepContext";
import "../OptionalInfo/StudentInfo/StudentInfo.css";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";

export default function MustInfo() {
  const [mustInfoData, setMustInfoData] = useState({});
  const { setCourrentStep } = useContext(multiStepContext);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...mustInfoData };
    newInfo[field] = value;
    setMustInfoData(newInfo);
  };
  console.log(mustInfoData);
  return (
    <Box
      sx={{ border: "1px solid #E7E8FA", pt: 4, borderRadius: "15px", my: 2 }}
    >
      <Box sx={{ height: "70vh", overflow: "scroll", px: 1.5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ mx: "auto" }}>
            <Box className="student-info" sx={{ width: "85%", mx: "auto " }}>
              <div className="input-field">
                <label htmlFor="text">নাম</label>
                <input
                  onBlur={handleOnBlur}
                  type="text"
                  className="input"
                  name="studentName"
                />
              </div>
              <div className="input-field">
                <label htmlFor="text">পিতার নাম</label>
                <input
                  onBlur={handleOnBlur}
                  type="text"
                  className="input"
                  name="fatherName"
                />
              </div>
              <div className="input-field">
                <label htmlFor="text">জন্ম তারিখ</label>
                <input
                  onBlur={handleOnBlur}
                  type="text"
                  className="input"
                  name="birthday"
                />
              </div>
              <div className="input-field">
                <label htmlFor="text">মোবাইল নাম্বার</label>
                <input
                  onBlur={handleOnBlur}
                  type="number"
                  className="input"
                  name="mobileNumber"
                />
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="student-info" sx={{ width: "85%", mx: "auto " }}>
              <div className="input-field">
                <label htmlFor="text">ক্লাস</label>
                <input
                  onBlur={handleOnBlur}
                  type="text"
                  className="input"
                  name="studentClass"
                />
              </div>
              <div className="input-field">
                <label htmlFor="text">ভর্তির তারিখ</label>
                <input
                  onBlur={handleOnBlur}
                  type="text"
                  className="input"
                  name="admissionDate"
                />
              </div>
              <div className="input-field">
                <label htmlFor="text">ভর্তি পরীক্ষার মার্কস</label>
                <input
                  onBlur={handleOnBlur}
                  type="text"
                  className="input"
                  name="admissionTestMarks"
                />
              </div>
              <div className="input-field">
                <label htmlFor="text">ভর্তির ফিস</label>
                <input
                  onBlur={handleOnBlur}
                  type="text"
                  className="input"
                  name="admissionFee"
                />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 4,
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
            <span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
              <HiOutlineArrowLeft style={{ verticalAlign: "middle" }} /> ফিরে
              যান
            </span>
          </Button>
        </div>
        <div>
          <Button
            className="confirm-btn"
            onClick={() => setCourrentStep(2)}
            variant="contained"
            style={{ verticalAlign: "middle", backgroundColor: "#007BFF" }}
          >
            <span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
              এগিয়ে চলুন{" "}
              <HiOutlineArrowRight style={{ verticalAlign: "middle" }} />
            </span>
          </Button>
        </div>
      </Box>
    </Box>
  );
}
