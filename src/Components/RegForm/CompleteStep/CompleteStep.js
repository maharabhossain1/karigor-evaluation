import { Box, Typography } from "@mui/material";
import React from "react";
import useStepStates from "../../../hooks/useStepStates";

export default function CompleteStep() {
  const { finalData } = useStepStates();
  console.log(finalData);
  return (
    <div>
      <Box
        sx={{
          width: "75%",
          mx: "auto",
          py: 3,
          px: 2,
          my: 5,
          textAlign: "center",
          border: "1px solid red",
          backgroundColor: "#FFF3F1",
          borderRadius: "15px",
        }}
      >
        <Typography variant="h6">Well Done!</Typography>
      </Box>
    </div>
  );
}
