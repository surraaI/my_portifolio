"use client";

/** Shared lighting rig so the hero and workspace scenes read as one visual system. */
export default function SceneLighting() {
  return (
    <>
      <ambientLight intensity={1.2} />
      <hemisphereLight args={["#EAECF0", "#233D4D", 0.6]} />
      <pointLight position={[4, 3, 4]} intensity={3.5} color="#FE7F2D" />
      <pointLight position={[-4, -2, -2]} intensity={3} color="#233D4D" />
    </>
  );
}
