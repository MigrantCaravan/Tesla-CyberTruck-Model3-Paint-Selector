import React from "react";
import { useBox } from "use-cannon";

export default function BoundingBox({
  position = [0, 0, 0],
  offset = [0, 0, 0],
  dims = [1, 1, 1],
  visible = false,
  children,
}) {
  const [ref, api] = useBox(() => ({
    mass: 1,
    args: dims,
    position: position,
  }));
  return (
    <group ref={ref} api={api}>
      <mesh scale={dims} visible={visible}>
        <boxBufferGeometry />
        <meshPhysicalMaterial wireframe></meshPhysicalMaterial>
      </mesh>
      <group position={offset}>{children}</group>
    </group>
  );
}
