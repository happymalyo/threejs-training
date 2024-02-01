import THREE from "../three/index.js";


function createRenderer(){

    const renderer = new THREE.WebGLRenderer();

    return renderer
}


export { createRenderer }