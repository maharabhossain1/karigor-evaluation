import { Box, Grid, Button } from "@mui/material";
import React, { useContext } from "react";
import InstitutionInfo from "./InstitutionInfo/InstitutionInfo";
import StudentInfo from "./StudentInfo/StudentInfo";
import { multiStepContext } from "../../context/StepContext";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";

export default function OptionalInfo() {
  const { setCourrentStep } = useContext(multiStepContext);

  return (
    <Box
      sx={{ border: "1px solid #E7E8FA", pt: 4, borderRadius: "15px", my: 2 }}
    >
      <Box sx={{ height: "70vh", overflow: "scroll" }}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <StudentInfo />
          </Grid>
          <Grid item xs={6}>
            <InstitutionInfo />
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
            onClick={() => setCourrentStep(3)}
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
            onClick={() => setCourrentStep(5)}
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
