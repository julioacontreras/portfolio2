const main = (THREE) => {
  const LAYER_FX = 2
  const LAYER_GUI = 3

  const stats = new Stats()
  document.body.appendChild(stats.dom)

  const scene = new Scene(THREE)
  scene.setLayer(LAYER_FX)
  scene.setLayer(LAYER_GUI)

  const render = new Render(THREE)
  render.renderer.autoClear = false
  render.renderer.setClearColor(0x090418)

  const effects = new Effects(THREE, render, scene)

  const monumentObj = new Monument((mesh) => {
    mesh.layers.enable(LAYER_FX)
    scene.scene.add(mesh)
  })

  const mouse = new THREE.Vector2()
  document.addEventListener('mousemove', onDocumentMouseMove, false);

  function onDocumentMouseMove (event) {
    event.preventDefault()
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    monumentObj.acumulateForces(mouse.x, mouse.y)
  }

  document.addEventListener('click', (e) => {
    effects.glitchPass.enabled = true
    setTimeout(() => {
      effects.glitchPass.enabled = false
    }, 500)
  })

  const onWindowResize = () => {
    scene.camera.aspect = window.innerWidth / window.innerHeight
    scene.camera.updateProjectionMatrix()
    render.renderer.setSize(window.innerWidth, window.innerHeight)
    effects.composer.setSize(window.innerWidth, window.innerHeight)
  }
  onWindowResize()

  window.addEventListener('optimizedResize', onWindowResize)
  const clock = new THREE.Clock()
  const loop = () => {
    requestAnimationFrame(loop)
    renderScene()
  }

  const renderScene = () => {
    const delta = 5 * clock.getDelta()
    monumentObj.update(delta)
    scene.camera.layers.set(LAYER_FX)
    effects.composer.render()
    stats.update()
  }

  loop() // init application
}
