import Image from "next/image";
import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Authlite() {
  return (
    <div
      style={{
        background:
          "radial-gradient(161.01% 103.41% at -1.12% 6.78%, #434343 0%, #000 88.95%, #000 100%)",
      }}
      className="my-10 px-4 py-12 text-white md:mx-4 md:mt-20 md:rounded-2xl md:px-40 md:py-28"
    >
      <div className="flex flex-col items-center gap-0 md:flex-row md:gap-6">
        <p className="border-l-4 border-red-600 py-2 pl-3  text-3xl font-semibold">
          Auth-lite
        </p>
        <Image
          src="/assets/connect.svg"
          width={120}
          height={120}
          alt="connect"
          className="mt-3"
        />
        <p className="text-center text-xl font-semibold">
          Designed, <br /> To save Time
        </p>
      </div>

      <div className="mt-8 flex flex-col-reverse gap-8 lg:flex-row">
        <div className="font-light lg:min-w-max">
          <p className="min-w-lg lg:max-w-lg">
            A thoughtfully designed, fully managed system created to supercharge
            the development of enterprise-grade applications. It provides
            top-tier security and token management, offers customizable UI
            options, all backed by high-powered caching servers. With Auth-Lite,
            we&apos;re putting developers first on their journey towards
            accelerated, hassle-free development.
          </p>

          <p className="mt-6 max-w-max border-b-2 pb-6">
            Auth-Lite: Empowering Developers with Elevated Efficiency
          </p>
          <p className="mt-6">Auth-Lite is the developer&apos;s dream</p>

          <div className="mt-10">
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  className: "sm:rounded-full",
                }),
              )}
            >
              Learn more about Auth-Lite{" "}
              <ChevronRight className="text-red-500" />
            </Link>{" "}
            <br className="sm:hidden" />
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "default",
                  className:
                    "mt-4 bg-white font-semibold text-black sm:ml-6 sm:mt-0 sm:rounded-full",
                }),
              )}
            >
              Let&apos;s Get Started <ChevronRight className="text-red-500" />
            </Link>
          </div>
        </div>
        <div>
          <Image
            src="/assets/connect-hero.svg"
            width={800}
            height={500}
            className="h-auto w-full min-w-full object-fill"
            alt="conections"
          />
        </div>
      </div>

      <p className="mt-8 max-w-[260px] text-sm sm:ml-auto">
        {" "}
        <PlusSvg /> Authorize, Authenticate & Maintain your user Token &
        Sessions.
      </p>
    </div>
  );
}

const PlusSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="29"
      viewBox="0 0 28 29"
      fill="none"
    >
      <path
        d="M13.8789 7.68359V21.5452"
        stroke="#17CA2E"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.94922 14.6152H20.8109"
        stroke="#17CA2E"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
