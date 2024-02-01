import { createCube } from '../components/cube.js';
import { createCamera  } from '../components/camera.js';
import { createScene } from '../components/scene.js';
import { createRenderer } from '../systems/renderer.js';
import { Resizer } from '../systems/Resizer.js';


let camera;
let scene;
let renderer;
class World {

    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        container.append(renderer.domElement)

        const cube = createCube();

        scene.add(cube);
        const resizer = new Resizer(container, camera, renderer);
    }

    // render the scene
    render(){
        // Draw a single frame
        renderer.render(scene, camera);
    }
}

export { World };
