import { Typography, Button, Box } from "@mui/material";
import React from "react";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import useStepStates from "../../hooks/useStepStates";

export default function QRCode() {
  const { setCourrentStep } = useStepStates();

  return (
    <Box
      sx={{ border: "1px solid #E7E8FA", pt: 1, borderRadius: "15px", my: 1 }}
    >
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
          px: 0.5,
          border: "1px solid #E7E8FA",
          borderRadius: "0px 0px 15px 15px",
        }}
      >
        <div>
          <Button
            onClick={() => setCourrentStep(1)}
            variant="outlined"
            color="error"
            style={{ verticalAlign: "middle" }}
          >
            <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
              <HiOutlineArrowLeft style={{ verticalAlign: "middle" }} /> ফিরে
              যান
            </span>
          </Button>
        </div>
        <div>
          <Button
            className="confirm-btn"
            onClick={() => setCourrentStep(3)}
            variant="contained"
            style={{ verticalAlign: "middle", backgroundColor: "#007BFF" }}
          >
            <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
              এগিয়ে চলুন{" "}
              <HiOutlineArrowRight style={{ verticalAlign: "middle" }} />
            </span>
          </Button>
        </div>
      </Box>
    </Box>
  );
}
