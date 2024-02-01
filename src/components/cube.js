import THREE from '../three/index.js';
const { BoxGeometry, Mesh, MeshBasicMaterial } = THREE;

function createCube() {
  // create a geometry
  const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
  const material = new MeshBasicMaterial({color: 0x00ff00});

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  return cube;
}

export { createCube };