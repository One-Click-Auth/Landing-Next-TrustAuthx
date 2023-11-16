import MobileAppDemo from "../../public/images/MobileAppDemo.webp";
import AppDemo from "../../public/page3.png";
import Image from "next/image";
import React from "react";

export function GradientPlatformImage() {
  return (
    <div
      style={{
        borderRadius: "0.90906rem",
        background: "linear-gradient(180deg, #EBEBEB 0%, #E1E1E1 100%)",
        boxShadow:
          "0px 1.18388px 37.88403px -7.27255px #000, 0px 24.24183px 37.88403px -6.06046px rgba(0, 0, 0, 0.10)",
      }}
    >
      <Image
        src={MobileAppDemo}
        alt="App Demo"
        className="p-2 md:hidden md:p-4"
      />
      <Image
        src={AppDemo}
        alt="App Demo"
        className="hidden p-2 md:block md:p-4"
      />
    </div>
  );
}
