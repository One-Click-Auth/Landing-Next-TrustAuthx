"use client";

import React, { useState } from "react";
import { TrustAuthXLogo } from "../../public/svgs/TrustAuthXLogo";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { GithubLogo } from "../../public/svgs/Github";
import { VectorRight } from "../../public/svgs/VectorRight";

const internalLinks = [
  { name: "Products" },
  { name: "Customers" },
  { name: "Enterprise" },
  { name: "Pricing" },
  { name: "Resources" },
  { name: "Contact us" },
];

const externalLinks = [
  { name: "Github" },
  { name: "Docs" },
  { name: "Sign in" },
  { name: "Let’s Get Started" },
];

const ExternalLinks = () => (
  <>
    <div className="flex items-center justify-start gap-1.5">
      <GithubLogo />
      <div className="font-semibold">Github</div>
    </div>
    <div className="font-semibold">Docs</div>
    <div className="font-semibold">Sign in</div>

    <div className="flex items-center justify-center gap-1 rounded-full border border-neutral-800 bg-white px-5 py-2.5">
      <div className="text-center font-semibold leading-normal text-white mix-blend-exclusion">
        Let’s Get Started
      </div>
      <div className="flex h-5 w-5 items-center justify-start gap-2 py-1.5 pr-2" />
      <VectorRight />
    </div>
  </>
);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed z-[1000] flex w-full justify-between border-b-[0.5px] border-[#696C70] bg-[#00000068] px-6 text-white mix-blend-luminosity backdrop-blur-[75px] md:py-3">
        {/*Internal Links*/}
        <div className="flex items-center gap-7">
          <TrustAuthXLogo />
          <div className="hidden items-start justify-center gap-7 md:flex md:flex-wrap">
            {internalLinks.map((link) => (
              <div key={link.name} className="font-medium mix-blend-exclusion">
                {link.name}
              </div>
            ))}
          </div>
        </div>

        {/*External Links*/}
        <div className="hidden items-center justify-center gap-11 md:flex md:flex-wrap">
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
                  {link.name}
                </DropdownMenu.Item>
              ))}

              <DropdownMenu.Separator className="DropdownMenuSeparator" />

              <DropdownMenu.Item className="DropdownMenuItem flex gap-3">
                <GithubLogo />
                GitHub
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropdownMenuItem">
                Docs
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropdownMenuItem">
                SignIn
              </DropdownMenu.Item>
              <div className="flex items-center justify-center gap-1 rounded-full border border-neutral-800 bg-white px-5 py-2.5">
                <div className="text-center font-semibold leading-normal text-white mix-blend-exclusion">
                  Let’s Get Started
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
