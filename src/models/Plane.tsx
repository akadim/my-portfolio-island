import { FC, useEffect, useRef } from "react";

import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { Mesh } from "three";

interface PlaneProps {
  isRotating: boolean;
  position: [number, number, number];
  scale: [number, number, number];
  rotation: [number, number, number];
}

const Plane: FC<PlaneProps> = ({ isRotating, ...props }) => {
  const planeRef = useRef<Mesh>(null);
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, planeRef);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"]?.play();
    } else {
      actions["Take 001"]?.stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={planeRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
