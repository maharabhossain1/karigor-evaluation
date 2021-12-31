import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { multiStepContext } from "../../../context/StepContext";

export default function InstitutionInfo() {
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
          প্রাতিষ্ঠানিক তথ্য
        </Typography>
      </Box>
      <div className="input-field">
        <label htmlFor="text">ভর্তি পরিক্ষার মার্কস</label>
        <input
          onBlur={handleOnBlur}
          defaultValue={userData.admissionTestMarks || ""}
          type="text"
          className="input"
          name="admissionTestMarks"
        />
      </div>
      <div className="input-field">
        <label htmlFor="text">রোল</label>
        <input
          onBlur={handleOnBlur}
          defaultValue={userData.studentRoll || ""}
          type="text"
          className="input"
          name="studentRoll"
        />
      </div>
      <div className="input-field">
        <label htmlFor="text">সাবক্লাস</label>
        <input
          onBlur={handleOnBlur}
          defaultValue={userData.subClass || ""}
          type="text"
          className="input"
          name="subClass"
        />
      </div>
      <div className="input-field">
        <label htmlFor="number">সেশন</label>
        <input
          onBlur={handleOnBlur}
          defaultValue={userData.session || ""}
          type="text"
          className="input"
          name="session"
        />
      </div>
      <div className="input-field">
        <label htmlFor="number">মাদ্রাসা থেকে বৃত্তি</label>
        <input
          onBlur={handleOnBlur}
          defaultValue={userData.scholarshipFromMadrasa || ""}
          type="text"
          className="input"
          name="scholarshipFromMadrasa"
        />
      </div>
      <div className="input-field">
        <label htmlFor="number">হল নির্বাচন</label>
        <input
          onBlur={handleOnBlur}
          defaultValue={userData.hallSelection || ""}
          type="text"
          className="input"
          name="hallSelection"
        />
      </div>
      <div className="input-field">
        <label htmlFor="number">হল সিট আইডি</label>
        <input
          onBlur={handleOnBlur}
          defaultValue={userData.hallSeatID || ""}
          type="text"
          className="input"
          name="hallSeatID"
        />
      </div>
      <div className="input-field">
        <label htmlFor="number">আর্থিক অবস্থা</label>
        <input
          onBlur={handleOnBlur}
          defaultValue={userData.financialStatus || ""}
          type="text"
          className="input"
          name="financialStatus"
        />
      </div>
      <div className="input-field">
        <label htmlFor="number">আবাসন</label>
        <input
          onBlur={handleOnBlur}
          defaultValue={userData.accommodation || ""}
          type="text"
          className="input"
          name="accommodation"
        />
      </div>
    </Box>
  );
}
