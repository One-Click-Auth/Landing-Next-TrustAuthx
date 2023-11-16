"use client";

import React, { PropsWithChildren } from "react";
import { useMediaQuery } from "@mantine/hooks";
import AiInCli from "./AiInCli";

export function AiInCLIWrapper({children}:PropsWithChildren) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div
      className="p-4 md:px-32 md:py-14"
      style={{
        background: isMobile
          ? "black"
          : "linear-gradient(65deg, #000 49.2%, #0E0E0E 52.62%, rgba(255, 255, 255, 0.00) 52.66%)",
      }}
    >
      {children}
    </div>
  );
}

export default AiInCli;
