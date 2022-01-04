import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { multiStepContext } from "../../../context/StepContext";
import FormInput from "../../../FormInput/FormInput";

export default function InstitutionInfo() {
  const { userData, setUserData } = useContext(multiStepContext);

  /// Input filed Object which containts input attributes and label etc.
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
      type: "number",
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
      type: "select",
      options: [
        "Shahjalal Hall",
        "Suhrawardy Hall",
        "Shah Amanat Hall	",
        "Shaheed Abdur Rab Hall	",
      ],
      placeholder: "Hall Selection",
    },
    {
      id: 7,
      label: "হল সিট আইডি",
      name: "hallSeatID",
      type: "number",
      placeholder: "Hall SeatID",
    },
    {
      id: 8,
      label: "আর্থিক অবস্থা",
      name: "financialStatus",
      type: "text",
      placeholder: "সম্পূর্ণ অর্থপ্রদান / আংশিক / বিনামূল্যে",
    },
    {
      id: 9,
      label: "আবাসন",
      name: "accommodation",
      type: "text",
      placeholder: "আবাসিক / অনাবাসিক / ডে কেয়ার",
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
        return (
          <FormInput
            key={inputs.id}
            {...inputs}
            value={userData[inputs.name]}
            handleOnBlur={handleOnBlur}
          />
        );
      })}
    </Box>
  );
}
