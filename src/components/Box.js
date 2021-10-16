import React from "react";
import { useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "react-three-fiber";
import { useBox } from "use-cannon";

const Box = (props) => {
  const [ref, api] = useBox(() => ({ mass: 1, ...props }));
  // const ref = useRef();
  const texture = useLoader(
    THREE.TextureLoader,
    process.env.PUBLIC_URL + "/forest.jpg"
  );
  // useFrame((state) => {
  //   // console.log(state);
  //   ref.current.rotation.x += 0.01;
  //   ref.current.rotation.y += 0.01;
  // });

  function handlePointerDown(event) {
    // console.log(event);
    event.object.active = true;
    if (window.activeMesh) {
      scaleDown(window.activeMesh);
      window.activeMesh.active = false;
    }
    window.activeMesh = event.object;
  }

  function handlePointerEnter(event) {
    event.object.scale.x = 1.5;
    event.object.scale.y = 1.5;
    event.object.scale.z = 1.5;
  }

  function handlePointerLeave(event) {
    if (!event.object.active) {
      scaleDown(event.object);
    }
  }

  function scaleDown(object) {
    object.scale.x = 1;
    object.scale.y = 1;
    object.scale.z = 1;
  }

  return (
    <mesh
      api={api}
      ref={ref}
      {...props}
      castShadow
      // receiveShadow
      onPointerDown={handlePointerDown}
      onPointerOver={handlePointerEnter}
      onPointerOut={handlePointerLeave}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial
        map={texture}
        // opacity={0.7}
        // transparent
        // color="lightgray"
        // visible={false}
        // wireframe
        // metalness={1}
        // roughness={0}
        // clearcoat={1}
        // transmission={0.3}
        // reflectivity={1}
        // side={THREE.DoubleSide}
      ></meshPhysicalMaterial>
    </mesh>
  );
};

export default Box;
