import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { multiStepContext } from "../../../context/StepContext";
import "./StudentInfo.css";

export default function StudentInfo() {
  const { userData, setUserData } = useContext(multiStepContext);
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
      <div className="input-field">
        <label htmlFor="text">ছাত্রের নাম (ইংরেজি)</label>
        <input
          onBlur={handleOnBlur}
          defaultValue={userData.studentNameEnglish || ""}
          type="text"
          className="input"
          name="studentNameEnglish"
        />
      </div>
      <div className="input-field">
        <label htmlFor="text">ছাত্রের নাম (আরবী)</label>
        <input
          onBlur={handleOnBlur}
          defaultValue={userData.studentNameArabic || ""}
          type="text"
          className="input"
          name="studentNameArabic"
        />
      </div>
      <div className="input-field">
        <label htmlFor="text">মাতার নাম</label>
        <input
          onBlur={handleOnBlur}
          defaultValue={userData.motherName || ""}
          type="text"
          className="input"
          name="motherName"
        />
      </div>
      <div className="input-field">
        <label htmlFor="number">জন্ম নিবন্ধন নাম্বার</label>
        <input
          onBlur={handleOnBlur}
          defaultValue={userData.borthCertificateNumber || ""}
          type="number"
          className="input"
          name="borthCertificateNumber"
        />
      </div>
      <div className="input-field">
        <label htmlFor="number">জাতীয় পরিচয়পত্র নাম্বার</label>
        <input
          onBlur={handleOnBlur}
          defaultValue={userData.NIDNumber || ""}
          type="number"
          className="input"
          name="NIDNumber"
        />
      </div>
      <div className="input-field">
        <label htmlFor="number">ছাত্রের ছবি</label>
        <input
          onBlur={handleOnBlur}
          defaultValue={userData.studentImage || ""}
          type="text"
          className="input"
          name="studentImage"
        />
      </div>
      <div className="input-field">
        <label htmlFor="number">লিঙ্গ</label>
        <input
          onBlur={handleOnBlur}
          defaultValue={userData.sex || ""}
          type="text"
          className="input"
          name="sex"
        />
      </div>
      <div className="input-field">
        <label htmlFor="number">জাতীয়তা</label>
        <input
          onBlur={handleOnBlur}
          defaultValue={userData.nationality || ""}
          type="text"
          className="input"
          name="nationality"
        />
      </div>
      <div className="input-field">
        <label htmlFor="number">বিভাগ</label>
        <input
          onBlur={handleOnBlur}
          defaultValue={userData.division || ""}
          type="text"
          className="input"
          name="division"
        />
      </div>
      <div className="input-field">
        <label htmlFor="number">জেলা</label>
        <input
          onBlur={handleOnBlur}
          defaultValue={userData.district || ""}
          type="text"
          className="input"
          name="district"
        />
      </div>
      <div className="input-field">
        <label htmlFor="number">উপজেলা</label>
        <input
          onBlur={handleOnBlur}
          defaultValue={userData.upazila || ""}
          type="text"
          className="input"
          name="upazila"
        />
      </div>
      <div className="input-field">
        <label htmlFor="number">ঠিকানা</label>
        <input
          onBlur={handleOnBlur}
          defaultValue={userData.address || ""}
          type="text"
          className="input"
          name="address"
        />
      </div>
      <div className="input-field">
        <label htmlFor="number">রক্তের গ্রুপ</label>
        <input
          onBlur={handleOnBlur}
          defaultValue={userData.bloodGroup || ""}
          type="text"
          className="input"
          name="bloodGroup"
        />
      </div>
    </Box>
  );
}
