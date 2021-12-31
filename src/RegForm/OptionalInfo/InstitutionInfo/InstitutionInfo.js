import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { multiStepContext } from "../../../context/StepContext";

export default function InstitutionInfo() {
  const { userData, setUserData } = useContext(multiStepContext);

  const inputArray = [
    {
      id: 1,
      label: "ভর্তি পরিক্ষার মার্কস",
      name: "admissionTestMarks",
      type: "text",
      placeholder: "Write Your Marks",
    },
    {
      id: 2,
      label: "রোল",
      name: "studentRoll",
      type: "text",
      placeholder: "Write Your Roll",
    },
    {
      id: 3,
      label: "সাবক্লাস",
      name: "subClass",
      type: "text",
      placeholder: "Write Your Sub Class",
    },
    {
      id: 4,
      label: "সেশন",
      name: "session",
      type: "text",
      placeholder: "Write Your Session",
    },
    {
      id: 5,
      label: "মাদ্রাসা থেকে বৃত্তি",
      name: "scholarshipFromMadrasa",
      type: "text",
      placeholder: "Scholarship From Madrasa",
    },
    {
      id: 6,
      label: "হল নির্বাচন",
      name: "hallSelection",
      type: "text",
      placeholder: "Hall Selection",
    },
    {
      id: 7,
      label: "হল সিট আইডি",
      name: "hallSeatID",
      type: "text",
      placeholder: "Hall SeatID",
    },
    {
      id: 8,
      label: "আর্থিক অবস্থা",
      name: "financialStatus",
      type: "text",
      placeholder: "Financial Status",
    },
    {
      id: 9,
      label: "আবাসন",
      name: "accommodation",
      type: "text",
      placeholder: "Accommodation",
    },
  ];
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...userData };
    newInfo[field] = value;
    setUserData(newInfo);
  };

  return (
    <Box className="student-info" sx={{ width: "87%", mx: "auto " }}>
      <Box sx={{ color: "#728FB4", py: "1rem" }}>
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          প্রাতিষ্ঠানিক তথ্য
        </Typography>
      </Box>
      {inputArray.map((inputs) => {
        const { label, id, ...other } = inputs;
        return (
          <div key={id} className="input-field">
            <label htmlFor="text">{label}</label>
            <input
              onBlur={handleOnBlur}
              defaultValue={userData[inputs.name] || ""}
              {...other}
            />
          </div>
        );
      })}
    </Box>
  );
}
