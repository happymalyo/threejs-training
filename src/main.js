import * as THREE from "../node_modules/three/build/three.module.js";
  
  // Get a reference to the container element that will hold our scene
  const container = document.querySelector('#scene-container');
  
  // create a Scene
  const scene = new THREE.Scene();
  
  // Set the background color
  scene.background = new THREE.Color('skyblue');
  
  // Create a camera
  const fov = 35; // AKA Field of View
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1; // the near clipping plane
  const far = 100; // the far clipping plane
  
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  
  // every object is initially created at ( 0, 0, 0 )
  // move the camera back so we can view the scene
  camera.position.set(0, 0, 10);
  
  // create a geometry
  const geometry = new THREE.BufferGeometry(2,2,2);

    // create a simple square shape. We duplicate the top left and bottom right
    // vertices because each vertex needs to appear once per triangle.
    const vertices = new Float32Array( [
        -1.0, -1.0,  1.0, // v0
        1.0, -1.0,  1.0, // v1
        1.0,  1.0,  1.0, // v2

        1.0,  1.0,  1.0, // v3
        -1.0,  1.0,  1.0, // v4
        -1.0, -1.0,  1.0  // v5
    ] );

    // itemSize = 3 because there are 3 values (components) per vertex
    geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    const material = new THREE.MeshBasicMaterial();
  
  // create a Mesh containing the geometry and material
  const cube = new THREE.Mesh(geometry, material);
  
  // add the mesh to the scene
  scene.add(cube);
  
  // create the renderer
  const renderer = new THREE.WebGLRenderer();
  
  // next, set the renderer to the same size as our container element
  renderer.setSize(container.clientWidth, container.clientHeight);
  
  // finally, set the pixel ratio so that our scene will look good on HiDPI displays
  renderer.setPixelRatio(window.devicePixelRatio);
  
  // add the automatically created <canvas> element to the page
  container.append(renderer.domElement);
  
  // render, or 'create a still image', of the scene
  renderer.render(scene, camera);