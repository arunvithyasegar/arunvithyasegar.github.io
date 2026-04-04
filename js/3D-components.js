import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Initialize 3D scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

// Set up renderer
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.getElementById('app-container').appendChild(renderer.domElement);

// Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Add ambient light
const ambientLight = new THREE.AmbientLight(0x404040, 2);
scene.add(ambientLight);

// Add directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// Create 3D model
const geometry = new THREE.IcosahedronGeometry(1, 1);
const material = new THREE.MeshPhongMaterial({ 
  color: 0x3b82f6,
  emissive: 0x10b981,
  emissiveIntensity: 0.2,
  specular: 0x111111,
  shininess: 30,
  wireframe: false
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Position camera
camera.position.z = 5;

// Add interactive particle system
const particleGeometry = new THREE.BufferGeometry();
const particleCount = 2000;
const posArray = new Float32Array(particleCount * 3);

for(let i = 0; i < particleCount * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * 5;
}

particleGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const particleMaterial = new THREE.PointsMaterial({
  size: 0.005,
  color: '#3b82f6',
  transparent: true,
  blending: THREE.AdditiveBlending
});

const particleMesh = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particleMesh);

// Add cursor interaction
const mouse = new THREE.Vector2();
window.addEventListener('mousemove', (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  particleMaterial.color.setHSL(mouse.x * 0.5 + 0.5, 0.8, 0.5);
});

// Animate particles
function animateParticles() {
  const positions = particleGeometry.attributes.position.array;
  for(let i = 0; i < positions.length; i += 3) {
    positions[i] += (Math.random() - 0.5) * 0.01;
    positions[i+1] += (Math.random() - 0.5) * 0.01;
    positions[i+2] += (Math.random() - 0.5) * 0.01;
  }
  particleGeometry.attributes.position.needsUpdate = true;
  requestAnimationFrame(animateParticles);
}

animateParticles();

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start animation
animate();