import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import glb from "../static/tablet-nomaterials.glb";
import texture from "../static/baked-tablet.jpg";
import img1 from "../static/images.jpg";
import { useGLTF, useTexture } from "@react-three/drei";

const Model = (props) => {
  const group = useRef();
  const bakedTexture = useTexture(texture);
  const img = useTexture(img1);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    group.current.rotation.y = a;
  });

  const { nodes } = useGLTF(glb);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.screen.geometry}>
        <meshBasicMaterial map={img} />
      </mesh>
      <mesh geometry={nodes.tablet.geometry}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
    </group>
  );
};

useGLTF.preload(glb);

const Scene = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={1} />
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
