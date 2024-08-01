import * as THREE from './three.min.js';
import { GLTFLoader } from './GLTFLoader.js';
import { OrbitControls } from './OrbitControls.js';

// Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 20, 50);

// Create a renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

// Load texture
const textureLoader = new THREE.TextureLoader();
const mapTexture = textureLoader.load('./assets/map-texture.jpg', function (texture) {
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const geometry = new THREE.PlaneGeometry(100, 100);
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);
});

// Load marker model
const loader = new GLTFLoader();
loader.load('./assets/marker-model.glb', function (gltf) {
    const marker = gltf.scene;
    marker.scale.set(0.1, 0.1, 0.1);
    marker.position.set(0, 1, 0);
    scene.add(marker);
}, undefined, function (error) {
    console.error(error);
});

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animate the scene
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();
