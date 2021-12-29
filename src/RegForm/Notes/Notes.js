import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import NoteCard from "./NoteCard/NoteCard";

export default function Notes() {
  const [notesData, setNotesData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setNotesData(data));
  }, []);
  return (
    <Box>
      {notesData.map((note) => (
        <NoteCard key={note.studentId} note={note} />
      ))}
    </Box>
  );
}
