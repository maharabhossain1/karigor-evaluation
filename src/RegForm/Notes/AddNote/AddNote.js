import { Box, Typography, Button } from "@mui/material";
import React from "react";
import "./AddNote.css";

export default function AddNote({ setAddNotes, notesData, setNotesData }) {
  return (
    <Box className="add-note-box">
      <Box>
        <Typography
          variant="h5"
          style={{ margin: "2vh 0", fontWeight: "bold" }}
        >
          এই ছাত্রের সম্পর্কে নোট যোগ করুন
        </Typography>
        <Box>
          <textarea
            rows="15"
            cols="50"
            name="comment"
            form="usrform"
          ></textarea>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 3,
          px: 0.5,
        }}
      >
        <div>
          <Button
            variant="contained"
            style={{ verticalAlign: "middle", backgroundColor: "#0FAF51" }}
          >
            <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
              সেইভ করুন
            </span>
          </Button>
        </div>
        <div>
          <Button
            className="confirm-btn"
            variant="contained"
            style={{ verticalAlign: "middle", backgroundColor: "#F7685B" }}
          >
            <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
              বাদ দিন
            </span>
          </Button>
        </div>
      </Box>
    </Box>
  );
}
