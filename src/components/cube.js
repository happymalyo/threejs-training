import THREE from "../three/index.js";
const { BoxGeometry, Mesh, MeshStandardMaterial } = THREE;

function createCube() {
  // create a geometry
  const geometry = new BoxGeometry(2, 2, 2);
  const material = new MeshStandardMaterial({ color: "purple" });

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);
  // cube.position.set(2,0,0)
  cube.rotation.set(-0.5, -0.1, 0.8);

  return cube;
}

export { createCube };
