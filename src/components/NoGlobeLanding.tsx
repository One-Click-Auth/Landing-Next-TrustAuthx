import React from "react";

import Link from "next/link";

export function NoGlobeLanding() {
  return (
    <>
      <section className="flex items-center bg-black py-12 pt-28 text-white md:pt-44 ">
        <div className="container mx-auto flex flex-col items-center md:px-36 ">
          <div>
            <div className="md:px-2">
              <button
                //   variant={"primary"}
                className="my-3 flex h-6 items-center  gap-1 rounded-xl border border-[#F35815] bg-black px-2 text-[0.85rem]"
              >
                {/* logo */}
                <div>Check our new update</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="13"
                  viewBox="0 0 7 13"
                  fill="none"
                  className="w-7"
                >
                  <path
                    d="M1.07031 11.6711L5.53902 7.20241C5.60516 7.13644 5.65764 7.05806 5.69344 6.97178C5.72925 6.88549 5.74768 6.79299 5.74768 6.69957C5.74768 6.60616 5.72925 6.51365 5.69344 6.42737C5.65764 6.34108 5.60516 6.26271 5.53902 6.19674L1.07031 1.72803"
                    stroke="#fff"
                    strokeWidth="2.13066"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-wrap justify-between md:flex-nowrap">
              <div className="text-4xl  font-semibold tracking-[-0.04rem] md:w-[55%] md:text-[3.275rem] md:leading-[4rem] md:tracking-tight ">
                TrusthAuthx: Low-Code Auth Infra for the web{" "}
                <span className="text-[#9EFE00]">_</span>
              </div>
              <div className="my-3 flex flex-col gap-8 text-[1rem] md:w-[45%]  md:pl-16 ">
                <p className="text-zinc-300">
                  {"Appwrite's"} open-source platform lets you add Auth, DBs,
                  Functions and Storage to your product and build any
                  application at any scale, own your data, and use your
                  preferred coding languages and tools.
                </p>
                <Link href="https://app.trustauthx.com/">
                  <button className="z-10 flex w-max cursor-pointer  items-center gap-3 rounded-full border-2 border-[#F35815] bg-black fill-black px-2  py-1 text-xs font-semibold mix-blend-exclusion md:px-5 md:py-3 md:text-base">
                    Let’s Get Started for Free{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="13"
                      viewBox="0 0 7 13"
                      fill="none"
                      className="w-7"
                    >
                      <path
                        d="M1.07031 11.6711L5.53902 7.20241C5.60516 7.13644 5.65764 7.05806 5.69344 6.97178C5.72925 6.88549 5.74768 6.79299 5.74768 6.69957C5.74768 6.60616 5.72925 6.51365 5.69344 6.42737C5.65764 6.34108 5.60516 6.26271 5.53902 6.19674L1.07031 1.72803"
                        stroke="#fff"
                        strokeWidth="2.13066"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
            <button className="flex items-center gap-2 rounded-full text-gray-400 mix-blend-exclusion md:-mt-14 md:gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="46"
                viewBox="0 0 59 58"
                fill="none"
                className="w-6 md:w-10"
              >
                <path
                  d="M29.4833 57.9998C13.5233 57.9998 0.585938 45.0624 0.585938 29.1024C0.585938 13.1424 13.5233 0.205078 29.4833 0.205078C45.4433 0.205078 58.3807 13.1424 58.3807 29.1024C58.3807 45.0624 45.4433 57.9998 29.4833 57.9998ZM25.5012 18.7427C25.3273 18.6267 25.1252 18.56 24.9164 18.5498C24.7076 18.5395 24.4999 18.5861 24.3154 18.6845C24.131 18.783 23.9767 18.9296 23.869 19.1088C23.7613 19.288 23.7042 19.4931 23.7038 19.7021V38.5027C23.7042 38.7118 23.7613 38.9169 23.869 39.0961C23.9767 39.2753 24.131 39.4219 24.3154 39.5203C24.4999 39.6188 24.7076 39.6654 24.9164 39.6551C25.1252 39.6449 25.3273 39.5782 25.5012 39.4621L39.6003 30.0647C39.7588 29.9592 39.8888 29.8161 39.9788 29.6483C40.0687 29.4804 40.1158 29.2929 40.1158 29.1024C40.1158 28.912 40.0687 28.7245 39.9788 28.5566C39.8888 28.3887 39.7588 28.2457 39.6003 28.1402L25.5012 18.7427Z"
                  fill="#9EFE00"
                />
              </svg>
              <p className="flex flex-col items-start">
                <span className="text-xs text-[#9EFE00] mix-blend-exclusion md:text-xl">
                  Watch Demo
                </span>
                <span className="text-xs md:text-base">2 min</span>
              </p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
