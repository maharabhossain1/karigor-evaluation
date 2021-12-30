import { Stepper, Step, StepLabel, Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import FinalStep from "./FinalStep/FinalStep";
import MustInfo from "./MustInfo/MustInfo";
import Notes from "./Notes/Notes";
import OptionalInfo from "./OptionalInfo/OptionalInfo";
import QRCode from "./QRCode/QRCode";
import { multiStepContext } from "../context/StepContext";

const steps = [
  "আবশ্যিক তথ্য",
  "ফিংগার প্রিন্ট",
  "নোটস",
  "ঐচ্ছিক তথ্য",
  "ভর্তি সমাপ্ত",
];

export default function RegForm() {
  const { courrentStep } = useContext(multiStepContext);
  const shotSteps = (step) => {
    switch (step) {
      case 1:
        return <MustInfo />;
      case 2:
        return <QRCode />;
      case 3:
        return <Notes />;
      case 4:
        return <OptionalInfo />;
      case 5:
        return <FinalStep />;
      default:
        break;
    }
  };
  return (
    <Box sx={{ my: 1 }}>
      <Box sx={{ my: 1, py: 1, textAlign: "center" }}>
        <Typography
          variant="h5"
          style={{ fontWeight: "bold", color: "#728FB4" }}
        >
          ভর্তি প্রক্রিয়া
        </Typography>
      </Box>
      <Box sx={{ width: "95%", mx: "auto" }}>
        <Stepper
          style={{ width: "100%" }}
          activeStep={courrentStep - 1}
          orientation="horizontal"
        >
          {steps.map((lable, i) => (
            <Step key={i}>
              <StepLabel style={{ display: "block" }}>{lable}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div style={{ margin: "25px 0px" }}>{shotSteps(courrentStep)}</div>
      </Box>
    </Box>
  );
}
