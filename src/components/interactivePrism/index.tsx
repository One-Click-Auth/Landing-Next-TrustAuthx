/* eslint-disable */
// @ts-nocheck

"use client";

import * as THREE from "three";
import { useCallback, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { PerformanceMonitor, usePerformanceMonitor } from "@react-three/drei";
import { round } from "lodash"; // Import the round function
import { Beam } from "./Beam/Beam";
import { Rainbow } from "./Rainbow";
import { Prism } from "./Prism";
import { Flare } from "./Flare";
import { useInView } from 'react-intersection-observer';

export function lerp(object, prop, goal, speed = 0.1) {
  object[prop] = THREE.MathUtils.lerp(object[prop], goal, speed);
}

const vector = new THREE.Vector3();

export function lerpV3(value, goal, speed = 0.1) {
  value.lerp(vector.set(...goal), speed);
}

export function calculateRefractionAngle(
  incidentAngle,
  glassIor = 5,
  airIor = 0.300293,
) {
  const theta = Math.asin((airIor * Math.sin(incidentAngle)) / glassIor) || 0;
  return theta;
}

function Effects() {
  const [hasEffects, setHasEffects] = useState(true);

  // usePerformanceMonitor({
  //   onChange: ({ factor }) => {
  //     if (hasEffects && factor > 0.5) {
  //       // Decrease the qualityScale of your effects.
  //       effect.qualityScale = round(0.5 + 0.5 * factor, 1);
  //     }
  //     // Handle other conditions for declining or inclining quality
  //   },
  // });

  return (
    <EffectComposer>{/* Your post-processing effects here */}</EffectComposer>
  );
}

export default function InteractivePrism({
  bgColor,
  height,
  width = "100%",
  isMobile,
}: {
  bgColor: string;
  height: string;
  width?: string;
  isMobile: boolean;
}) {
  const [dpr, setDpr] = useState(2);
  const { ref, inView } = useInView({
    triggerOnce: false, // Change to true if you want to render only once
  });
  return (
    <div id="hero-prism" style={{ width, height }} ref={ref}>
      {inView && (
        <Canvas
          dpr={dpr}
          orthographic
          gl={{ antialias: false }}
          camera={{ position: [0, 0, 20], zoom: 65 }}
        >
          <color attach="background" args={[bgColor]} />
          <PerformanceMonitor
            onDecline={() => setDpr(1)}
            onIncline={() => setDpr(2)}
          >
            <Scene isMobile={isMobile} />
            <Effects />
          </PerformanceMonitor>
        </Canvas>
      )}
    </div>
  );
}

function Scene({ isMobile }: { isMobile: boolean }) {
  const [isPrismHit, hitPrism] = useState(false);
  const flare = useRef(null);
  const ambient = useRef(null);
  const spot = useRef(null);
  const boxreflect = useRef(null);
  const rainbow = useRef(null);

  const rayOut = useCallback(() => hitPrism(false), []);
  const rayOver = useCallback((e) => {
    e.stopPropagation();
    hitPrism(true);
    rainbow.current.material.speed = 2.5;
    rainbow.current.material.emissiveIntensity = 50;
  }, []);

  const vec = new THREE.Vector3();
  const rayMove = useCallback(({ api, position, direction, normal }) => {
    if (!normal) return;

    vec.toArray(api.positions, api.number++ * 3);
    flare.current.position.set(position.x, position.y, -1);
    flare.current.rotation.set(0, 0, -Math.atan2(direction.x, direction.y));

    let angleScreenCenter = Math.atan2(-position.y, -position.x);
    const normalAngle = Math.atan2(normal.y, normal.x);

    const incidentAngle = angleScreenCenter - normalAngle;
    const refractionAngle = calculateRefractionAngle(incidentAngle) * 6;

    angleScreenCenter += refractionAngle;
    rainbow.current.rotation.z = angleScreenCenter;

    lerpV3(
      spot.current.target.position,
      [Math.cos(angleScreenCenter), Math.sin(angleScreenCenter), 0],
      0.05,
    );
    spot.current.target.updateMatrixWorld();
  }, []);

  useFrame((state) => {
    boxreflect.current.setRay(
      [
        (state.pointer.x * state.viewport.width) / 2,
        (state.pointer.y * state.viewport.height) / 2,
        0,
      ],
      [0, 0, 0],
    );

    lerp(
      rainbow.current.material,
      "emissiveIntensity",
      isPrismHit ? 2.5 : 0,
      0.1,
    );
    spot.current.intensity = rainbow.current.material.emissiveIntensity;

    lerp(ambient.current, "intensity", 0, 0.25);
  });

  return (
    <>
      {/* Lights */}
      <ambientLight ref={ambient} intensity={0} />
      <pointLight position={[10, -10, 0]} intensity={0.05} />
      <pointLight position={[0, 10, 0]} intensity={0.05} />
      <pointLight position={[-10, 0, 0]} intensity={0.05} />
      <spotLight
        ref={spot}
        intensity={10}
        distance={7}
        angle={1}
        penumbra={1}
        position={[0, 0, 1]}
      />
      {/* Prism + blocks + reflect beam */}
      <Beam ref={boxreflect} bounce={10} far={20} position={[0, 0, 0]}>
        <Prism
          scale={isMobile ? 0.2 : 0.6}
          onRayOver={rayOver}
          onRayOut={rayOut}
          onRayMove={rayMove}
        />
      </Beam>
      {/* Rainbow and flares */}
      <Rainbow
        ref={rainbow}
        startRadius={0}
        endRadius={0.8}
        fade={0}
        position={[0, 0, 0]}
      />
      <Flare
        position={[0, 0, 0]}
        ref={flare}
        visible={true}
        renderOrder={10}
        scale={0.75}
        streak={[18.5, 20, 1]}
      />
    </>
  );
}
