import { Typography, Button, Box } from "@mui/material";
import React from "react";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import useStepStates from "../../hooks/useStepStates";

export default function QRCode() {
  const { setCourrentStep } = useStepStates();

  return (
    <Box sx={{ pt: 1, my: 1 }}>
      <Box
        sx={{
          width: "max-content",
          mx: "auto",
          p: 0.5,
          my: 1,
          border: "1px solid gray",
          borderRadius: "15px",
        }}
      >
        <img
          style={{ height: "37vh" }}
          src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
          alt=""
          loading="lazy"
        />
      </Box>
      <Box
        sx={{
          width: "75%",
          mx: "auto",
          py: 3,
          px: 2,
          my: 2,
          border: "1px solid red",
          backgroundColor: "#FFF3F1",
          borderRadius: "15px",
        }}
      >
        <Typography variant="h6">
          ছাত্রের ফিঙ্গারপ্রিন্ট রেজিস্টার করার জন্য দয়া করে আমাদের মোবাইল অ্যাপ
          এর সাহায্যে এই কোড টি স্ক্যান করুন
        </Typography>
      </Box>

      {/* /////////////////////////////////// */}
      {/* Button Box Forward and Back button  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 3,
        }}
      >
        <div>
          <Button
            onClick={() => setCourrentStep(1)}
            variant="outlined"
            color="error"
            style={{
              verticalAlign: "middle",
              borderRadius: "50%",
              width: "64px",
              height: "64px",
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
              <HiOutlineArrowLeft style={{ verticalAlign: "middle" }} />
            </span>
          </Button>
        </div>
        <div>
          <Button
            className="confirm-btn"
            onClick={() => setCourrentStep(3)}
            variant="contained"
            style={{
              verticalAlign: "middle",
              backgroundColor: "#007BFF",
              borderRadius: "50%",
              width: "64px",
              height: "64px",
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
              <HiOutlineArrowRight style={{ verticalAlign: "middle" }} />
            </span>
          </Button>
        </div>
      </Box>
    </Box>
  );
}
