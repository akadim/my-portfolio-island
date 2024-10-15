import { useGLTF } from "@react-three/drei";
import { FC } from "react";

import skyScene from "../assets/3d/sky.glb";

const Sky: FC = () => {
  const sky = useGLTF(skyScene);
  return (
    <mesh>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
