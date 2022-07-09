import * as THREE from "three";
const num = 10
const radius = 100
const Pointlightings = []
const sphere = new THREE.SphereGeometry( 0.5, 16, 8 );
for (var i = 0; i < num; i++){
    const light = new THREE.PointLight(0xe6b422, 20, 50, 1.0);
    light.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xe6b422 } ) ))
    light.position.set(Math.cos(i*2*Math.PI/num) * radius, 0, Math.sin(i*2*Math.PI/num) * radius);
    Pointlightings.push(light);
}
export default Pointlightings;