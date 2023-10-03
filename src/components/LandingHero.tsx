"use client";

import InteractivePrism from "./interactivePrism";
import appDemo from "public/images/AppDemo.webp";
import Image from "next/image";
import { useMediaQuery } from "@mantine/hooks";

export default function LandingHero() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <InteractivePrism
        bgColor="black"
        height={isMobile ? "50vh" : "60rem"}
        isMobile={!!isMobile}
      />

      {/*Hero Heading*/}
      <h1 className="absolute left-10 top-28 z-10 w-fit p-0 text-left text-4xl font-extrabold text-white mix-blend-exclusion md:left-20 md:top-64 md:text-7xl">
        TrustAuthX <br />
        Low-Code Auth <br />
        Infra for the Web.
      </h1>

      {/*CTA*/}
      <div className="left-20 top-[32rem] z-10 mt-6 flex flex-col-reverse items-center gap-10 text-left text-white md:absolute md:mt-0 md:flex-row md:gap-20">
        <button className="z-10 flex items-center gap-3 rounded-full border-2 border-[#F35815] bg-black fill-black px-5 py-3 mix-blend-exclusion">
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
        <button className="flex items-center gap-6 rounded-full text-gray-400 mix-blend-exclusion">
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
            <span className="text-xl text-[#9EFE00] mix-blend-exclusion">
              Watch Demo
            </span>
            <span className="text-sm">2 min</span>
          </p>
        </button>
      </div>

      {/*Low code*/}
      <div className="relative md:-mt-[25rem] md:mb-[6.7rem]">
        <Image src={appDemo} alt="Preview of TrustAuthX app" />
        <div className="mt-10 p-4 md:absolute md:bottom-[1rem] md:right-[10rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.875rem"
            height="2.875rem"
            viewBox="0 0 46 46"
            fill="none"
            className="ml-auto"
          >
            <path
              d="M0 23C0 27.549 1.34893 31.9958 3.8762 35.7781C6.40347 39.5604 9.99558 42.5084 14.1983 44.2492C18.401 45.99 23.0255 46.4455 27.4871 45.5581C31.9486 44.6706 36.0468 42.4801 39.2634 39.2634C42.4801 36.0468 44.6706 31.9486 45.558 27.4871C46.4455 23.0255 45.99 18.401 44.2492 14.1983C42.5084 9.99558 39.5604 6.40347 35.7781 3.8762C31.9958 1.34893 27.549 1.66893e-06 23 1.66893e-06C16.902 0.00644088 11.0556 2.43172 6.74365 6.74366C2.43171 11.0556 0.0064396 16.902 0 23ZM24.2517 12.9021L31.3286 19.979C31.6606 20.311 31.8471 20.7613 31.8471 21.2308C31.8471 21.7003 31.6606 22.1505 31.3286 22.4825C30.9967 22.8145 30.5464 23.001 30.0769 23.001C29.6074 23.001 29.1572 22.8145 28.8252 22.4825L24.7692 18.4243L24.7692 31.8461C24.7692 32.3154 24.5828 32.7654 24.251 33.0972C23.9192 33.429 23.4692 33.6154 23 33.6154C22.5308 33.6154 22.0808 33.429 21.749 33.0972C21.4172 32.7654 21.2308 32.3154 21.2308 31.8461L21.2308 18.4243L17.1748 22.4825C16.8428 22.8145 16.3926 23.001 15.9231 23.001C15.4536 23.001 15.0033 22.8145 14.6713 22.4825C14.3394 22.1505 14.1529 21.7003 14.1529 21.2308C14.1529 20.7613 14.3394 20.311 14.6713 19.979L21.7483 12.9021C21.9126 12.7376 22.1077 12.6071 22.3225 12.5181C22.5373 12.4291 22.7675 12.3832 23 12.3832C23.2325 12.3832 23.4627 12.4291 23.6775 12.5181C23.8923 12.6071 24.0874 12.7376 24.2517 12.9021Z"
              fill="#9EFE00"
            />
          </svg>
          <h2 className="text-right text-3xl font-light md:text-[3.5rem] md:leading-[50px]">
            Low-Code Is The New <br />
            Source Code
          </h2>
          <p className="ml-auto mt-10 w-fit text-right">
            TrustAuthx Serverless Ai Based Authentication & Authorization <br />
            infrastructure, manage everything from Auth to Sessions.
          </p>
        </div>
      </div>
    </>
  );
}
