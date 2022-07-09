import * as THREE from "three";
import Particles from "./Particles";
import React, { useRef, useEffect } from "react";
import Camera from "./Camera";
import Pointlightings from "./Pointlightings";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import Pointlightings from "./Pointlightings"

const ThreeMain = () => {
{/* <script src="https://unpkg.com/three@0.137.4/examples/js/controls/OrbitControls.js"></script> */}
  useEffect(() => {
    const rnd = document.getElementById("threejsrenderer");
    rnd.appendChild(renderer.domElement);
  });
  const camera = Camera;
  // const controls = new THREE.OrbitControls(camera, document.body);
  // controls.enableDamping = true;
  // controls.dampingFactor = 0.2;

  let rot = 0;
  let radius = 200;

  const scene = new THREE.Scene();

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.shadowMap.enabled = true;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animation);

  // document.body.appendChild(renderer.domElement);

  // const geometry = new THREE.TorusGeometry(100, 30, 160, 100);
  // const material = new THREE.MeshStandardMaterial({
  //   color: 0x6699ff,
  //   roughness: 0.5,
  // });

  // const mesh = new THREE.Mesh(geometry, material);
  // scene.add(mesh);

  // const particlesMesh = Particles
  // scene.add(particlesMesh)
  scene.fog = new THREE.Fog(0x000000, 50, 10000);

  // 平行光源
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);
  window.addEventListener("resize", onResize);

  //点光源
  const pointlightings = Pointlightings;
  pointlightings.forEach((value) => {
    scene.add(value);
  });

  // scene.add(Pointlightings)
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
  }
  // const sphere = new THREE.SphereGeometry( 0.5, 16, 8 );
  // const light1 = new THREE.PointLight( 0xff0040, 2, 50 );
  // light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xff0040 } ) ) );
  // scene.add( light1 );

  // const light2 = new THREE.PointLight( 0x0040ff, 2, 50 );
  // light2.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x0040ff } ) ) );
  // scene.add( light2 );

  // const light3 = new THREE.PointLight( 0x80ff80, 2, 50 );
  // light3.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x80ff80 } ) ) );
  // scene.add( light3 );

  // const light4 = new THREE.PointLight( 0xffaa00, 2, 50 );
  // light4.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xffaa00 } ) ) );
  // scene.add( light4 );

  var y = 0;
  window.addEventListener("wheel", function (e) {
    y = e.wheelDeltaY;
    // console.log("横スクロール：" + window.scrollX);
    // console.log("縦スクロール：" + window.scrollY);
  });

  //animathion process
  function animation(time) {
    // controls.update();
    console.log(y);
    // mesh.rotation.x = time / 1000;
    // mesh.rotation.y = time / 500;
    console.log(camera.position.x, camera.position.y, camera.position.z);

    rot += 0.25; // 毎フレーム角度を0.5度ずつ足していく
    // ラジアンに変換する
    const radian = (rot * Math.PI) / 180;
    // 角度に応じてカメラの位置を設定
    radius -= y / 5;
    y = 0;
    camera.position.x = radius * Math.sin(radian);
    camera.position.z = radius * Math.cos(radian);
    // 原点方向を見つめる
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    renderer.render(scene, camera);
  }
  return <div id="threejsrenderer"></div>;
};

export default ThreeMain;
