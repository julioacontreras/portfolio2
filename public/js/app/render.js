class Render {
  constructor (THREE, scene) {
    this.THREE = THREE
    this.r = new THREE.WebGLRenderer()
    this.r.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(this.r.domElement)
    this.initEffects(scene)
  }

  initEffects (scene) {
    this.composer = new this.THREE.EffectComposer(this.r)
    this.composer.addPass(new this.THREE.RenderPass(scene.scene, scene.camera))

    const effect1 = new this.THREE.ShaderPass(this.THREE.DotScreenShader)
    effect1.uniforms.scale.value = 4
    this.composer.addPass(effect1)

    const effect2 = new this.THREE.ShaderPass(this.THREE.RGBShiftShader)
    effect2.uniforms.amount.value = 0.0015
    this.composer.addPass(effect2)

    const badTVPass = new this.THREE.ShaderPass(this.THREE.BadTVShader)
    badTVPass.renderToScreen = true
    badTVPass.uniforms.distortion.value = 3.0
    badTVPass.uniforms.distortion2.value = 1.0
    badTVPass.uniforms.speed.value = 0.3
    badTVPass.uniforms.rollSpeed.value = 0.5
    this.composer.addPass(badTVPass)
  }
}
