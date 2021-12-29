import { Box, Grid, Button } from "@mui/material";
import React, { useContext } from "react";
import InstitutionInfo from "./InstitutionInfo/InstitutionInfo";
import StudentInfo from "./StudentInfo/StudentInfo";
import { multiStepContext } from "../../context/StepContext";

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
          <Button onClick={() => setCourrentStep(3)} variant="contained">
            Back
          </Button>
        </div>
        <div>
          <Button onClick={() => setCourrentStep(5)} variant="contained">
            Next
          </Button>
        </div>
      </Box>
    </Box>
  );
}
