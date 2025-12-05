import * as THREE from 'three'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
/* 75 -> FOV (Field of view: extent of the scene that is seen on the display at any  moment. In degrees)
window.innerWidth/window.innerHeight -> aspect ratio (use the width of the element divided by the height)
(FOV aka el ángulo de visión de la cámara, parecido a la distancia focal)
0.1 ->  near
1000 -> far
far & near -> objects further away from the camera than the value of far or closer than near won't be rendered
*/
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
//we also need to set the size at which we want it to render our app
document.body.appendChild(renderer.domElement);
//añade el canvas al DOM que three crea internamente en renderer

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
//mesh is an object that takes a geometry, and applies a material to it, we then can insert to our scene
scene.add(cube);

camera.position.z = 5;

//necesitamos esta función: es un loop de renderizado | mejor usar esto, cuando el usuario cambia de pestaña la anim para
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

