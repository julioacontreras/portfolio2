// https://speckyboy.com/three-js-in-action/
// https://www.awwwards.com/websites/three-js/
class FxHighTech {
  constructor (THREE, render, scene) {
    this.noisePass = new THREE.ShaderPass({
      uniforms: {
        tDiffuse: { value: null },
        amount: { value: 0 }
      },
      vertexShader: document.getElementById('vertexShader').textContent,
      fragmentShader: document.getElementById('fragmentShader').textContent
    })

    /*
    const effect1 = new THREE.ShaderPass(THREE.FilmShader)
    effect1.uniforms.grayscale.value = 0
    */

    /*
    this.effect3 = new THREE.ShaderPass(THREE.StaticShader)
    this.effect3.uniforms.amount.value = 10
    this.effect3.uniforms.size.value = 10
    */

    this.effect2 = new THREE.ShaderPass(THREE.RGBShiftShader)
    this.effect2.uniforms.amount.value = 0.0015

    /*
    this.badTVPass = new THREE.ShaderPass(THREE.BadTVShader)
    this.badTVPass.renderToScreen = true
    this.badTVPass.uniforms.distortion.value = 5.0
    this.badTVPass.uniforms.distortion2.value = 1.0
    this.badTVPass.uniforms.speed.value = 0.3
    this.badTVPass.uniforms.rollSpeed.value = 0.5
    */

    this.glitchPass = new THREE.GlitchPass()
    this.glitchPass.renderToScreen = true
    this.glitchPass.goWild = true
    this.glitchPass.enabled = false

    var effectCopy = new THREE.ShaderPass(THREE.CopyShader)
    effectCopy.renderToScreen = true

    this.renderScene = new THREE.RenderPass(scene.scene, scene.camera)

    this.composer = new THREE.EffectComposer(render.renderer)
    this.composer.setSize(window.innerWidth, window.innerHeight)
    this.composer.addPass(this.renderScene)
    this.composer.addPass(this.glitchPass)
    // this.composer.addPass(effect1)
    // this.composer.addPass(this.noisePass)
    // this.composer.addPass(this.effect2)
    // this.composer.addPass(this.badTVPass)
    // this.composer.addPass(effectCopy)
  }

  update (delta) {
    /*
    this.badTVPass.uniforms.distortion.value = Math.sin(delta) * 2
    this.badTVPass.uniforms.distortion2.value = Math.sin(delta) * 5
    // this.badTVPass.uniforms.rollSpeed.value = Math.sin(this.delta) * 10
    // this.badTVPass.uniforms.speed.value = Math.sin(this.delta) * 1000

    this.effect2.uniforms.amount.value = Math.sin(delta) * 0.01
    // console.log(this.badTVPass.uniforms.distortion.value)
    */
  }
  
}
