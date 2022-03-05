// i litterally just copied and pasted this from my main index.html
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);
renderer.setClearColor( 0xffffff, 0);

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );

let cubeGeo = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
let material = new THREE.MeshLambertMaterial({color: 0x606060, ambient: 0x505050 ,emissive:0x808080});
let cube = new THREE.Mesh( cubeGeo, material);
cube.castShadow = true; //default is false
cube.receiveShadow = true; //default
scene.add(cube);

camera.position.z = 20;

function animate() {
  requestAnimationFrame( animate );
  cube.rotation.y += 0.03;
  cube.rotation.x += 0.02;      
  renderer.render( scene, camera );
 };

animate();
