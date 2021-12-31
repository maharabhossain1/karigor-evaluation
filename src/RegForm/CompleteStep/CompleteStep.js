import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { multiStepContext } from "../../context/StepContext";

export default function CompleteStep() {
  const { finalData } = useContext(multiStepContext);
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
