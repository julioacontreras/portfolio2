const main = () => {
  const LAYER_FX = 1
  const LAYER_SCENE = 2
  const scene = new Scene(THREE)
  const render = new Render(THREE)
  const fxHighTech = new FxHighTech(THREE, render, scene)
  render.renderer.gammaInput = true
  render.renderer.gammaOutput = true
  render.renderer.toneMappingExposure = Math.pow(0.9, 4.0)

  const loader = new Loader(THREE)
  scene.setLayer(LAYER_FX)
  scene.setLayer(LAYER_SCENE)
  const mainObject = new MainObject(loader, (obj) => {
    const child = obj.children[0]
    child.layers.enable(LAYER_FX)
    scene.scene.add(obj)
  })

  const testObject = new TestObject(THREE)
  testObject.obj.layers.enable(LAYER_SCENE)
  scene.scene.add(testObject.obj)
  testObject.obj.position.x -= 2

  const onWindowResize = () => {
    scene.camera.aspect = window.innerWidth / window.innerHeight
    scene.camera.updateProjectionMatrix()

    render.renderer.setSize(window.innerWidth, window.innerHeight)
    fxHighTech.composer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('optimizedResize', onWindowResize)

  const run = () => {
    requestAnimationFrame(run)

    mainObject.update()
    testObject.update()

    render.renderer.autoClear = false
    render.renderer.clear()

    scene.camera.layers.set(LAYER_FX)
    fxHighTech.composer.render()

    render.renderer.clearDepth()
    scene.camera.layers.set(LAYER_SCENE)
    render.renderer.render(scene.scene, scene.camera)
  }
  run()
}
