import { Grid, Button } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useContext, useEffect, useState } from "react";
import NoteCard from "./NoteCard/NoteCard";
import { multiStepContext } from "../../context/StepContext";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";

export default function Notes() {
  const [notesData, setNotesData] = useState([]);
  const { setCourrentStep } = useContext(multiStepContext);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setNotesData(data));
  }, []);
  return (
    <Box
      sx={{ border: "1px solid #E7E8FA", pt: 4, borderRadius: "15px", my: 2 }}
    >
      <Box sx={{ height: "63vh", overflow: "scroll", px: 1.5 }}>
        <Grid container spacing={1}>
          {notesData.map((note) => (
            <Grid key={note.studentId} item xs={12} sm={6} md={4} lg={3}>
              <NoteCard note={note} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 3,
          px: 0.5,
          border: "1px solid #E7E8FA",
          borderRadius: "0px 0px 15px 15px",
        }}
      >
        <div>
          <Button
            onClick={() => setCourrentStep(2)}
            variant="outlined"
            color="error"
            style={{ verticalAlign: "middle" }}
          >
            <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
              <HiOutlineArrowLeft style={{ verticalAlign: "middle" }} /> ফিরে
              যান
            </span>
          </Button>
        </div>
        <div>
          <Button
            className="confirm-btn"
            onClick={() => setCourrentStep(4)}
            variant="contained"
            style={{ verticalAlign: "middle", backgroundColor: "#007BFF" }}
          >
            <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
              এগিয়ে চলুন{" "}
              <HiOutlineArrowRight style={{ verticalAlign: "middle" }} />
            </span>
          </Button>
        </div>
      </Box>
    </Box>
  );
}
