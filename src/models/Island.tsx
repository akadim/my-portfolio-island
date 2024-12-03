import {
  useRef,
  useEffect,
  FC,
  Dispatch,
  SetStateAction,
  useCallback,
} from "react";
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
  setCurrentStage: Dispatch<SetStateAction<number>>;
};

const Island: FC<IslandProps> = ({
  isRotating,
  setIsRotating,
  setCurrentStage,
  ...props
}) => {
  const islandRef = useRef<Group>(null);
  const { nodes, materials } = useGLTF(islandScene) as GLTFResult;

  const { gl, viewport } = useThree();
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = useCallback(
    (event: Event) => {
      event.stopPropagation();
      event.preventDefault();
      setIsRotating(true);

      const clientX = event.type.startsWith("touch")
        ? (event as TouchEvent).touches[0].clientX
        : (event as MouseEvent).clientX;

      lastX.current = clientX;
    },
    [setIsRotating]
  );

  const handlePointerUp = useCallback(
    (event: Event) => {
      event.stopPropagation();
      event.preventDefault();
      setIsRotating(false);
    },
    [setIsRotating]
  );

  const handleTouchStart = useCallback(
    (event: Event) => {
      event.stopPropagation();
      event.preventDefault();
      setIsRotating(true);

      const clientX = event.type.startsWith("touch")
        ? (event as TouchEvent).touches[0].clientX
        : (event as MouseEvent).clientX;

      lastX.current = clientX;
    },
    [setIsRotating]
  );

  const handleTouchEnd = useCallback(
    (event: Event) => {
      event.stopPropagation();
      event.preventDefault();
      setIsRotating(false);
    },
    [setIsRotating]
  );

  const handleTouchMove = useCallback(
    (event: Event) => {
      event.stopPropagation();
      event.preventDefault();

      if (isRotating) {
        const clientX = event.type.startsWith("touch")
          ? (event as TouchEvent).touches[0].clientX
          : (event as MouseEvent).clientX;

        const delta = (clientX - lastX.current) / viewport.width;

        islandRef.current!.rotation.y += delta * 0.01 * Math.PI;
        lastX.current = clientX;
        rotationSpeed.current = delta * 0.01 * Math.PI;
      }
    },
    [isRotating, viewport.width]
  );

  const handlePointerMove = useCallback(
    (event: Event) => {
      event.stopPropagation();
      event.preventDefault();

      if (isRotating) {
        const clientX = event.type.startsWith("touch")
          ? (event as TouchEvent).touches[0].clientX
          : (event as MouseEvent).clientX;

        const delta = (clientX - lastX.current) / viewport.width;

        islandRef.current!.rotation.y += delta * 0.01 * Math.PI;
        lastX.current = clientX;
        rotationSpeed.current = delta * 0.01 * Math.PI;
      }
    },
    [viewport.width, isRotating]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        if (!isRotating) setIsRotating(true);
        islandRef.current!.rotation.y += 0.01 * Math.PI;
      } else if (event.key === "ArrowRight") {
        if (!isRotating) setIsRotating(true);
        islandRef.current!.rotation.y -= 0.01 * Math.PI;
      }
    },
    [isRotating, setIsRotating]
  );

  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        setIsRotating(false);
      }
    },
    [setIsRotating]
  );

  useFrame(() => {
    // If not rotating, apply damping to slow down the rotation (smoothly)
    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor;

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      islandRef.current!.rotation.y += rotationSpeed.current;
    } else {
      // When rotating, determine the current stage based on island's orientation
      const rotation = islandRef.current!.rotation.y;
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(0);
      }
    }
  });

  useEffect(() => {
    const canvas = gl.domElement as HTMLCanvasElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchmove", handleTouchMove);
    canvas.addEventListener("touchend", handleTouchEnd);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
    };
  }, [
    gl,
    handlePointerDown,
    handlePointerUp,
    handlePointerMove,
    handleKeyDown,
    handleKeyUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  ]);

  return (
    <animated.group ref={islandRef} {...props}>
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
