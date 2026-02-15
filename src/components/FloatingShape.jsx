import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';

export default function FloatingShape() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2} floatingRange={[0, 0.5]}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.2, 0.4, 200, 50]} />
        <MeshTransmissionMaterial 
          backside
          backsideThickness={5}
          thickness={2}
          roughness={0}
          transmission={0.9}
          ior={1.2}
          chromaticAberration={0.06} 
          anisotropy={0.5}
          color="#8b5cf6"
        />
      </mesh>
    </Float>
  );
}
