// https://speckyboy.com/three-js-in-action/
// https://www.awwwards.com/websites/three-js/
class Effects {
  constructor (THREE, render, scene) {
    // init effects
    this.filmPass = new THREE.FilmPass(0.35, 0.95, 2048, false)
    this.bloomPass = new THREE.BloomPass(1.25)
    this.glitchPass = new THREE.GlitchPass()
    this.glitchPass.renderToScreen = true
    this.glitchPass.goWild = true
    this.glitchPass.enabled = false
    this.renderScene = new THREE.RenderPass(scene.scene, scene.camera)

    // init composer
    this.composer = new THREE.EffectComposer(render.renderer)
    this.composer.addPass(this.renderScene)
    this.composer.addPass(this.glitchPass)
    this.composer.addPass(this.bloomPass)
    this.composer.addPass(this.filmPass)
  }
}
