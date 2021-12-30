import { Box, Typography } from "@mui/material";
import React from "react";

export default function InstitutionInfo() {
  return (
    <Box className="student-info" sx={{ width: "87%", mx: "auto " }}>
      <Box sx={{ color: "#728FB4", py: "1rem" }}>
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          প্রাতিষ্ঠানিক তথ্য
        </Typography>
      </Box>
      <div className="input-field">
        <label htmlFor="text">ভর্তি পরিক্ষার মার্কস</label>
        <input type="text" className="input" name="studentNameEnglish" />
      </div>
      <div className="input-field">
        <label htmlFor="text">রোল</label>
        <input type="text" className="input" name="studentNameArabic" />
      </div>
      <div className="input-field">
        <label htmlFor="text">সাবক্লাস</label>
        <input type="text" className="input" name="motherName" />
      </div>
      <div className="input-field">
        <label htmlFor="number">সেশন</label>
        <input type="number" className="input" name="borthCertificateNumber" />
      </div>
      <div className="input-field">
        <label htmlFor="number">মাদ্রাসা থেকে বৃত্তি</label>
        <input type="number" className="input" name="NIDNumber" />
      </div>
      <div className="input-field">
        <label htmlFor="number">হল নির্বাচন</label>
        <input type="text" className="input" name="studentImage" />
      </div>
      <div className="input-field">
        <label htmlFor="number">হল সিট আইডি</label>
        <input type="text" className="input" name="sex" />
      </div>
      <div className="input-field">
        <label htmlFor="number">জাতীয়তা</label>
        <input type="text" className="input" name="nationality" />
      </div>
      <div className="input-field">
        <label htmlFor="number">আর্থিক অবস্থা</label>
        <input type="text" className="input" name="division" />
      </div>
      <div className="input-field">
        <label htmlFor="number">আবাসন</label>
        <input type="text" className="input" name="district" />
      </div>
    </Box>
  );
}
