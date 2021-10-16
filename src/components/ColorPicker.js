import * as THREE from "three";
import state from "./state";

export default function ColorPicker(props) {
  function handleClick(event) {
    if (!state.activeMesh) return;
    state.activeMesh.material.color = new THREE.Color(
      event.target.style.background
    );
  }
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1,
        left: 0,
        right: 0,
        margin: "auto",
        width: "fit-content",
        display: "flex",
        top: "20px",
        cursor: "pointer",
      }}
    >
      <div
        onClick={handleClick}
        style={{ background: "#2C394B", height: 50, width: 50 }}
      ></div>
      <div
        onClick={handleClick}
        style={{ background: "#FF4C29", height: 50, width: 50 }}
      ></div>
      <div
        onClick={handleClick}
        style={{ background: "white", height: 50, width: 50 }}
      ></div>
    </div>
  );
}
