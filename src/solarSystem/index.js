import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import backgroundImage from "./background.png"

//global declaration
let scene;
let renderer;
const canvas = document.getElementById("solar-system");
scene = new THREE.Scene();
const fov = 60;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;

//camera
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 55;
camera.position.x = 0;
scene.add(camera);

//default renderer
renderer = new THREE.WebGLRenderer({
	canvas: canvas,
	antialias: true,
});
renderer.autoClear = false;
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
renderer.setClearColor(0x000000, 0.0);

//bloom renderer
const renderScene = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(
	new THREE.Vector2(window.innerWidth, window.innerHeight),
	1.5,
	0.4,
	0.85
);
bloomPass.threshold = 0;
bloomPass.strength = 2; //intensity of glow
bloomPass.radius = 0;
const bloomComposer = new EffectComposer(renderer);
bloomComposer.setSize(window.innerWidth, window.innerHeight);
bloomComposer.renderToScreen = true;
bloomComposer.addPass(renderScene);
bloomComposer.addPass(bloomPass);

//sun object
const geometry = new THREE.TorusGeometry(12, 0.1, 9, 100);;
const circles = ['#d16b3c', '#FFB900', '#FF9600'].map((color, i) => {
	const threeColor = new THREE.Color(color);
	const material = new THREE.MeshBasicMaterial({ color: threeColor });
	const circle = new THREE.Mesh(geometry, material);
	circle.position.set(0, 0, 0);
	circle.layers.set(1);
	scene.add(circle);

	circle.rotation.y += i;
	circle.rotation.x += i;
	return circle;
});

// galaxy geometry
const starGeometry = new THREE.SphereGeometry(400, 64, 64);

// galaxy material
const starMaterial = new THREE.MeshBasicMaterial({
	map: THREE.ImageUtils.loadTexture(backgroundImage),
	side: THREE.BackSide,
	transparent: true,
});

// galaxy mesh
const starMesh = new THREE.Mesh(starGeometry, starMaterial);
starMesh.layers.set(1);
scene.add(starMesh);

//resize listner
window.addEventListener(
	"resize",
	() => {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
		bloomComposer.setSize(window.innerWidth, window.innerHeight);
	},
	false
);

//animation loop
const landscape = window.innerWidth > window.innerHeight;
const animate = (ms) => {
	requestAnimationFrame(animate);

	const axis = landscape ? 'y' : 'x';
	starMesh.rotation[axis] += 0.001;

	circles.forEach((circle, i) => {
		circle.rotation.y = (ms / 1000) + 0.3 * (i + 1) * (i % 2 === 0 ? 1 : -1);
		circle.rotation.x = (ms / 1000) + 0.7 * (i + 1) * (i % 2 === 0 ? 1 : -1);
	});

	camera.layers.set(1);
	bloomComposer.render();
};

animate();