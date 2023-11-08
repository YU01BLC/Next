"use client";
import React, { useEffect } from "react";
import { Box } from "@mui/system";

export default function Page() {
  useEffect(() => {
    try {
      throw new Error("error");
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }, []);
  return (
    <Box
      height="50vh"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "primary.main",
      }}
    >
      react hook form
    </Box>
  );
}
