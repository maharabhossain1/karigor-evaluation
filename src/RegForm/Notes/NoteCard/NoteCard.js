import { Typography } from "@mui/material";
import React from "react";
import "./NoteCard.css";
export default function NoteCard({ note }) {
  const { studentId, studentName, date, notes } = note;
  return (
    <div className="note-container">
      <div className="note-info">
        <div>{studentName}</div>
        <div>{date}</div>
      </div>
      <div className="note-text">{notes}</div>
      <div className="detail-note">
        <Typography>বিস্তারিত</Typography>
      </div>
    </div>
  );
}
