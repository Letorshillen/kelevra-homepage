import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import glb from "../../static/pokeball.glb";
import { useGLTF, useAnimations, useProgress } from "@react-three/drei";

const Model = (props) => {
  useFrame(({ clock }) => {
    // const a = clock.getElapsedTime();
    // group.current.rotation.y = a;
  });

  const group = useRef();
  const { nodes, materials, animations } = useGLTF(glb);
  const { actions } = useAnimations(animations, group);
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[0, Math.PI * 0.9, 0]}
      onClick={() => actions.topAction.play().setLoop(0, 1).reset()}
      position={[0, -1.3, 0]}
      scale={0.8}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.middle.geometry}
        material={materials["ball-middle"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_1.geometry}
        material={nodes.Cylinder_1.material}
      />
      <mesh
        name="top"
        castShadow
        receiveShadow
        geometry={nodes.top.geometry}
        material={materials["Ball-Top"]}
        position={[0, 0.1, 1.21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottom.geometry}
        material={materials["Ball-Bottom"]}
      />
    </group>
  );
};

useGLTF.preload(glb);

const Loader = () => {
  const { progress } = useProgress();
  return <html center>{progress} % loaded</html>;
};

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} position={[2, 1, 3]} color="white" />
      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
