class Render {
  constructor (THREE) {
    this.THREE = THREE
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(this.renderer.domElement)
  }

  render () {
    this.renderer.render()
  }
}
