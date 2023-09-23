import { TrustAuthXLogo } from "../../public/svgs/TrustAuthXLogo";
import { Vector } from "../../public/svgs/Vector";
import { VectorRight } from "../../public/svgs/VectorRight";
import { GithubLogo } from "../../public/svgs/Github";
import Footer from "../components/Footer";
import Customize from "../components/Customize";
import Showcase from "../components/Showcase";
import Authlite from "../components/Authlite";
import Timeline from "../components/Timeline";
import GradientPlatform from "../components/GradientPlatform";
import LandingHero from "../components/LandingHero";
import React from "react";
import AiInCLI from "../components/AiInCLI";

export default function LandingPage() {
  return (
    <>
      <LandingHero />
      <AiInCLI />
      <GradientPlatform />
      <Timeline />
      <Authlite />
      <Showcase />
      <Customize />
      <Footer />
    </>
  );
}

function Menu() {
  return (
    <div className="border-0.5 bg-opacity-1 absolute left-0 top-0 z-10 inline-flex h-20 w-full items-start justify-center border border-[#DFDFDF] border-white bg-black bg-opacity-0 px-14 py-5 text-[#DFDFDF] backdrop-blur-sm">
      <div className="flex h-12 items-center justify-between gap-96 px-14">
        <div className="flex items-center justify-start gap-7">
          <div className="relative h-11 w-11">
            <TrustAuthXLogo />
            <div className="absolute left-[10.48px] top-[7.99px] h-8 w-6"></div>
          </div>
          <div className="flex h-6 items-start justify-center gap-7">
            <div className="inline-flex w-24 items-center justify-center gap-1 self-stretch">
              <div className="text-center text-base font-medium leading-normal mix-blend-exclusion">
                Products
              </div>
              <div className="inline-flex w-5 items-start justify-start px-1.5 py-2">
                <Vector />
              </div>
            </div>
            <div className="inline-flex items-start justify-start self-stretch">
              <div className="text-base font-medium leading-normal mix-blend-exclusion">
                Customers
              </div>
            </div>
            <div className="inline-flex items-start justify-start self-stretch">
              <div className="text-base font-medium leading-normal mix-blend-exclusion">
                Enterprise
              </div>
            </div>
            <div className="inline-flex items-start justify-start self-stretch">
              <div className="text-base font-medium leading-normal mix-blend-exclusion">
                Pricing
              </div>
            </div>
            <div className="inline-flex shrink grow basis-0 items-center justify-center gap-1 self-stretch">
              <div className="text-center text-base font-medium leading-normal mix-blend-exclusion">
                Resources
              </div>
              <div className="inline-flex w-5 items-start justify-start px-1.5 py-2" />
            </div>
            <div className="inline-flex items-start justify-start self-stretch">
              <div className="flex items-start justify-start">
                <div className="text-base font-medium leading-normal mix-blend-exclusion">
                  Contact us
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-11">
          <div className="flex items-center justify-start gap-1.5">
            <GithubLogo />
            <div className="text-base font-semibold leading-none mix-blend-exclusion">
              Github
            </div>
          </div>
          <div className="flex items-center justify-start py-4">
            <div className="text-base font-semibold leading-none mix-blend-exclusion">
              Docs
            </div>
          </div>
          <div className="flex items-center justify-start py-4">
            <div className="text-base font-semibold leading-none mix-blend-exclusion">
              Sign in
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 rounded-full border border-neutral-800 bg-white px-5 py-2.5">
            <div className="text-center text-base font-semibold leading-normal text-white mix-blend-exclusion">
              Let’s Get Started
            </div>
            <div className="flex h-5 w-5 items-center justify-start gap-2 py-1.5 pr-2" />
            <VectorRight />
          </div>
        </div>
      </div>
    </div>
  );
}
