import { Stepper, Step, StepLabel, Box, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Check from "@mui/icons-material/Check";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import FinalStep from "./FinalStep/FinalStep";
import MustInfo from "./MustInfo/MustInfo";
import Notes from "./Notes/Notes";
import OptionalInfo from "./OptionalInfo/OptionalInfo";
import QRCode from "./QRCode/QRCode";
import CompleteStep from "./CompleteStep/CompleteStep";
import useStepStates from "../hooks/useStepStates";
import "./RegFrom.css";
////////////////////////
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#67C8FF",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: " #008AD9",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));
////////////////////////
const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 30,
  height: 30,
  marginTop: "5px",
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: "#67C8FF",
    boxShadow: "0 2px 5px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundColor: " #008AD9",
  }),
}));

/////////////////////////////
function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : active ? (
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        ></div>
      ) : (
        <div>{icons[String(props.icon)]} </div>
      )}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

// steps array
const steps = [
  "আবশ্যিক তথ্য",
  "ফিংগার প্রিন্ট",
  "নোটস দেখুন",
  "ঐচ্ছিক তথ্য",
  "ভর্তি সমাপ্ত",
];

export default function RegForm() {
  const { courrentStep } = useStepStates();

  // step showing cases
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
      case 6:
        return <CompleteStep />;
      default:
        break;
    }
  };
  return (
    <Box sx={{ my: 1 }}>
      <Box sx={{ my: 1, textAlign: "center" }}>
        <Typography
          variant="h5"
          style={{ fontWeight: "bold", color: "#728FB4" }}
        >
          ভর্তি প্রক্রিয়া
        </Typography>
      </Box>
      <Box sx={{ width: "95%", mx: "auto" }}>
        <Stack sx={{ width: "100%", my: 2 }} spacing={4}>
          <Stepper
            style={{ width: "100%" }}
            activeStep={courrentStep - 1}
            alternativeLabel
            orientation="horizontal"
            connector={<ColorlibConnector />}
          >
            {steps.map((lable, i) => (
              <Step key={i}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {lable}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Stack>
        <div style={{ margin: "25px 0px" }}>{shotSteps(courrentStep)}</div>
      </Box>
    </Box>
  );
}
