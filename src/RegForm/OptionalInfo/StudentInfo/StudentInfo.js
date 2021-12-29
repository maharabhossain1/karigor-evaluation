import { Box, Typography } from "@mui/material";
import React from "react";
import "./StudentInfo.css";

export default function StudentInfo() {
  return (
    <Box className="student-info" sx={{ width: "85%", mx: "auto " }}>
      <Box sx={{ color: "#728FB4", py: "1rem" }}>
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          ব্যক্তিগত তথ্য
        </Typography>
      </Box>
      <div className="input-field">
        <label htmlFor="text">ছাত্রের নাম (ইংরেজি)</label>
        <input type="text" className="input" name="studentNameEnglish" />
      </div>
      <div className="input-field">
        <label htmlFor="text">ছাত্রের নাম (আরবী)</label>
        <input type="text" className="input" name="studentNameArabic" />
      </div>
      <div className="input-field">
        <label htmlFor="text">মাতার নাম</label>
        <input type="text" className="input" name="motherName" />
      </div>
      <div className="input-field">
        <label htmlFor="number">জন্ম নিবন্ধন নাম্বার</label>
        <input type="number" className="input" name="borthCertificateNumber" />
      </div>
      <div className="input-field">
        <label htmlFor="number">জাতীয় পরিচয়পত্র নাম্বার</label>
        <input type="number" className="input" name="NIDNumber" />
      </div>
      <div className="input-field">
        <label htmlFor="number">ছাত্রের ছবি</label>
        <input type="text" className="input" name="studentImage" />
      </div>
      <div className="input-field">
        <label htmlFor="number">লিঙ্গ</label>
        <input type="text" className="input" name="sex" />
      </div>
      <div className="input-field">
        <label htmlFor="number">জাতীয়তা</label>
        <input type="text" className="input" name="nationality" />
      </div>
      <div className="input-field">
        <label htmlFor="number">বিভাগ</label>
        <input type="text" className="input" name="division" />
      </div>
      <div className="input-field">
        <label htmlFor="number">জেলা</label>
        <input type="text" className="input" name="district" />
      </div>
      <div className="input-field">
        <label htmlFor="number">উপজেলা</label>
        <input type="text" className="input" name="upazila" />
      </div>
      <div className="input-field">
        <label htmlFor="number">ঠিকানা</label>
        <input type="text" className="input" name="address" />
      </div>
      <div className="input-field">
        <label htmlFor="number">রক্তের গ্রুপ</label>
        <input type="text" className="input" name="bloodGroup" />
      </div>
    </Box>
  );
}
