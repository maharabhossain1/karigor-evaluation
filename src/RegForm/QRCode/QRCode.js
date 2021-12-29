import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function QRCode() {
  return (
    <Box>
      <Box
        sx={{
          width: "20%",
          mx: "auto",
          p: 2,
          my: 6,
          border: "1px solid gray",
          borderRadius: "15px",
        }}
      >
        <img
          style={{ height: "100%", width: "100%" }}
          src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
          alt=""
          loading="lazy"
        />
      </Box>
      <Box
        sx={{
          width: "40%",
          mx: "auto",
          p: 5,
          my: 5,
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
    </Box>
  );
}
