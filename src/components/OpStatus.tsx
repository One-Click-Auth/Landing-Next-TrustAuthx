"use client";
import React, { useEffect, useState } from "react";

export function OpStatus() {
  const [isOn, setIsOn] = useState<boolean>(true);
  useEffect(() => {
    async function ping() {
      const response = await fetch("https://api.trustauthx.com/api/ping", {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });
      const data = await response.json();
      if (data) {
        setIsOn(true);
      }
    }
    ping();
  }, []);

  return (
    <div className="flex cursor-pointer items-center gap-2 rounded-full px-2.5 py-1.5  text-xs font-medium backdrop-blur-[75px] md:text-sm">
      {isOn ? (
        <div
          className=" h-2.5 w-2.5 rounded-full bg-[#008000] "
          style={{
            boxShadow:
              "0 0 10px #008000, 0 0 20px #008000, 0 0 30px #008000, 0 0 40px #008000",
          }}
        ></div>
      ) : (
        <div
          className=" h-2.5 w-2.5 rounded-full bg-[#FF0000]"
          style={{
            boxShadow:
              "0 0 10px #FF0000, 0 0 20px #FF0000, 0 0 30px #FF0000, 0 0 40px #FF0000",
          }}
        ></div>
      )}
      <div>Operation Status</div>
    </div>
  );
}
