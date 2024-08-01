// main.js

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('map-container').appendChild(renderer.domElement);

// Controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Light
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

// Load map texture
const textureLoader = new THREE.TextureLoader();
const mapTexture = textureLoader.load('assets/map-texture.jpg', () => {
    const mapGeometry = new THREE.PlaneGeometry(10, 10);
    const mapMaterial = new THREE.MeshBasicMaterial({ map: mapTexture });
    const mapMesh = new THREE.Mesh(mapGeometry, mapMaterial);
    scene.add(mapMesh);
});

// Load marker model
const loader = new THREE.GLTFLoader();
loader.load('assets/marker-model.glb', (gltf) => {
    const markerModel = gltf.scene;
    markerModel.position.set(0, 0.5, 0);
    scene.add(markerModel);

    // Interactivity
    markerModel.traverse((child) => {
        if (child.isMesh) {
            child.userData = { URL: 'projects/train-ticket-analysis.html' };
        }
    });

    // Mouse interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function onMouseMove(event) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 0.5;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 0.5;
    }

    function onClick(event) {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children, true);
        if (intersects.length > 0) {
            const intersect = intersects[0];
            if (intersect.object.userData.URL) {
                window.location.href = intersect.object.userData.URL;
            }
        }
    }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onClick);
});

// Set camera position
camera.position.z = 5;

// Render loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();
