import Footer from "../components/Footer";
// import Customize from "../components/Customize";
import Showcase from "../components/Showcase";
import Authlite from "../components/Authlite";
import Timeline from "../components/Timeline";
import GradientPlatform from "../components/GradientPlatform";
import LandingHero from "../components/LandingHero";
import React from "react";
import AiInCLI from "../components/AiInCLI";
import Navbar from "../components/Navbar";
import { useMediaQuery } from "@mantine/hooks";

export default function LandingPage() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Navbar />
      <LandingHero />
      <AiInCLI />
      <GradientPlatform />
      {!isMobile ? <Timeline /> : null}
      <Authlite />
      <Showcase />
      {/* <Customize /> */}
      <Footer />
    </>
  );
}
