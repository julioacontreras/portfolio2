const main = (THREE) => {
  const LAYER_FX = 1
  const LAYER_SCENE = 2
  const LAYER_CONSOLE = 3
  const scene = new Scene(THREE)
  const render = new Render(THREE)
  const fxHighTech = new FxHighTech(THREE, render, scene)
  render.renderer.gammaInput = true
  render.renderer.gammaOutput = true
  render.renderer.toneMappingExposure = Math.pow(0.9, 4.0)
  render.renderer.setClearColor(0x090418)

  // const matCubeMap = new ReflectionCube(THREE)

  const loader = new Loader(THREE)
  scene.setLayer(LAYER_FX)
  scene.setLayer(LAYER_SCENE)
  const jcObj = new Jc(loader, (obj) => {
    const child = obj.children[0]
    // child.material = matCubeMap.material
    child.layers.enable(LAYER_FX)
    scene.scene.add(obj)
  })

  // const background = new Background(THREE)
  // scene.scene.add(background.mesh)

  /*
  const testObject = new TestObject(THREE)
  testObject.obj.layers.enable(LAYER_SCENE)
  scene.scene.add(testObject.obj)
  testObject.obj.position.x -= 2
  */

  const titleFront = new Title(THREE)
  titleFront.obj.layers.enable(LAYER_FX)
  scene.scene.add(titleFront.obj)

  const mouse = new THREE.Vector2()
  document.addEventListener('mousemove', onDocumentMouseMove, false);

  function onDocumentMouseMove (event) {
    event.preventDefault()
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    jcObj.acumulateForces(mouse.x, mouse.y)
  }

  document.addEventListener('click', (e) => {
    fxHighTech.glitchPass.enabled = true
    setTimeout(() => {
      fxHighTech.glitchPass.enabled = false
    }, 500)
  })

  const onWindowResize = () => {
    scene.camera.aspect = window.innerWidth / window.innerHeight
    scene.camera.updateProjectionMatrix()

    render.renderer.setSize(window.innerWidth, window.innerHeight)
    fxHighTech.composer.setSize(window.innerWidth, window.innerHeight)
    titleFront.update(window.innerWidth)
  }
  window.addEventListener('optimizedResize', onWindowResize)
  let delta = 0
  const run = () => {
    requestAnimationFrame(run)
    delta += 0.1

    jcObj.update(delta)
    // testObject.update()

    render.renderer.autoClear = false
    render.renderer.clear()

    scene.camera.layers.set(LAYER_FX)
    // scene.camera.position.z = forceCamera.restriction(5, 3, scene.camera.position.z + forceCamera.spentForce())
    fxHighTech.update()
    fxHighTech.composer.render()

    titleFront.updateText()
    /*
    scene.camera.layers.set(LAYER_CONSOLE)
    fxHighTech.update(delta * 0.01)
    fxHighTech.composer.render()
    */

    /*
    render.renderer.clearDepth()
    scene.camera.layers.set(LAYER_SCENE)
    render.renderer.render(scene.scene, scene.camera)
    */
  }
  run()
}
