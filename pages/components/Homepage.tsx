import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
const Homepage = () => {
  return (
    <Box
      sx={{ background: "#010142" }}
      paddingTop="20rem"
      paddingBottom="20rem"
      display="flex"
      flexDirection={"column"}
    >
      <Typography
        fontWeight="0.1rem"
        variant="h2"
        fontSize="2rem"
        margin="0 auto"
        color="white"
      >
        Hi, I&apos;m Geoffrey Lee 👋{" "}
      </Typography>
      <Typography
        variant="h4"
        fontSize="2.5rem"
        color="white"
        display="flex"
        margin="0 auto"
        justifyContent={"center"}
        textAlign="center"
        paddingBottom="1rem"
      >
        I&apos;m a student who loves solving <br /> problems with software and
        math!{" "}
      </Typography>
      <Stack direction="row" gap="10px" margin="0 auto">
        <InstagramIcon
          href="/about"
          sx={{
            width: "2.5rem",
            height: "2.5rem",
            background: "transparent",
            borderRadius: "50%",
            border: "2px solid grey",
            color: "pink",
            cursor: "pointer",
          }}
        />
        <LinkedInIcon
          sx={{
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
            border: "2px solid grey",
            color: "pink",
          }}
        />
        <DescriptionIcon
          sx={{
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
            border: "2px solid grey",
            color: "pink",
          }}
        />
        <GitHubIcon
          sx={{
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
            border: "2px solid grey",
            color: "pink",
          }}
        />
        <EmailIcon
          sx={{
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
            border: "2px solid grey",
            color: "pink",
          }}
        />
      </Stack>
    </Box>
  );
};

export default Homepage;
