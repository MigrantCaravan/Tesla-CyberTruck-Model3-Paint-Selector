import React from "react";
import Bulb from "./Bulb";

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.2}></ambientLight>
      <directionalLight
        position={[6, 3, 2]}
        intensity={2}
        castShadow
        shadow-mapSize-height={2 ** 10}
        shadow-mapSize-width={2 ** 10}
        shadow-radius={10}
      ></directionalLight>
      <Bulb position={[-6, 6, 0]}></Bulb>
      <Bulb position={[2, 5, 0]}></Bulb>
      <Bulb position={[6, 5, 0]}></Bulb>
    </>
  );
}
