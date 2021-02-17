class FxHighTech {
  constructor (THREE, render, scene) {
    const effect1 = new THREE.ShaderPass(THREE.DotScreenShader)
    effect1.uniforms.scale.value = 4

    const effect2 = new THREE.ShaderPass(THREE.RGBShiftShader)
    effect2.uniforms.amount.value = 0.0015

    const badTVPass = new THREE.ShaderPass(THREE.BadTVShader)
    badTVPass.renderToScreen = true
    badTVPass.uniforms.distortion.value = 3.0
    badTVPass.uniforms.distortion2.value = 1.0
    badTVPass.uniforms.speed.value = 0.3
    badTVPass.uniforms.rollSpeed.value = 0.5

    this.renderScene = new THREE.RenderPass(scene.scene, scene.camera)

    this.composer = new THREE.EffectComposer(render.renderer)
    this.composer.setSize(window.innerWidth, window.innerHeight)
    this.composer.addPass(this.renderScene)
    this.composer.addPass(effect1)
    this.composer.addPass(effect2)
    this.composer.addPass(badTVPass)
  }
}
