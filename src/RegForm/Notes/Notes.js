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
      <Box sx={{ height: "70vh", overflow: "scroll", px: 1.5 }}>
        <Grid container spacing={2}>
          {notesData.map((note) => (
            <Grid item xs={8} md={3}>
              <NoteCard key={note.studentId} note={note} />
            </Grid>
          ))}
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
            onClick={() => setCourrentStep(2)}
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
            onClick={() => setCourrentStep(4)}
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
