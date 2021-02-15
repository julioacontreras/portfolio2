const main = () => {
  const scene = new Scene(THREE)
  const render = new Render(THREE, scene)
  const loader = new Loader(THREE)
  const mainObject = new MainObject(loader, scene)

  const onWindowResize = () => {
    scene.camera.aspect = window.innerWidth / window.innerHeight
    scene.camera.updateProjectionMatrix()

    render.renderer.setSize(window.innerWidth, window.innerHeight)
    render.composer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('optimizedResize', onWindowResize)

  const run = () => {
    if (mainObject.obj) {
      mainObject.obj.rotation.z += 0.01
    }
    requestAnimationFrame(run)
    render.composer.render()
  }
  run()
}
