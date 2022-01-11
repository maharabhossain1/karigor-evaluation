import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { multiStepContext } from "../../../context/StepContext";
import FormInput from "../../FormInput/FormInput";
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
      type: "number",
      placeholder: "NID Number",
    },
    {
      id: 7,
      label: "লিঙ্গ",
      name: "gender",
      type: "select",
      options: ["পুরুষ", "মহিলা"],
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
      type: "select",
      options: [
        "ঢাকা ",
        "চট্টগ্রাম",
        "বরিশাল",
        "খুলনা",
        "ময়মনসিংহ",
        "রাজশাহী",
        "সিলেট",
        "রংপুর",
      ],
      placeholder: "Division",
    },
    {
      id: 10,
      label: "জেলা",
      name: "district",
      type: "select",
      options: [
        "কুমিল্লা",
        "ফেনী",
        "ব্রাহ্মণবাড়িয়া",
        "রাঙ্গামাটি",
        "নোয়াখালী",
        "চাঁদপুর",
        "লক্ষ্মীপুর",
        "চট্টগ্রাম",
        "কক্সবাজার",
        "খাগড়াছড়ি",
        "বান্দরবান",
        "সিরাজগঞ্জ",
        "পাবনা",
        "বগুড়া",
        "রাজশাহী",
        "নাটোর",
        "জয়পুরহাট",
        "চাঁপাইনবাবগঞ্জ",
        "নওগাঁ",
        "যশোর",
        "সাতক্ষীরা",
        "মেহেরপুর",
        "নড়াইল",
        "চুয়াডাঙ্গা",
        "কুষ্টিয়া",
        "মাগুরা",
        "খুলনা",
        "বাগেরহাট",
        "ঝিনাইদহ",
        "ঝালকাঠি",
        "পটুয়াখালী",
        "পিরোজপুর",
        "বরিশাল",
        "ভোলা",
        "বরগুনা",
        "সিলেট",
        "মৌলভীবাজার",
        "হবিগঞ্জ",
        "সুনামগঞ্জ",
        "নরসিংদী",
        "গাজীপুর",
        "শরীয়তপুর",
        "নারায়ণগঞ্জ",
        "টাঙ্গাইল",
        "কিশোরগঞ্জ",
        "মানিকগঞ্জ",
        "ঢাকা",
        "মুন্সিগঞ্জ",
        "রাজবাড়ী",
        "মাদারীপুর",
        "গোপালগঞ্জ",
        "ফরিদপুর",
        "পঞ্চগড়",
        "দিনাজপুর",
        "লালমনিরহাট",
        "নীলফামারী",
        "গাইবান্ধা",
        "ঠাকুরগাঁও",
        "রংপুর",
        "কুড়িগ্রাম",
        "শেরপুর",
        "ময়মনসিংহ",
        "জামালপুর",
        "নেত্রকোণা",
      ],
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
    {
      id: 6,
      label: "ছাত্রের ছবি",
      name: "StudentImage",
      type: "file",
      placeholder: "Student Image",
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
      {inputArray.map((inputs) => (
        <FormInput
          key={inputs.id}
          {...inputs}
          value={userData[inputs.name]}
          handleOnBlur={handleOnBlur}
        />
      ))}
    </Box>
  );
}
