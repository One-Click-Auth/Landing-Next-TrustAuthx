import ArrowIcon from "./ArrowIcon";
import AnimatedGradient from "./gradients/AnimatedGradient";
import React from "react";
import Image from 'next/image';

export default function GradientPlatform() {
  return (
    <div className="-z-20 w-full bg-black py-24 text-gray-200 ">
      <div className="flex flex-col  items-center">
        <div className="ml-36 flex max-h-[738px]  w-full max-w-[1240px] flex-col  flex-wrap gap-14  rounded-3xl px-4">
          <div className=" text-4xl font-semibold">
            TrustAuthx is the world’s most Easiest and
            <br />
            completely Managed Auth platform
          </div>

          <div className="mb-14 flex items-center gap-2">
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
            className="relative z-10 mt-6 h-full max-h-[738px]  w-2/3 rounded-3xl border border-white border-opacity-25 bg-white bg-opacity-5 p-8 shadow-inner"
            style={{
              borderRadius: "2.12119rem",
              border: "1.212px solid rgba(255, 255, 255, 0.25)",
              background: "rgba(255, 255, 255, 0.10)",
              boxShadow:
                "0px 0px 9.69673px 1.21209px rgba(255, 255, 255, 0.20) inset",
              backdropFilter: "blur(24.153770446777344px)",
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
              <Image src="/page3.png" alt="imagetrustauthx" className="p-4" />
            </div>
          </div>
        </div>
        <AnimatedGradient />
      </div>
    </div>
  );
}
