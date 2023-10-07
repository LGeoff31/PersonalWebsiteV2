import { Box, Link, Typography } from "@mui/material";
import React from "react";

const Project = () => {
  return (
    <Box
      sx={{
        paddingTop: "1rem",
        background: "#adf7ff",
        paddingBottom: "10rem",
        paddingLeft: "5%",
      }}
    >
      <Typography variant="h2">Projects</Typography>
      <Typography>
        Here are some notable projects I've created but more are available at my
        Github!
      </Typography>
      <Link
        href="https://return-pal.vercel.app/"
        sx={{
          cursor: "pointer",
        }}
      >
        <Box sx={{ background: "#0a0147", width: "40%" }}>
          <Typography color="white">ReturnPal</Typography>
          <img src="/images/logo.png" width="200px" />
          <Typography color="white">Skills</Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default Project;
