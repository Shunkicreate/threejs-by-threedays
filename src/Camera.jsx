import * as THREE from "three";
const Camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    10000
);
let rot = 0; // 角度
// ラジアンに変換する
const radian = rot * Math.PI / 180;
// 角度に応じてカメラの位置を設定
Camera.position.x = 20 * Math.sin(radian);
Camera.position.y = 20;
Camera.position.z = 20 * Math.cos(radian);
Camera.lookAt(new THREE.Vector3(0, 0, 0));

export default Camera;
