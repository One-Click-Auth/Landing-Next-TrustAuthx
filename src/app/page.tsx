import React from "react";
import Footer from "../components/Footer";
import Showcase from "../components/Showcase";
import Authlite from "../components/Authlite";
import GradientPlatform from "../components/GradientPlatform";
import AiInCLI from "../components/AiInCLIWrapper";
import Navbar from "../components/Navbar";
import { AppDemo } from "../components/AppDemo";
import { Landing } from "../components/Landing";

export default function LandingPage() {
  // const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Landing />
      {/* <AppDemo /> */}
      <AiInCLI />
      <GradientPlatform />
      {/*       {!isMobile ? <Timeline /> : null} */}
      <Authlite />
      <Showcase />
      {/* <Customize /> */}
    </>
  );
}
