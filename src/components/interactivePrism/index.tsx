/* eslint-disable */
// @ts-nocheck

"use client";

import * as THREE from "three";
import { useRef, useCallback, useState } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Beam } from "./Beam/Beam";
import { Rainbow } from "./Rainbow";
import { Prism } from "./Prism";
import { Flare } from "./Flare";

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

export default function InteractivePrism({
  bgColor,
  height,
  width = "100%",
}: {
  bgColor: string;
  height: string;
  width?: string;
}) {
  return (
    <div id="hero-prism" style={{ width, height }}>
      <Canvas
        orthographic
        gl={{ antialias: false }}
        camera={{ position: [0, 0, 20], zoom: 65 }}
      >
        <color attach="background" args={[bgColor]} />
        <Scene />
        <EffectComposer disableNormalPass>
          <Bloom
            mipmapBlur
            levels={9}
            intensity={2}
            luminanceThreshold={1.5}
            luminanceSmoothing={2}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

function Scene() {
  const [isPrismHit, hitPrism] = useState(false);
  const flare = useRef(null);
  const ambient = useRef(null);
  const spot = useRef(null);
  const boxreflect = useRef(null);
  const rainbow = useRef(null);

  const rayOut = useCallback(() => hitPrism(false), []);
  const rayOver = useCallback((e) => {
    // Break raycast so the ray stops when it touches the prism.
    e.stopPropagation();
    hitPrism(true);
    // Set the intensity really high on first contact.
    rainbow.current.material.speed = 2.5;
    rainbow.current.material.emissiveIntensity = 50;
  }, []);

  const vec = new THREE.Vector3();
  const rayMove = useCallback(({ api, position, direction, normal }) => {
    if (!normal) return;
    // Extend the line to the prisms center.
    vec.toArray(api.positions, api.number++ * 3);
    // Set flare.
    flare.current.position.set(position.x, position.y, -1);
    flare.current.rotation.set(0, 0, -Math.atan2(direction.x, direction.y));

    // Calculate refraction angles.
    let angleScreenCenter = Math.atan2(-position.y, -position.x);
    const normalAngle = Math.atan2(normal.y, normal.x);

    // The angle between the ray and the normal.
    const incidentAngle = angleScreenCenter - normalAngle;

    // Calculate the refraction for the incident angle.
    const refractionAngle = calculateRefractionAngle(incidentAngle) * 6;

    // Apply the refraction.
    angleScreenCenter += refractionAngle;
    rainbow.current.rotation.z = angleScreenCenter;

    // Set spot light.
    lerpV3(
      spot.current.target.position,
      [Math.cos(angleScreenCenter), Math.sin(angleScreenCenter), 0],
      0.05,
    );
    spot.current.target.updateMatrixWorld();
  }, []);

  useFrame((state) => {
    // Tie beam to the mouse.
    boxreflect.current.setRay(
      [
        (state.pointer.x * state.viewport.width) / 2,
        (state.pointer.y * state.viewport.height) / 2,
        0,
      ],
      [0, 0, 0],
    );

    // Animate rainbow intensity.
    lerp(
      rainbow.current.material,
      "emissiveIntensity",
      isPrismHit ? 2.5 : 0,
      0.1,
    );
    spot.current.intensity = rainbow.current.material.emissiveIntensity;

    // Animate ambience.
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
          scale={0.6}
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
        scale={1.25}
        streak={[18.5, 20, 1]}
      />
    </>
  );
}
