import THREE from "../three/index.js";

const { Color, Scene } = THREE

function createScene(){
    const scene = new Scene();
    scene.background = new Color('aquamarine')

    return scene;
}

export { createScene };