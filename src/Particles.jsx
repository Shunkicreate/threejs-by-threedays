import * as THREE from "three";

    // 形状データを作成
const SIZE = 10000;
// 配置する個数
const LENGTH = 5000;
// 頂点情報を格納する配列
const vertices = [];
for (let i = 0; i < LENGTH; i++) {
  const x = SIZE * (Math.random() - 0.5);
  const y = SIZE * (Math.random() - 0.5);
  const z = SIZE * (Math.random() - 0.5);

  vertices.push(x, y, z);
}

// 形状データを作成
const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

// マテリアルを作成
const material = new THREE.PointsMaterial({
  // 一つ一つのサイズ
  size: 10,
  // 色
  color: 0xffffff,
});

// 物体を作成
const Particles = new THREE.Points(geometry, material);

export default Particles