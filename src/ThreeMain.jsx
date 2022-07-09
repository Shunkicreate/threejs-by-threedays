// Option 1: Import the entire three.js core library.
import * as THREE from "three";
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import Clock from './Clock';
// const controls = new OrbitControls( camera, renderer.domElement );
// const scene = new THREE.Scene();

// if ( WebGL.isWebGLAvailable() ) {

// 	// Initiate function or other initializations here
// 	animate();

// } else {

// 	const warning = WebGL.getWebGLErrorMessage();
// 	document.getElementById( 'container' ).appendChild( warning );

// }
const ThreeMain = () => {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.position.z = 1;
  camera.position.x = 30;
  // camera.position.y = 100;
  // 原点方向を見つめる
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  const scene = new THREE.Scene();

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.shadowMap.enabled = true;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animation);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
  const material = new THREE.MeshStandardMaterial({
    color: 0x6699ff,
    roughness: 0.5,
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  // 平行光源
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);
  // animation
  //   const light = new THREE.DirectionalLight(0xffffff, 3);
  //   scene.add(light);
  window.addEventListener("resize", onResize);

  function onResize() {
    // サイズを取得
    const width = window.innerWidth;
    const height = window.innerHeight;

    // レンダラーのサイズを調整する
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // カメラのアスペクト比を正す
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    console.log('resize')
  }
  function animation(time) {
    mesh.rotation.x = time / 1000;
    mesh.rotation.y = time / 500;

    renderer.render(scene, camera);
  }
};

export default ThreeMain;
