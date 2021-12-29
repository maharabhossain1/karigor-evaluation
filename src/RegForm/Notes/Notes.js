import { Grid, Button } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useContext, useEffect, useState } from "react";
import NoteCard from "./NoteCard/NoteCard";
import { multiStepContext } from "../../context/StepContext";

export default function Notes() {
  const [notesData, setNotesData] = useState([]);
  const { setCourrentStep } = useContext(multiStepContext);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setNotesData(data));
  }, []);
  return (
    <Box sx={{ flexGrow: 1, my: 5 }}>
      <Grid container spacing={2}>
        {notesData.map((note) => (
          <Grid item xs={8} md={3}>
            <NoteCard key={note.studentId} note={note} />
          </Grid>
        ))}
      </Grid>
      <Box>
        <Button onClick={() => setCourrentStep(4)} variant="contained">
          Next
        </Button>
      </Box>
    </Box>
  );
}
