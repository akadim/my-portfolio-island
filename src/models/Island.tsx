import { useRef, useEffect, FC, Dispatch, SetStateAction } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animated } from "@react-spring/three";
import { Group, Material, Mesh } from "three";
import { GLTF } from "three-stdlib";
import islandScene from "../assets/3d/island.glb";

type GLTFResult = GLTF & {
  nodes: {
    polySurface944_tree_body_0: Mesh;
    polySurface945_tree1_0: Mesh;
    polySurface946_tree2_0: Mesh;
    polySurface947_tree1_0: Mesh;
    polySurface948_tree_body_0: Mesh;
    polySurface949_tree_body_0: Mesh;
    pCube11_rocks1_0: Mesh;
  };
  materials: {
    PaletteMaterial001: Material;
  };
};

type IslandProps = {
  position: [number, number, number];
  scale: [number, number, number];
  rotation: [number, number, number];
  isRotating: boolean;
  setIsRotating: Dispatch<SetStateAction<boolean>>;
};

const Island: FC<IslandProps> = ({ position, scale, rotation }) => {
  const islandRef = useRef<Group>(null);
  const { nodes, materials } = useGLTF(islandScene) as GLTFResult;

  return (
    <animated.group
      ref={islandRef}
      position={position}
      scale={scale}
      rotation={rotation}
    >
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </animated.group>
  );
};

export default Island;
