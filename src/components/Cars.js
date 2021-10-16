import React from "react";
import { Suspense } from "react";
import BoundingBox from "./BoundingBox";
import Dragable from "./Dragable";
import Model from "./Model";

export default function Cars() {
  return (
    <Suspense fallback={null}>
      <Dragable transformGroup>
        <BoundingBox
          // visible
          dims={[3, 2, 6]}
          offset={[0, -0.37, 0.8]}
          position={[5, 4, 0]}
        >
          <Model
            scale={new Array(3).fill(0.01)}
            // position={[5, 0.6, 0]}
            path="/tesla_model_3/scene.gltf"
          ></Model>
        </BoundingBox>
      </Dragable>
      <Dragable transformGroup>
        <BoundingBox
          // visible
          dims={[11, 2, 4]}
          offset={[0, 0.6, 0.2]}
          position={[-7, 4, 0]}
        >
          <Model
            scale={new Array(3).fill(18)}
            // position={[-4, 1.6, 0]}

            path="/tesla_cybertruck/scene.gltf"
          ></Model>
        </BoundingBox>
        {/* <Suspense fallback={null}>
          <Box position={[-4, 1, 0]}></Box>
          </Suspense>
          <Suspense fallback={null}>
          <Box position={[4, 1, 0]}></Box>
        </Suspense> */}
      </Dragable>
      {/* <group rotation={[0, Math.PI, 0]}>
        <Model
          path="/mech_drone/scene.gltf"
          scale={new Array(3).fill(0.01)}
          position={[-4, 1, 10]}
        ></Model>
      </group> */}
    </Suspense>
  );
}
