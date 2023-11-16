"use client";

import React, { useState } from "react";
import { TrustAuthXLogo } from "../../public/svgs/TrustAuthXLogo";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { GithubLogo } from "../../public/svgs/Github";
import { VectorRight } from "../../public/svgs/VectorRight";
import Link from "next/link";

const internalLinks = [
  { name: "Products", link: "" },
  { name: "Customers", link: "" },
  { name: "Enterprise", link: "https://tally.so/r/w2aQEL" },
  { name: "Pricing", link: "#pricing" },
  { name: "Contact us", link: "https://tally.so/r/wMNB8p" },
];

const externalLinks = [
  { name: "Github" },
  { name: "Docs" },
  { name: "Sign in" },
  { name: "Let’s Get Started" },
];

const ExternalLinks = () => (
  <>
    <Link
      href="https://github.com/One-Click-Auth/Landing-Next-TrustAuthx"
      target="_blank"
    >
      <div className="flex items-center justify-start gap-1.5">
        <GithubLogo />
        <div className="font-semibold">Github</div>
      </div>
    </Link>
    <Link href="https://docs.trustauthx.com/" target="_blank">
      <div className="font-semibold">Docs</div>
    </Link>
    <Link href="https://app.trustauthx.com/" target="_blank">
      <div className="font-semibold">Sign In</div>
    </Link>

    <div className="flex items-center justify-center gap-1 rounded-full border border-neutral-800 bg-white px-3.5 py-1.5 text-sm">
      <Link href="https://app.trustauthx.com" target="_blank">
        <div className="text-center font-semibold leading-normal text-white mix-blend-exclusion">
          Let’s Get Started
        </div>
      </Link>
      <div className="flex h-5 w-5  items-center justify-start gap-2 py-1 pr-2" />
      <VectorRight />
    </div>
  </>
);

function Navbar() {
  return (
    <>
      <div className="text-sm fixed z-[1000] flex w-full justify-between border-b-[0.5px] border-[#696C70] bg-[#00000068] px-6 text-white mix-blend-luminosity backdrop-blur-[75px] md:py-2">
        {/*Internal Links*/}
        <div className="flex items-center gap-5">
          <TrustAuthXLogo />
          <div className="hidden items-start justify-center gap-4 md:flex md:flex-wrap">
            {internalLinks.map((link) => (
              <Link
                target={link.name === "Pricing" ? "" : "_blank"}
                href={link.link}
                key={link.name}
                className="font-medium mix-blend-exclusion"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/*External Links*/}
        <div className="hidden items-center justify-center gap-4 md:flex md:flex-wrap">
          <ExternalLinks />
        </div>

        {/*  Mobile Menu*/}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild className="md:hidden">
            <button className="IconButton" aria-label="Customise options">
              <HamburgerMenuIcon width={35} height={35} />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="DropdownMenuContent z-[1000] -mt-2 flex h-screen w-screen flex-col items-center gap-4 bg-black p-4 font-medium text-white md:hidden"
              sideOffset={5}
            >
              {internalLinks.map((link) => (
                <DropdownMenu.Item className="DropdownMenuItem" key={link.name}>
                  <Link
                    target={link.name === "Pricing" ? "" : "_blank"}
                    href={link.link}
                    key={link.name}
                    className="font-medium mix-blend-exclusion"
                  >
                    {link.name}
                  </Link>
                </DropdownMenu.Item>
              ))}

              <DropdownMenu.Separator className="DropdownMenuSeparator" />

              <DropdownMenu.Item className="DropdownMenuItem">
                <Link
                  href="https://github.com/One-Click-Auth/Landing-Next-TrustAuthx"
                  target="_blank"
                  className="flex gap-3"
                >
                  <GithubLogo />
                  GitHub
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropdownMenuItem">
                <Link href="https://docs.trustauthx.com/" target="_blank">
                  Docs
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropdownMenuItem">
                <Link href="https://app.trustauthx.com/" target="_blank">
                  Sign In
                </Link>
              </DropdownMenu.Item>
              <div className="flex items-center justify-center gap-1 rounded-full border border-neutral-800 bg-white px-5 py-2.5">
                <div className="text-center font-semibold leading-normal text-white mix-blend-exclusion">
                  <Link href="https://app.trustauthx.com" target="_blank">
                    Let’s Get Started
                  </Link>
                </div>
                <div className="flex h-5 w-5 items-center justify-start gap-2 py-1.5 pr-2" />
                <VectorRight />
              </div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </>
  );
}

export default Navbar;
