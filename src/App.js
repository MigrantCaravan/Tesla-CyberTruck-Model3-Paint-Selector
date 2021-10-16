import "./App.css";
import { Canvas } from "react-three-fiber";
import { Suspense } from "react";
import { Physics } from "use-cannon";

import Orbit from "./components/Orbit";
import Background from "./components/Background";
import Floor from "./components/Floor";
import ColorPicker from "./components/ColorPicker";
import Cars from "./components/Cars";
import CameraControls from "./components/CameraControls";
import CameraButtons from "./components/CameraButtons";
import Lights from "./components/Lights";
import Effects from "./components/Effects";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ColorPicker></ColorPicker>
      <CameraButtons></CameraButtons>
      <Canvas
        shadowMap
        style={{ background: "black" }}
        camera={{ position: [7, 7, 7] }}
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: false,
        }}
      >
        <Suspense fallback={null}>
          <Background></Background>
        </Suspense>
        <CameraControls></CameraControls>
        <Lights></Lights>
        <Orbit></Orbit>
        <axesHelper args={[5]}></axesHelper>
        <Physics>
          <Cars></Cars>
          <Floor position={[0, -0.5, 0]}></Floor>
        </Physics>
        <Effects></Effects>
      </Canvas>
    </div>
  );
}

export default App;

////set up for single component app
// import "./App.css";
// import * as THREE from "three";
// import {
//   Canvas,
//   useFrame,
//   useThree,
//   extend,
//   useLoader,
// } from "react-three-fiber";
// import { useRef, Suspense } from "react";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// extend({ OrbitControls });

// function Orbit() {
//   const { camera, gl } = useThree();
//   return <orbitControls args={[camera, gl.domElement]}></orbitControls>;
// }

// const Box = (props) => {
//   const ref = useRef();
//   const texture = useLoader(THREE.TextureLoader, "/forest.jpg");
//   useFrame((state) => {
//     // console.log(state);
//     ref.current.rotation.x += 0.01;
//     ref.current.rotation.y += 0.01;
//   });

//   function handlePointerDown(event) {
//     // console.log(event);
//     event.object.active = true;
//     if (window.activeMesh) {
//       scaleDown(window.activeMesh);
//       window.activeMesh.active = false;
//     }
//     window.activeMesh = event.object;
//   }

//   function handlePointerEnter(event) {
//     event.object.scale.x = 1.5;
//     event.object.scale.y = 1.5;
//     event.object.scale.z = 1.5;
//   }

//   function handlePointerLeave(event) {
//     if (!event.object.active) {
//       scaleDown(event.object);
//     }
//   }

//   function scaleDown(object) {
//     object.scale.x = 1;
//     object.scale.y = 1;
//     object.scale.z = 1;
//   }

//   return (
//     <mesh
//       ref={ref}
//       {...props}
//       castShadow
//       // receiveShadow
//       onPointerDown={handlePointerDown}
//       onPointerOver={handlePointerEnter}
//       onPointerOut={handlePointerLeave}
//     >
//       <boxBufferGeometry args={[1, 1, 1]} />
//       <meshPhysicalMaterial
//         map={texture}
//         // opacity={0.7}
//         // transparent
//         // color="lightgray"
//         // visible={false}
//         // wireframe
//         // metalness={1}
//         // roughness={0}
//         // clearcoat={1}
//         // transmission={0.3}
//         // reflectivity={1}
//         // side={THREE.DoubleSide}
//       ></meshPhysicalMaterial>
//     </mesh>
//   );
// };

// function Background(props) {
//   const texture = useLoader(THREE.TextureLoader, "/comfy.jpeg");

//   const { gl } = useThree();

//   const formatted = new THREE.WebGLCubeRenderTarget(
//     texture.image.height
//   ).fromEquirectangularTexture(gl, texture);
//   return <primitive attach="background" object={formatted}></primitive>;
// }

// function Floor(props) {
//   return (
//     <mesh {...props} receiveShadow>
//       <boxBufferGeometry args={[20, 1, 10]}></boxBufferGeometry>
//       <meshPhongMaterial></meshPhongMaterial>
//     </mesh>
//   );
// }

// function Bulb(props) {
//   return (
//     <mesh {...props}>
//       <pointLight castShadow></pointLight>
//       <sphereBufferGeometry args={[0.2, 20, 20]}></sphereBufferGeometry>
//       <meshPhongMaterial emissive="yellow"></meshPhongMaterial>
//     </mesh>
//   );
// }

// function App() {
//   /////// this is the code for a rotating cube using only three.js (or vanilla three)
//   // const scene = new THREE.Scene();
//   // const camera = new THREE.PerspectiveCamera(
//   //   75,
//   //   window.innerWidth / window.innerHeight,
//   //   0.1,
//   //   1000
//   // );
//   // const renderer = new THREE.WebGLRenderer();
//   // renderer.setSize(window.innerWidth, window.innerHeight);
//   // document.body.innerHTML = "";
//   // document.body.appendChild(renderer.domElement);

//   // const geometry = new THREE.BoxGeometry();
//   // const material = new THREE.MeshBasicMaterial({
//   //   color: "blue",
//   // });

//   // camera.position.z = 5;

//   // const cube = new THREE.Mesh(geometry, material);
//   // scene.add(cube);

//   // function animate() {
//   //   requestAnimationFrame(animate);
//   //   cube.rotation.x += 0.01;
//   //   cube.rotation.y += 0.01;
//   //   renderer.render(scene, camera);
//   // }

//   // animate();
//   // window.addEventListener("resize", () => {
//   //   renderer.setSize(window.innerWidth, window.innerHeight);
//   //   camera.aspect = window.innerWidth / window.innerHeight;
//   //   camera.updateProjectionMatrix();
//   // });

//   function handleClick(event) {
//     if (!window.activeMesh) return;
//     window.activeMesh.material.color = new THREE.Color(
//       event.target.style.background
//     );
//   }
//   return (
//     <div style={{ height: "100vh", width: "100vw" }}>
//       <div style={{ position: "absolute", zIndex: 1 }}>
//         <div
//           onClick={handleClick}
//           style={{ background: "blue", height: 50, width: 50 }}
//         ></div>
//         <div
//           onClick={handleClick}
//           style={{ background: "red", height: 50, width: 50 }}
//         ></div>
//         <div
//           onClick={handleClick}
//           style={{ background: "white", height: 50, width: 50 }}
//         ></div>
//       </div>
//       <Canvas
//         shadowMap
//         style={{ background: "black" }}
//         camera={{ position: [7, 7, 7] }}
//       >
//         <ambientLight intensity={0.2}></ambientLight>
//         {/* <fog attach="fog" args={["white", 1, 15]} /> */}
//         <Bulb position={[0, 3, 0]}></Bulb>
//         <Orbit></Orbit>
//         <axesHelper args={[5]}></axesHelper>
//         <Suspense fallback={null}>
//           <Box position={[-4, 1, 0]}></Box>
//         </Suspense>
//         <Suspense fallback={null}>
//           <Box position={[4, 1, 0]}></Box>
//         </Suspense>
//         <Suspense fallback={null}>
//           <Background></Background>
//         </Suspense>
//         {/* this is if we want to create a custom geometry */}
//         {/* <mesh>
//           <meshBasicMaterial side={THREE.DoubleSide}></meshBasicMaterial>
//           <geometry>
//             <face3 args={[0, 1, 2]} attachArray="faces"></face3>
//             <vector3 attachArray="vertices"></vector3>
//             <vector3 args={[0, 1, -1]} attachArray="vertices"></vector3>
//             <vector3 args={[0, 1, 1]} attachArray="vertices"></vector3>
//           </geometry>
//         </mesh> */}
//         <Floor position={[0, -0.5, 0]}></Floor>
//       </Canvas>
//     </div>
//   );
// }

// export default App;
