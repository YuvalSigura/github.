// marker-model.js
function createMarkerModel() {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a cone geometry
    const geometry = new THREE.ConeGeometry(1, 2, 32);

    // Create a material for the cone
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

    // Create a mesh with the geometry and material
    const marker = new THREE.Mesh(geometry, material);

    // Add the marker to the scene
    scene.add(marker);

    // Set up the renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Set up the camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Render the scene
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
}
createMarkerModel();
