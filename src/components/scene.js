import THREE from "../three/index.js";

const { Color, Scene } = THREE

function createScene(){
    const scene = new Scene();
    scene.background = new Color('red')

    return scene;
}

export { createScene };