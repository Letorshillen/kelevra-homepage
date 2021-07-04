import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";
import img1 from "../../static/card1.jpg";
import backImg from "../../static/back.jpg";
import { useTexture } from "@react-three/drei";

const Card1 = () => {
  const [active, setActive] = useState(false);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    mesh.current.position.y = Math.sin(a) * 0.2;
  });

  const { rotation } = useSpring({
    rotation: [0, active ? Math.PI : 0, 0],
    config: config.molasses,
  });

  const mesh = useRef();
  const backside = useTexture(backImg);
  const frontside1 = useTexture(img1);

  return (
    <animated.mesh
      ref={mesh}
      onClick={() => setActive(!active)}
      scale={0.6}
      position={[-4, 0, 0]}
      rotation={rotation}
    >
      <boxGeometry attach="geometry" args={[4, 6, 0.02]} />
      <meshPhongMaterial attachArray="material" color="#080e29" />
      <meshPhongMaterial attachArray="material" color="#080e29" />
      <meshPhongMaterial attachArray="material" color="#080e29" />
      <meshPhongMaterial
        shininess={80}
        attachArray="material"
        color="#080e29"
      />
      <meshPhongMaterial shininess={80} attachArray="material" map={backside} />
      <meshBasicMaterial attachArray="material" map={frontside1} />
    </animated.mesh>
  );
};

const Card2 = () => {
  const [active, setActive] = useState(false);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() + 1;
    mesh.current.position.y = Math.sin(a) * 0.2;
  });

  const { rotation } = useSpring({
    rotation: [0, active ? Math.PI : 0, 0],
    config: config.molasses,
  });

  const mesh = useRef();
  const backside = useTexture(backImg);
  const frontside1 = useTexture(img1);

  return (
    <animated.mesh
      ref={mesh}
      onClick={() => setActive(!active)}
      scale={0.6}
      position={[0, 0, 0]}
      rotation={rotation}
    >
      <boxGeometry attach="geometry" args={[4, 6, 0.02]} />
      <meshPhongMaterial attachArray="material" color="#080e29" />
      <meshPhongMaterial attachArray="material" color="#080e29" />
      <meshPhongMaterial attachArray="material" color="#080e29" />
      <meshPhongMaterial
        shininess={80}
        attachArray="material"
        color="#080e29"
      />
      <meshPhongMaterial shininess={80} attachArray="material" map={backside} />
      <meshBasicMaterial attachArray="material" map={frontside1} />
    </animated.mesh>
  );
};
const Card3 = () => {
  const [active, setActive] = useState(false);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() - 1.5;
    mesh.current.position.y = Math.sin(a) * 0.2;
  });

  const { rotation } = useSpring({
    rotation: [0, active ? Math.PI : 0, 0],
    config: config.molasses,
  });

  const mesh = useRef();
  const backside = useTexture(backImg);
  const frontside1 = useTexture(img1);

  return (
    <animated.mesh
      ref={mesh}
      onClick={() => setActive(!active)}
      scale={0.6}
      position={[4, 0, 0]}
      rotation={rotation}
    >
      <boxGeometry attach="geometry" args={[4, 6, 0.02]} />
      <meshPhongMaterial attachArray="material" color="#080e29" />
      <meshPhongMaterial attachArray="material" color="#080e29" />
      <meshPhongMaterial attachArray="material" color="#080e29" />
      <meshPhongMaterial
        shininess={80}
        attachArray="material"
        color="#080e29"
      />
      <meshPhongMaterial shininess={80} attachArray="material" map={backside} />
      <meshBasicMaterial attachArray="material" map={frontside1} />
    </animated.mesh>
  );
};

const Scene = () => {
  return (
    <Canvas
      linear={true}
      camera={{ fov: 30, near: 0.1, far: 1000, position: [0, 0, 15] }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight intensity={0.5} position={[2, 1, 3]} color="white" />
      <Suspense fallback={null}>
        <Card1 />
        <Card2 />
        <Card3 />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
