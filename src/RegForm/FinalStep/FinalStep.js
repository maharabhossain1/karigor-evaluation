import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { Box, Button, Typography } from "@mui/material";
import "./FinalStep.css";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { BsCheck2Circle } from "react-icons/bs";
import useStepStates from "../../hooks/useStepStates";

export default function FinalStep() {
  const { setCourrentStep, userData, finalData, setFinalData } =
    useStepStates();

  const handleFormSubmit = () => {
    setCourrentStep(6);
    setFinalData(userData);
    console.log(finalData);
  };
  return (
    <div>
      <Box>
        <div className="check-icon-box">
          <Typography variant="h1">
            <BsCheckCircle />
          </Typography>
        </div>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          width: "65%",
          mx: "auto",
          py: 5,
          px: 1,
          my: 5,
          border: "1px solid #0FAF51",
          backgroundColor: "#EFFFF6",
          borderRadius: "15px",
        }}
      >
        <Typography>
          ছাত্রের তথ্যাদি পূরণ করা হয়েছে , ভর্তি প্রক্রিয়া সম্পন্ন করার জন্য
          নিচের বাটন টি চাপুন |
        </Typography>
      </Box>
      <Box className="final-btn-box">
        <Box className="btn-box">
          <Button
            onClick={handleFormSubmit}
            variant="contained"
            id="confirm-btn"
          >
            <BsCheck2Circle
              style={{
                margin: "0px 1.5vw",
                fontSize: "2rem",
              }}
            />
            ভর্তি প্রক্রিয়া সমাপ্ত করুন
          </Button>
        </Box>
        <Box className="btn-box">
          <Button
            onClick={() => setCourrentStep(4)}
            variant="outlined"
            color="error"
          >
            <HiOutlineArrowLeft
              style={{ margin: "0px 1.5vw", fontSize: "2rem" }}
            />{" "}
            তথ্য পরিবর্তন করুন
          </Button>
        </Box>
      </Box>
    </div>
  );
}
