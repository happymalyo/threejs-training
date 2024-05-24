import { World } from "./src/World/World.js";

function main() {
    const container = document.querySelector("#app");
    const world = new World(container);
    world.render();
}

main(); 