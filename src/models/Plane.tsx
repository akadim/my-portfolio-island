import { FC } from "react";

import planeScene from "../assets/3d/plane.glb";
import { useGLTF } from "@react-three/drei";

interface PlaneProps {
  isRotating: boolean;
  position: [number, number, number];
  scale: [number, number, number];
  rotation: [number, number, number];
}

const Plane: FC<PlaneProps> = ({ isRotating, ...props }) => {
  const { scene, animation } = useGLTF(planeScene);

  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
