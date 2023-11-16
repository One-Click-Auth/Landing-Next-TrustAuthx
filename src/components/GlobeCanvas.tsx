"use client";

import React, { PropsWithChildren, useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";

export function GlobeCanvas({ children }: PropsWithChildren) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    let phi = 0;
    let width = 0;

    const size = Math.min(window.innerHeight, window.innerWidth, 800);
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);

    window.addEventListener("resize", onResize);
    onResize();

    if (inView && canvasRef.current) {
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width,
        scale: 0.85,
        phi: 0,
        theta: 0.2,
        dark: 1.1,
        offset: [2100.66, 2400.0],
        diffuse: 3,
        mapSamples: 16000,
        mapBrightness: 1.8,
        mapBaseBrightness: 0.05,
        baseColor: [1.1, 1.1, 1.1],
        markerColor: [251 / 255, 100 / 255, 21 / 255],
        glowColor: [1.1, 1.1, 1.1],
        markers: [],
        opacity: 0.7,
        onRender: (state) => {
          // Called on every animation frame.
          // `state` will be an empty object, return updated params.
          state.phi = phi + r.get();
          phi += 0.005;
          state.width = width * 2;
          state.height = width * 2;
        },
      });

      setTimeout(() => {
        if (canvasRef.current) {
          canvasRef.current.style.opacity = "1";
        }
      });

      return () => globe.destroy();
    }
  }, [inView]);

  return (
    <div
      className="mb-[36rem] bg-white text-white md:mb-80"
      style={{
        width: "100%",
        aspectRatio: 1,
      }}
      ref={ref}
    >
      {children}
      <div
        className="absolute bg-black text-white md:top-[-43rem] "
        style={{
          width: "100%",
          aspectRatio: 1,
        }}
      >
        <canvas
          ref={canvasRef}
          className=""
          style={{
            width: "100%",
            height: "100%",
            // cursor: "grab",
            contain: "layout paint size",
            opacity: 0,
            transition: "opacity 1s ease",
          }}
        />
      </div>
    </div>
  );
}
