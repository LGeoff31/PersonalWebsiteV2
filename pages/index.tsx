import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import WavyLine from "./components/WavyLine";
import Project from "./components/Project";

export default function Home() {
  return (
    <>
      <Navbar />
      <Homepage />
      <WavyLine />
      <About />
      <WavyLine />
      <Project />
    </>
  );
}
