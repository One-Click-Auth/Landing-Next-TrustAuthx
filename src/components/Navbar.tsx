import React from "react";
import { TrustAuthXLogo } from "../../public/svgs/TrustAuthXLogo";
import { Vector } from "../../public/svgs/Vector";
import { GithubLogo } from "../../public/svgs/Github";
import { VectorRight } from "../../public/svgs/VectorRight";

function Navbar() {
  return (
    <div
      className="fixed z-[1000] flex w-full justify-between text-white"
      style={{
        border: "0.5px solid #696C70",
        background: "rgba(0, 0, 0, 0.41)",
        padding: "1rem 3.53363rem",
        mixBlendMode: "luminosity",
        backdropFilter: "blur(75px)",
      }}
    >
      {/*Internal Links*/}
      <div className="flex items-center gap-7">
        <div className="h-11 w-11">
          <TrustAuthXLogo />
        </div>
        <div className="flex items-start justify-center gap-7">
          <div className="text-center font-medium">Products</div>
          <div className="font-medium">Customers</div>
          <div className="font-medium">Enterprise</div>
          <div className="font-medium">Pricing</div>
          <div className="font-medium">Resources</div>
          <div className="font-medium leading-normal mix-blend-exclusion">
            Contact us
          </div>
        </div>
      </div>

      {/*External Links*/}
      <div className="flex items-center justify-center gap-11">
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
      </div>
    </div>
  );
}

export default Navbar;
