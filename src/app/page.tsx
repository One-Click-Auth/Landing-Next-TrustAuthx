import React from "react";
import Footer from "../components/Footer";
import Showcase from "../components/Showcase";
import Authlite from "../components/Authlite";
import GradientPlatform from "../components/GradientPlatform";
import LandingHero from "../components/LandingHero";
import AiInCLI from "../components/AiInCLI";
import Navbar from "../components/Navbar";
import Customize from "../components/Customize";

export default function LandingPage() {
  // const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Navbar />
      <LandingHero />
      <AiInCLI />
      <GradientPlatform />
      {/* {!isMobile ? <Timeline /> : null} */}
      <Authlite />
      <Showcase />
      <Footer />
    </>
  );
}
