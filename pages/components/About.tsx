import { Box, Typography } from "@mui/material";
import React from "react";
import AboutBox from "../subcomponents/AboutBox";

const About = () => {
  return (
    <Box
      sx={{
        paddingTop: "1rem",
        background: "#adf7ff",
        paddingBottom: "10rem",
        paddingLeft: "5%",
      }}
    >
      <Typography variant="h2">About Me</Typography>
      <Typography>
        Hi, I&apos;m Geoffrey, a software engineer that loves problem solving in
        unique ways!{" "}
      </Typography>
      <AboutBox />
    </Box>
  );
};

export default About;
