import React from "react";

const WavyLine = ({}) => {
  return (
    <svg
      width="100%"
      height="205"
      fill="none"
      style={{ background: "linear-gradient(0deg, #adf7ff, #010142 )" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 100 
   C 50 60, 100 140, 150 100 
   S 250 40, 300 100 
   S 400 160, 450 100 
   S 550 40, 600 100 
   S 700 160, 750 100 
   S 850 40, 900 100 
   S 1000 160, 1050 100 
   S 1150 40, 1200 100 
   S 1300 160, 1350 100 
   S 1450 40, 1500 100 
   S 1550 160, 1600 100 
   L 1600 200 
   L 0 200 
   Z"
        fill="#adf7ff"
      ></path>
    </svg>
  );
};

export default WavyLine;
