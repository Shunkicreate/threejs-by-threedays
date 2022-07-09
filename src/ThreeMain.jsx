import * as THREE from "three";
import Particles from "./Particles";
import React, { useRef, useEffect } from "react";
import Camera from "./Camera";
import Pointlightings from "./Pointlightings";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeMain = () => {
  useEffect(() => {
    const rnd = document.getElementById("threejsrenderer");
    rnd.appendChild(renderer.domElement);
  });
  const camera = Camera;
  const controls = new OrbitControls(camera, document.body);
  controls.enableDamping = true;
  controls.dampingFactor = 0.03;

  let rot = 0;
  let radius = 200;

  const scene = new THREE.Scene();

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.shadowMap.enabled = true;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animation);

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


  var y = 0;
  window.addEventListener("wheel", function (e) {
    y = e.wheelDeltaY;
  });

  //animathion process
  function animation(time) {
    controls.update();
    console.log(y);
    console.log(camera.position.x, camera.position.y, camera.position.z);

    rot += 0.25; // 毎フレーム角度を0.5度ずつ足していく
    // ラジアンに変換する
    const radian = (rot * Math.PI) / 180;
    // 角度に応じてカメラの位置を設定
    radius -= y / 5;
    y = 0;
    // 原点方向を見つめる
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    renderer.render(scene, camera);
  }
  return <div id="threejsrenderer"></div>;
};

export default ThreeMain;
