// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Load map texture
const textureLoader = new THREE.TextureLoader();
const mapTexture = textureLoader.load('assets/map-texture.jpg');
const mapGeometry = new THREE.PlaneGeometry(10, 10);
const mapMaterial = new THREE.MeshBasicMaterial({ map: mapTexture });
const map = new THREE.Mesh(mapGeometry, mapMaterial);
scene.add(map);

// Add interactive markers
const markerGeometry = new THREE.SphereGeometry(0.1, 32, 32);
const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const markers = [
    { position: [-3, 0, 0.1], url: 'projects/train-ticket-analysis.html' },
    { position: [3, 0, 0.1], url: 'projects/other-project.html' }
];

markers.forEach(markerData => {
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    marker.position.set(...markerData.position);
    marker.userData = { url: markerData.url };
    scene.add(marker);
});

camera.position.z = 5;
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Raycaster for interactivity
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length > 0) {
        const marker = intersects[0].object;
        if (marker.userData.url) {
            window.location.href = marker.userData.url;
        }
    }
}

window.addEventListener('click', onMouseClick, false);

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
