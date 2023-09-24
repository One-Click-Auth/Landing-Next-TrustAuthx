import React from "react";
import { TrustAuthXLogo } from "../../public/svgs/TrustAuthXLogo";
import { Vector } from "../../public/svgs/Vector";
import { GithubLogo } from "../../public/svgs/Github";
import { VectorRight } from "../../public/svgs/VectorRight";

function Navbar() {
  return (
    <div
      className="fixed z-[100] flex w-full justify-between text-white"
      style={{
        border: "0.5px solid #696C70",
        padding: "1rem 3.53363rem",
        mixBlendMode: "luminosity",
        backdropFilter: "blur(75px)",
      }}
    >
      <div className="flex items-center justify-start gap-7">
        <div className="h-11 w-11">
          <TrustAuthXLogo />
        </div>
        <div className="flex h-6 items-start justify-center gap-7">
          <div className="inline-flex items-center justify-center gap-1 self-stretch">
            <div className="text-center text-base font-medium leading-normal mix-blend-exclusion">
              Products
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
  );
}

export default Navbar;
