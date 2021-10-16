import React from "react";
import { useMemo } from "react";
import { useThree, useLoader } from "react-three-fiber";
import * as THREE from "three";

export default function Background(props) {
  const texture = useLoader(
    THREE.TextureLoader,

    process.env.PUBLIC_URL + "/autoshop.jpeg"
  );

  const { gl } = useThree();
  const formatted = useMemo(
    () =>
      new THREE.WebGLCubeRenderTarget(
        texture.image.height
      ).fromEquirectangularTexture(gl, texture),
    []
  );
  return <primitive attach="background" object={formatted}></primitive>;
}
