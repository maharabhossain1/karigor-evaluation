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
            variant="outlined"
            color="error"
            style={{
              verticalAlign: "middle",
              borderRadius: "50%",
              width: "64px",
              height: "64px",
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
              <HiOutlineArrowLeft style={{ verticalAlign: "middle" }} />
            </span>
          </Button>
        </div>
        <div>
          <Button
            className="confirm-btn"
            onClick={() => setCourrentStep(5)}
            variant="contained"
            style={{
              verticalAlign: "middle",
              backgroundColor: "#007BFF",
              borderRadius: "50%",
              width: "64px",
              height: "64px",
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
              <HiOutlineArrowRight style={{ verticalAlign: "middle" }} />
            </span>
          </Button>
        </div>
      </Box>
    </Box>
  );
}
