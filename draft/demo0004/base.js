var camera;
var controller;
var cubes = [];
var light;
var renderer;
var scene;
var width;
var height;
var textureLoader = new THREE.TextureLoader();

function threeStart() {
  threeInit();
  initCamera();
  initScene();
  initLight();
  initObject();
  render();
  // renderer.clear();
  // renderer.render(scene, camera);
}

function threeInit() {
  width = window.innerWidth;
  height = window.innerHeight;
  renderer = new THREE.WebGLRenderer({
      antialias : true
  });
  renderer.setSize(width, height);
  renderer.setClearColor(0xFFFFFF, 1.0);
  document.getElementById('root').appendChild(renderer.domElement);
}

function initCamera() {
  camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 600;
  camera.up.x = 0;
  camera.up.y = 1;
  camera.up.z = 0;
  camera.lookAt({
      x : 0,
      y : 0,
      z : 0
  });
  controller = new THREE.OrbitControls(camera, renderer.domElement);
  controller.target = new THREE.Vector3(0, 0, -75); // 设置控制点
}

function initScene() {
  scene = new THREE.Scene();
}

function initLight() {
  light = new THREE.AmbientLight(0xfefefe);
  scene.add(light);
}

function initObject() {
  SimpleCube(cubeParams.x,cubeParams.y,cubeParams.z,cubeParams.num,cubeParams.len,cubeParams.colors);
  // for(var i = 0; i < cubes.length; i++){
  //   var item = cubes[i];
  //   scene.add(cubes[i]);
  // }
  scene.add(cubes[1]);
  scene.add(cubes[11]);
  scene.add(cubes[21]);
  scene.add(cubes[25]);
  scene.add(cubes[26]);
  var geometry = new THREE.BoxGeometry(50, 50, 50);
  var textureSquares = textureLoader.load('./img/bg.jpg');
  textureSquares.repeat.set(64 / 16, 64 / 16);
  textureSquares.wrapS = textureSquares.wrapT = THREE.RepeatWrapping;
  // textureSquares.magFilter = THREE.NearestFilter;
  // textureSquares.format = THREE.RGBFormat;
  var material = new THREE.MeshBasicMaterial({
    // color: 0x00ff00,
    map: textureSquares
  });
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
}

function render() {
  // renderer.clear();
  renderer.render(scene, camera);
  window.requestAnimationFrame(render);
}

function createFace(rgbaColor) {
  var canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  var context = canvas.getContext('2d');
  if (context) {
    context.fillStyle = 'rgba(0, 0, 0, 1)';
    context.fillRect(0, 0, 256, 256);
    context.rect(16, 16, 224, 224);
    context.lineJoin = 'round';
    context.lineWidth = 16;
    context.fillStyle = rgbaColor;
    context.strokeStyle = rgbaColor;
    context.stroke();
    context.fill();
  } else {
    console.log('create context fail');
  }
  return canvas;
}

var cubeParams = {
  x: -75,
  y: 75,
  z: 75,
  num: 3,
  len: 50,
  colors: ['rgba(255,193,37,1)', 'rgba(0,191,255,1)',
           'rgba(50,205,50,1)', 'rgba(178,34,34,1)',
           'rgba(255,255,0,1)', 'rgba(255,255,255,1)']
};

function SimpleCube(x, y, z, num, len, colors) {
  for (var i = 0; i < num; i++) {
    for (var j = 0; j < num * num; j++) {
      var cubeGeo = new THREE.BoxGeometry(len, len, len);
      // console.log(cubeGeo);
      let materials = [];
      var faces = [];
      faces.push(createFace(colors[0]));
      faces.push(createFace(colors[1]));
      faces.push(createFace(colors[2]));
      faces.push(createFace(colors[3]));
      faces.push(createFace(colors[4]));
      faces.push(createFace(colors[5]));
      for (var k = 0; k < 6; k++) {
        var texture = new THREE.Texture(faces[k]);
        texture.needsUpdate = true;
        materials.push(new THREE.MeshLambertMaterial({
          map: texture
        }));
      }

      var cube = new THREE.Mesh(cubeGeo, materials);

      cube.position.x = (x + len / 2) + (j % 3) * len;
      cube.position.y = (y - len / 2) - parseInt(j / 3) * len;
      cube.position.z = (z - len / 2) - i * len;

      cubes.push(cube);
    }
  }
}

threeStart();