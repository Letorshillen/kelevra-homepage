import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

const Card = () => {
  return (
    <mesh onPointerOver={(e) => console.log("over")}>
      <planeGeometry />
      <meshPhongMaterial color="royalblue" />
    </mesh>
  );
};

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} position={[2, 1, 3]} color="white" />
      <Suspense fallback={null}>
        <Card />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
