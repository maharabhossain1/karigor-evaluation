import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { multiStepContext } from "../../../context/StepContext";
import "./StudentInfo.css";

export default function StudentInfo() {
  const { userData, setUserData } = useContext(multiStepContext);
  /// Input filed Object which containts input attributes and label etc.
  const inputArray = [
    {
      id: 1,
      label: "ছাত্রের নাম (ইংরেজি)",
      name: "studentNameEnglish",
      type: "text",
      placeholder: "Student Name English",
    },
    {
      id: 2,
      label: "ছাত্রের নাম (আরবী)",
      name: "studentNameArabic",
      type: "text",
      placeholder: "Student Name Arabic",
    },
    {
      id: 3,
      label: "মাতার নাম",
      name: "motherName",
      type: "text",
      placeholder: "Mother Name",
    },
    {
      id: 4,
      label: "জন্ম নিবন্ধন নাম্বার",
      name: "BirthCertificateNumber",
      type: "text",
      placeholder: "Birth Certificate Number",
    },
    {
      id: 5,
      label: "জাতীয় পরিচয়পত্র নাম্বার",
      name: "NIDNumber",
      type: "text",
      placeholder: "NID Number",
    },
    {
      id: 6,
      label: "ছাত্রের ছবি",
      name: "StudentImage",
      type: "text",
      placeholder: "Student Image",
    },
    {
      id: 7,
      label: "লিঙ্গ",
      name: "gender",
      type: "text",
      placeholder: "Gender",
    },
    {
      id: 8,
      label: "জাতীয়তা",
      name: "nationality",
      type: "text",
      placeholder: "Nationality",
    },
    {
      id: 9,
      label: "বিভাগ",
      name: "division",
      type: "text",
      placeholder: "Division",
    },
    {
      id: 10,
      label: "জেলা",
      name: "district",
      type: "text",
      placeholder: "District",
    },
    {
      id: 11,
      label: "উপজেলা",
      name: "upazila",
      type: "text",
      placeholder: "Upazila",
    },
    {
      id: 12,
      label: "ঠিকানা",
      name: "address",
      type: "text",
      placeholder: "Address",
    },
    {
      id: 13,
      label: "রক্তের গ্রুপ",
      name: "bloodGroup",
      type: "text",
      placeholder: "BloodGroup",
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
          ব্যক্তিগত তথ্য
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
