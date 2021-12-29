import { Typography } from "@mui/material";
import React from "react";
import "./NoteCard.css";
export default function NoteCard({ note }) {
  const { studentId, studentName, date, notes } = note;
  return (
    <div>
      <div>
        <div>{studentName}</div>
        <div>{date}</div>
      </div>
      <div>{notes}</div>
      <div>
        <Typography>বিস্তারিত</Typography>
      </div>
    </div>
  );
}
