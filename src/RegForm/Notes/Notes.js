import { Grid, Button } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import NoteCard from "./NoteCard/NoteCard";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import { BsPlus } from "react-icons/bs";
import AddNote from "./AddNote/AddNote";
import useStepStates from "../../hooks/useStepStates";

export default function Notes() {
  const [notesData, setNotesData] = useState([]);
  const [addNotes, setAddNotes] = useState(false);
  const { setCourrentStep } = useStepStates();

  // data fatching from ApI
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setNotesData(data));
  }, []);

  ///////////////////////
  const handelNoteAdd = () => {
    setAddNotes(true);
  };
  return (
    <Box sx={{ pt: 1, my: 1 }}>
      {/* conditional rendaring for new note adding modal  */}
      <Box>
        <Box
          sx={{
            height: "65vh",
            overflow: "scroll",
            px: 0.5,
          }}
        >
          <Grid container spacing={2}>
            {notesData.map((note) => (
              <Grid key={note.studentId} item xs={12} sm={6} md={4} lg={3}>
                <NoteCard note={note} />
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* Note Adding Button   */}
        <Button
          variant="contained"
          onClick={handelNoteAdd}
          style={{
            verticalAlign: "middle",
            backgroundColor: "#FFD78E",
            margin: "1vh 1vw",
          }}
        >
          <span
            style={{ fontWeight: "bold", fontSize: "1.2rem", color: "black" }}
          >
            নোট যোগ করুন <BsPlus style={{ verticalAlign: "middle" }} />
          </span>
        </Button>
      </Box>

      {/* ----------------------- */}
      {/* Back and Forward button Box  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 1,
        }}
      >
        <div>
          <Button
            onClick={() => setCourrentStep(2)}
            className="custom-btn-backward"
            variant="contained"
          >
            <HiOutlineArrowLeft
              style={{ verticalAlign: "middle", fontSize: "1.5rem" }}
            />
          </Button>
        </div>
        <div>
          <Button
            className="custom-btn-forward"
            onClick={() => setCourrentStep(4)}
            variant="contained"
          >
            <HiOutlineArrowRight
              style={{ verticalAlign: "middle", fontSize: "1.5rem" }}
            />
          </Button>
        </div>
      </Box>
      {addNotes && (
        <AddNote
          setAddNotes={setAddNotes}
          notesData={notesData}
          setNotesData={setNotesData}
        />
      )}
    </Box>
  );
}
