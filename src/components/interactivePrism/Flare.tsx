/* eslint-disable */
// @ts-nocheck

import * as THREE from "three";
import { forwardRef, useRef } from "react";
import { useTexture, Instances, Instance } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Flare = forwardRef(
  ({ streak = [8, 20, 1], visible, ...props }, fRef) => {
    const ref = useRef(null);
    const [streakTexture, dotTexture, glowTexture] = useTexture([
      "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/1LRW0uiGloWqJcY0WOxREA/61737e55cab34a414d746acb9d0a9400/download.png",
      "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/3LuHxfpwb7US0F8ztqsUu3/7d72f24995cc5193fc20f6c14cad7d36/download.png",
      "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/2NKOrPD3iq75po1v0AA6h2/fc0d49ba0917bcbfd3d8a63688045a0c/download.jpeg",
    ]);
    const config = {
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    };

    useFrame((state) => {
      if (visible) {
      ref.current.children.forEach((instance) => {
        instance.position.x =
          (Math[instance.scale.x > 1 ? "sin" : "cos"](
            (state.clock.elapsedTime * instance.scale.x) / 2,
          ) *
            instance.scale.x) /
          8;
        instance.position.y =
          (Math[instance.scale.x > 1 ? "cos" : "atan"](
            state.clock.elapsedTime * instance.scale.x,
          ) *
            instance.scale.x) /
          5;
      })};
    });

    return (
      <group ref={fRef} {...props} visible={visible} dispose={null}>
        <Instances frames={visible ? Infinity : 1}>
          <planeGeometry />
          <meshBasicMaterial map={dotTexture} {...config} />
          <group ref={ref}>
            <Instance scale={0.5} />
            <Instance scale={1.25} />
            <Instance scale={0.75} />
            <Instance scale={1.5} />
            <Instance scale={2} position={[0, 0, -0.7]} />
          </group>
        </Instances>
        <mesh scale={1}>
          <planeGeometry />
          <meshBasicMaterial map={glowTexture} {...config} opacity={1} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]} scale={streak}>
          <planeGeometry />
          <meshBasicMaterial map={streakTexture} {...config} opacity={1} />
        </mesh>
      </group>
    );
  },
);
