/* eslint-disable */
// @ts-nocheck


import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";

export function Prism({ onRayOver, onRayOut, onRayMove, ...props }) {
  const { nodes } = useLoader(
    GLTFLoader,
    "https://openauthx.s3.ap-south-1.amazonaws.com/xxpI-prism.glb",
  );

  // Only create meshes if nodes.Cone.geometry exists
  if (nodes.Cone.geometry) {
    return (
      <group {...props}>
        {/* A low-res, invisible representation of the prism that gets hit by the raycaster */}
        <mesh
          visible={false}
          scale={5.9}
          rotation={[Math.PI / 2, Math.PI, 0]}
          onRayOver={onRayOver}
          onRayOut={onRayOut}
          onRayMove={onRayMove}
        >
          <cylinderGeometry args={[1, 1, 1, 3, 1]} />
        </mesh>
        {/* The visible hi-res prism */}
        <mesh
          position={[0, 0, 0.6]}
          renderOrder={1}
          scale={6}
          dispose={null}
          geometry={nodes.Cone.geometry}
        >
          <meshPhysicalMaterial
            clearcoat={1.5}
            clearcoatRoughness={0}
            transmission={1}
            thickness={1}
            roughness={0}
            toneMapped={true}
            smoothstep={10}
          />
        </mesh>
      </group>
    );
  }

  // Return null if nodes.Cone.geometry does not exist
  return null;
}
