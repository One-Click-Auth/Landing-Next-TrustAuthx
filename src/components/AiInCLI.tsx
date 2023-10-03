"use client";

import React from "react";
import CodeTabs from "./showcase/CodeTabs";
import { useMediaQuery } from "@mantine/hooks";

function AiInCli() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div
      className="p-4 md:py-14"
      style={{
        background: isMobile
          ? "black"
          : "linear-gradient(78deg, #000 49.2%, #0E0E0E 52.62%, rgba(255, 255, 255, 0.00) 52.66%)",
      }}
    >
      <h2 className="mb-10 flex flex-wrap justify-center gap-3 text-center text-4xl font-extralight tracking-widest text-white mix-blend-difference md:mb-14 md:gap-y-10 md:text-[5rem]">
        <span className="h-full text-[#9EFE00]">See. </span>
        <span>THE</span> <span className="font-bold">AI </span>
        <span>in ACTION</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-12 md:gap-28">
        <p className="flex flex-col text-[#9DFD00]">
          <span className="text-[1.5rem] font-light">
            <span className="mr-2 text-white">{"-> "}</span>
            Get your Auth. project perfectly running <br />
            with as Low-Code as 3 lines.
          </span>
          <span className="mt-3 text-lg font-light text-white">
            That’s is folks!
          </span>
        </p>
        <div>
          <CodeTabs
            pyFileName="py (cli)"
            pyCode={
              <div className="text-base font-normal text-white">
                <p>
                  <span className="mr-[10px]  text-[#6E7681]">1</span>
                  <span className="text-white  ">pip install</span>
                  <span className="text-[#FF7B72]  "> trustauthx</span>
                </p>

                <p>
                  <span className="mr-[10px] text-base font-normal text-[#6E7681]">
                    2
                  </span>
                  <span className="text-[#FF7B72]">trustauthx</span>
                  <span className="text-sky-300"> login </span>
                  <span className="text-white">
                    {" "}
                    me -k
                    {"<API KEY> -s <SECRET KEY> -o <ORG ID>"}{" "}
                  </span>
                </p>

                <p>
                  <span className="mr-[10px] text-base font-normal text-[#6E7681]">
                    3
                  </span>
                  <span className="text-[#FF7B72]  ">trustauthx</span>
                  <span className="text-sky-300 "> neuroform </span>
                  <span className="text-white "> fastapi</span>
                </p>

                <p>
                  <span className="mr-[10px] text-base font-normal text-[#6E7681]">
                    4
                  </span>
                  <span className="text-[#FF7B72]  ">trustauthx</span>
                  <span className="text-sky-300 "> start </span>
                  <span className="text-white "> fastapi</span>
                </p>
              </div>
            }
            jsFileName="js (cli)"
            goFileName="go (cli)"
          />
          <button className="mt-8 flex w-full items-center justify-center gap-2 text-xs text-white lg:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
            >
              <path
                d="M1.66853 10.0134C1.796 9.99807 1.92524 10.0081 2.04885 10.0428C2.17246 10.0774 2.28803 10.1362 2.38894 10.2155C2.48985 10.2949 2.57413 10.3934 2.63696 10.5053C2.6998 10.6173 2.73995 10.7406 2.75513 10.868C2.92117 12.2413 3.48111 13.5371 4.36736 14.5991C5.25361 15.6611 6.4283 16.4439 7.74963 16.8531C9.07097 17.2622 10.4825 17.2801 11.8138 16.9048C13.1451 16.5294 14.3393 15.7767 15.2523 14.7376L13.6837 13.1689C13.638 13.1234 13.6069 13.0653 13.5943 13.002C13.5816 12.9388 13.5881 12.8732 13.6128 12.8136C13.6375 12.754 13.6793 12.7031 13.733 12.6673C13.7867 12.6315 13.8498 12.6125 13.9143 12.6126H18.6646C18.7509 12.6126 18.8338 12.6469 18.8949 12.708C18.956 12.7691 18.9903 12.8519 18.9903 12.9383V17.6886C18.9904 17.7531 18.9713 17.8162 18.9356 17.8699C18.8998 17.9235 18.8489 17.9654 18.7893 17.9901C18.7297 18.0148 18.6641 18.0212 18.6008 18.0086C18.5376 17.996 18.4795 17.9649 18.4339 17.9192L16.636 16.1212C15.4624 17.4183 13.9407 18.3506 12.2521 18.8071C10.5636 19.2636 8.77939 19.2251 7.11214 18.6961C5.44488 18.167 3.96486 17.1698 2.84842 15.8233C1.73198 14.4768 1.02619 12.8376 0.815144 11.1013C0.799864 10.9738 0.809855 10.8445 0.844546 10.7209C0.879236 10.5973 0.937946 10.4818 1.01732 10.3808C1.09669 10.2799 1.19518 10.1957 1.30714 10.1328C1.4191 10.07 1.54234 10.0298 1.66983 10.0147L1.66853 10.0134ZM9.87014 2.84102C8.8513 2.83994 7.84401 3.05665 6.91576 3.47662C5.98751 3.89659 5.15975 4.51012 4.48795 5.27609L6.05662 6.84476C6.10229 6.89031 6.1334 6.9484 6.14602 7.01166C6.15864 7.07492 6.15218 7.1405 6.12748 7.20009C6.10278 7.25968 6.06094 7.31059 6.00727 7.34638C5.9536 7.38216 5.89051 7.4012 5.82601 7.40108H1.07572C0.989334 7.40108 0.906486 7.36677 0.845402 7.30568C0.784317 7.2446 0.750001 7.16175 0.750001 7.07536V2.32508C0.749885 2.26057 0.768926 2.19748 0.804708 2.14381C0.840491 2.09014 0.891404 2.0483 0.950993 2.0236C1.01058 1.9989 1.07616 1.99245 1.13942 2.00507C1.20268 2.01768 1.26077 2.0488 1.30633 2.09447L3.1043 3.89244C4.27786 2.59538 5.79958 1.66306 7.48813 1.20655C9.17668 0.750041 10.9609 0.788596 12.6281 1.31762C14.2954 1.84664 15.7754 2.84383 16.8918 4.19037C18.0083 5.53691 18.7141 7.17602 18.9251 8.91242C18.9559 9.16985 18.8831 9.42895 18.7228 9.63273C18.5625 9.83651 18.3279 9.96827 18.0704 9.99902C17.813 10.0298 17.5539 9.957 17.3501 9.79672C17.1464 9.63643 17.0146 9.40176 16.9838 9.14433C16.7731 7.40594 15.933 5.80489 14.6224 4.64356C13.3118 3.48224 11.6213 2.84102 9.87014 2.84102Z"
                className="fill-white lg:fill-black"
              />
            </svg>
            Replay
          </button>
        </div>
      </div>
    </div>
  );
}

export default AiInCli;
