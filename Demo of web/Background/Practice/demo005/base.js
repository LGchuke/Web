var camera, scene, renderer,
  // 跟踪鼠标位置
  mouseY = 8,
  // 一个数组，用于存储我们的粒子
  particles = [];


// 初始化
init();

function init() {
  // 照相机参数
  camera = new THREE.PerspectiveCamera(80, window.innerWidth/window.innerHeight, 1, 4000);
  // 将相机向后（即屏幕外）移
  camera.position.z = 1000;

  // the scene contains all the 3D object data
  scene = new THREE.Scene();
  scene.add(camera);

  // 加入CanvasRenderer，由渲染器决定场景中的物体看起来如何，并将其画出
  renderer = new THREE.CanvasRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  // 将渲染器的canvas domElement加入到body中
  document.body.appendChild(renderer.domElement);

  makeParticles();

  // add the mouse move listener
  // document.addEventListener('mousemove', onMouseMove, false);

  setInterval(update, 1000/30);
}

function update() {
  updateParticles();
  renderer.render(scene, camera);
}

function makeParticles() {
  var particle, material;

  // 将z坐标从-1000（最远处）逐步增加至1000（相机所在处）
  // 每一个位置加入一个随机的粒子
  for (var zpos = -1000; zpos < 1000; zpos += 20) {
    // 创建一个粒子材质，向其传入颜色及我们定义的粒子渲染函数
    material = new THREE.ParticleCanvasMaterial( {
      // color: 0xffffff,
      color:   getRandomColor(),
      program: particleRender
    });
    // 创建粒子
    particle = new THREE.Particle(material);

    // 赋给它一个位于-500至500之间的随机x和y值
    particle.position.x = Math.random() * 1000 - 500;
    particle.position.y = Math.random() * 1000 - 500;

    particle.position.z = zpos;

    // 将其放大一点
    particle.scale.x = particle.scale.y = 10;

    // 把它加入到场景中
    scene.add(particle);
    // 将粒子加入到我们的particles数组中
    particles.push(particle);
  }
}

function particleRender(context) {
  context.beginPath();
  context.arc(0, 0, 1, 0, 2*Math.PI, true);
  context.fill();
}

function updateParticles() {

  // 对每个粒子进行迭代处理
  for (var i = 0; i < particles.length; i++) {
    particle = particles[i];
    // 根据mouseY值进行移动
    particle.position.z += mouseY * 0.1;
    // 如果粒子过近，将其移至后面
    if (particle.position.z > 1000)
      particle.position.z -= 2000;
  }
}

function onMouseMove(event) {
    mouseY = event.clientY;
}

function getRandomColor() {
  var r = 255*Math.random()|0,
      g = 255*Math.random()|0,
      b = 255*Math.random()|0;
  // return 'rgb(' + r + ',' + g + ',' + b + ')';
  return '0x' + parseInt(r, 16) + parseInt(g, 16) + parseInt(b, 16);
}
