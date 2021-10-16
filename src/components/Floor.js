import React from "react";
import { useBox } from "use-cannon";

export default function Floor(props) {
  const [ref, api] = useBox(() => ({ args: [20, 1, 10], ...props }));
  return (
    <mesh ref={ref} {...props} receiveShadow>
      <boxBufferGeometry args={[200, 1, 200]}></boxBufferGeometry>
      <meshPhongMaterial transparent opacity={0.5}></meshPhongMaterial>
    </mesh>
  );
}
