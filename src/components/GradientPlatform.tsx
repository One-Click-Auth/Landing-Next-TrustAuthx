"use client";

import ArrowIcon from "./ArrowIcon";
import AnimatedGradient from "./gradients/AnimatedGradient";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import MobileAppDemo from "../../public/images/MobileAppDemo.webp";
import AppDemo from "../../public/page3.png";
import Image from "next/image";

export default function GradientPlatform() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="w-full bg-black py-8 text-gray-200 md:py-20 ">
      <div className="flex flex-col items-center">
        <div className="flex max-h-[738px] w-full max-w-[1240px] flex-col flex-wrap gap-14 rounded-3xl px-4 md:ml-36">
          <div className="text-2xl font-semibold md:text-4xl">
            TrustAuthx is the world’s Easiest and
            <br />
            completely Managed Auth platform
          </div>

          <div className="mb-8 flex items-center justify-center gap-2 md:mb-14 md:justify-start">
            <button className="flex items-center justify-center gap-2 rounded-full border border-white px-3 py-1">
              Get started <ArrowIcon />
            </button>

            <button className="flex items-center justify-center gap-2 rounded-full  border-white px-3 py-1">
              Schedule a demo <ArrowIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="flex items-center justify-center px-4">
          <div
            className="relative z-10 my-3 h-full max-h-[738px] w-2/3 rounded-[2.1rem] border border-[#ffffff40] border-opacity-25 bg-[#ffffff1a] bg-white bg-opacity-5 p-4 shadow-inner backdrop-blur-[24px] md:my-6 md:p-8"
            style={{
              boxShadow: "0px 0px 9.5px 1px #ffffff33 inset",
            }}
          >
            <div
              style={{
                borderRadius: "0.90906rem",
                background: "linear-gradient(180deg, #EBEBEB 0%, #E1E1E1 100%)",
                boxShadow:
                  "0px 1.18388px 37.88403px -7.27255px #000, 0px 24.24183px 37.88403px -6.06046px rgba(0, 0, 0, 0.10)",
              }}
            >
              {isMobile ? (
                <Image
                  src={MobileAppDemo}
                  alt="App Demo"
                  className="p-2 md:p-4"
                />
              ) : (
                <Image src={AppDemo} alt="App Demo" className="p-2 md:p-4" />
              )}
            </div>
          </div>
        </div>

        {!isMobile ? <AnimatedGradient /> : null}
      </div>
    </div>
  );
}
