import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const AboutBox = () => {
  const aboutData = [
    {
      src: "/images/waterlooLogo.png",
      name: "University of Waterloo",
      heading: "Computer Engineering",
      date: "Sep 2023 - Apr 2028",
      description: "I'm currently in my first year in computer engineering. ",
    },
    {
      src: "/images/IB-logo.png",
      name: "St. Robert CHS",
      heading: "Computer Engineering",
      date: "Sep 2023 - Apr 2028",
      description:
        "Current St. Robert CHS. IB Graduate. I have taken Grade 11 & 12 computer science in Python and Java. I am currently taking Higher Level math, physics and economics which are university level courses. My Standard Level courses include chemistry, english, french. I will be attending the University of Waterloo for Computer Engineering in the fall of 2023! ",
    },
    {
      src: "/images/react.png",
      name: "Computer Science And Mathematics Tutor",
      heading: "Tutorax & Freelanced",
      date: "Sep 2023dwad - Apr 2028",
      description:
        "I Tutor UWaterloo Contests (Ex. Cayley, Fermet, Euclid, CCC). Additionally, I teach the fundementals of Python as well as Math courses from Gr. 9 to 12. Feel free to contact me @geoffrey31415@gmail.com ",
    },
    {
      src: "/images/marathon.png",
      name: "Competitive Runner",
      heading: "Cross Country & Track and Field",
      date: "2017-2023",
      description:
        "I mainly specizlize in long distance events from 5km and above. My PB's ~ 800m: 2:09, 1000m: 2:51, 5km: 18:06, 10km: 41: 56, Half-Marathon: 1:29:58, Marathon: 3:17:02 ",
    },
    {
      src: "/images/magic.png",
      name: "Magic and Cardistry",
      heading: "Magician",
      date: "2019-2023",
      description:
        "I began studying phycology and the art of magic after being inspired by several shows of Penn and Teller. During the pandemic, I self-taught myself several different sleight of hand tricks. I promoted my passion by creating the Magic and Cardistry Club at my School where I taught other individuals the fundementals of phycology and magic. ",
    },
  ];
  return (
    <Stack>
      {aboutData.map((experience) => (
        <AboutMeSection
          name={experience.name}
          description={experience.description}
          heading={experience.heading}
          src={experience.src}
          date={experience.date}
        />
      ))}
    </Stack>
  );
};

const AboutMeSection = ({
  name,
  description,
  heading,
  src,
  date,
}: {
  name: string;
  description: string;
  heading: string;
  src: string;
  date: string;
}) => {
  return (
    <Stack
      direction="row"
      sx={{
        background: "#0a0147",
        marginRight: "5%",
        borderRadius: "1rem",
        marginTop: "2%",
        padding: "1rem",
      }}
    >
      <img
        src={src}
        alt="logo"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100px",
          height: "10%",
        }}
      />
      <Stack paddingLeft="2rem" width="100%">
        <Stack
          direction={{ md: "row", xs: "column" }}
          justifyContent={"space-between"}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            paddingBottom="0rem"
            marginBottom="0rem"
            sx={{ color: "white" }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              display: { xs: "none", md: "block" },
              visibility: { xs: "hidden", md: "visible" },
              color: "white",
            }}
          >
            {date}
          </Typography>
        </Stack>
        <Typography variant="body1" sx={{ color: "white" }}>
          {heading}
        </Typography>
        <Typography
          sx={{
            display: { xs: "block", md: "none" },
            color: "white",
            padding: { md: "0.5rem" },
          }}
        >
          {date}
        </Typography>

        <Typography sx={{ color: "white", paddingTop: "0.5rem" }}>
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default AboutBox;
