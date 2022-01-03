import { Box, Grid, Button } from "@mui/material";
import React from "react";
import InstitutionInfo from "./InstitutionInfo/InstitutionInfo";
import StudentInfo from "./StudentInfo/StudentInfo";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import useStepStates from "../../hooks/useStepStates";

export default function OptionalInfo() {
  const { setCourrentStep } = useStepStates();

  return (
    <Box sx={{ pt: 1, borderRadius: "15px", my: 1 }}>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <StudentInfo />
          </Grid>
          <Grid item xs={12} md={6}>
            <InstitutionInfo />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 1,
        }}
      >
        <div>
          <Button
            onClick={() => setCourrentStep(3)}
            variant="contained"
            className="custom-btn-backward"
          >
            <HiOutlineArrowLeft
              style={{ verticalAlign: "middle", fontSize: "1.5rem" }}
            />
          </Button>
        </div>
        <div>
          <Button
            className="custom-btn-forward"
            onClick={() => setCourrentStep(5)}
            variant="contained"
          >
            <HiOutlineArrowRight
              style={{ verticalAlign: "middle", fontSize: "1.5rem" }}
            />
          </Button>
        </div>
      </Box>
    </Box>
  );
}
