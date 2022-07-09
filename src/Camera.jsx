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
Camera.position.x = 1000 * Math.sin(radian);
Camera.position.z = 1000 * Math.cos(radian);
Camera.lookAt(new THREE.Vector3(0, 0, 0));
export default Camera;
