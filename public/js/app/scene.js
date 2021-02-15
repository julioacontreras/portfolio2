class Scene {
  constructor (THREE) {
    this.THREE = THREE
    this.scene = new THREE.Scene()
    this.init()
  }

  init () {
    this.initLight()
    this.initCamera()
  }

  initLight () {
    this.light = new this.THREE.DirectionalLight('#ffffff', 0.9)
    this.light.position.set(-20, 0, 100)
    this.scene.add(this.light)
  }

  initCamera () {
    this.camera = new this.THREE.PerspectiveCamera(75,
      window.innerWidth / window.innerHeight, 0.1, 1000)
    this.camera.position.z = 5
  }

}
