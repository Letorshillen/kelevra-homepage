import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import img1 from "../../static/card1.jpg";
import backImg from "../../static/back.jpg";
import { OrbitControls, useTexture } from "@react-three/drei";

const Card = () => {
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    mesh.current.position.y = Math.sin(a) * 0.2;
  });

  const mesh = useRef();
  const backside = useTexture(backImg);
  const frontside1 = useTexture(img1);

  return (
    <mesh ref={mesh} scale={0.6} position={[0, 0, 0]}>
      <boxGeometry attach="geometry" args={[4, 6, 0.02]} />
      <meshPhongMaterial
        shininess={80}
        attachArray="material"
        color="#080e29"
      />
      <meshPhongMaterial
        shininess={80}
        attachArray="material"
        color="#080e29"
      />
      <meshPhongMaterial
        shininess={80}
        attachArray="material"
        color="#080e29"
      />
      <meshPhongMaterial
        shininess={80}
        attachArray="material"
        color="#080e29"
      />
      <meshPhongMaterial shininess={80} attachArray="material" map={backside} />
      <meshBasicMaterial
        shininess={80}
        attachArray="material"
        map={frontside1}
      />
    </mesh>
  );
};

const Scene = () => {
  return (
    <Canvas linear={true}>
      <ambientLight intensity={0.8} />
      <directionalLight intensity={0.5} position={[2, 1, 3]} color="white" />
      <Suspense fallback={null}>
        <Card />
      </Suspense>
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
};

export default Scene;
