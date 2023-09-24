import InteractivePrism from "./interactivePrism";
import appDemo from "public/images/AppDemo.webp";
import Image from "next/image";

export default function LandingHero() {
  return (
    <>
      <InteractivePrism bgColor="black" height="80rem" />
      <h1 className="absolute left-20 top-64 z-10 w-fit p-0 text-left text-7xl text-white mix-blend-exclusion">
        TrustAuthX Light <br />
        for Business, <br />
        Delight for Devs.
      </h1>
      <div className="absolute left-20 top-[32rem] z-10 flex items-center gap-20 text-left text-white">
        <button className="z-10 flex items-center gap-3 rounded-full border-2 border-[#F35815] px-5 py-3 mix-blend-exclusion">
          Let’s Get Started for Free{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
          >
            <path
              d="M1.07031 11.6711L5.53902 7.20241C5.60516 7.13644 5.65764 7.05806 5.69344 6.97178C5.72925 6.88549 5.74768 6.79299 5.74768 6.69957C5.74768 6.60616 5.72925 6.51365 5.69344 6.42737C5.65764 6.34108 5.60516 6.26271 5.53902 6.19674L1.07031 1.72803"
              stroke="#F35815"
              strokeWidth="2.13066"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="flex items-center gap-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="59"
            height="58"
            viewBox="0 0 59 58"
            fill="none"
          >
            <path
              d="M29.4833 57.9998C13.5233 57.9998 0.585938 45.0624 0.585938 29.1024C0.585938 13.1424 13.5233 0.205078 29.4833 0.205078C45.4433 0.205078 58.3807 13.1424 58.3807 29.1024C58.3807 45.0624 45.4433 57.9998 29.4833 57.9998ZM25.5012 18.7427C25.3273 18.6267 25.1252 18.56 24.9164 18.5498C24.7076 18.5395 24.4999 18.5861 24.3154 18.6845C24.131 18.783 23.9767 18.9296 23.869 19.1088C23.7613 19.288 23.7042 19.4931 23.7038 19.7021V38.5027C23.7042 38.7118 23.7613 38.9169 23.869 39.0961C23.9767 39.2753 24.131 39.4219 24.3154 39.5203C24.4999 39.6188 24.7076 39.6654 24.9164 39.6551C25.1252 39.6449 25.3273 39.5782 25.5012 39.4621L39.6003 30.0647C39.7588 29.9592 39.8888 29.8161 39.9788 29.6483C40.0687 29.4804 40.1158 29.2929 40.1158 29.1024C40.1158 28.912 40.0687 28.7245 39.9788 28.5566C39.8888 28.3887 39.7588 28.2457 39.6003 28.1402L25.5012 18.7427Z"
              fill="#9EFE00"
            />
          </svg>
          <p className="flex flex-col items-start">
            <span className="text-xl text-[#9EFE00]">Watch Demo</span>
            <span className="text-sm">2 min</span>
          </p>
        </button>
      </div>
      <div className="relative -mt-[25rem]">
        <Image src={appDemo} alt="Preview of TrustAuthX app" />
      </div>
    </>
  );
}
