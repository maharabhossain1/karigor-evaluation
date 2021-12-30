import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { Box, Paper, Typography } from "@mui/material";
import "./FinalStep.css";

export default function FinalStep() {
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
          width: "40%",
          mx: "auto",
          p: 6,
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
    </div>
  );
}
