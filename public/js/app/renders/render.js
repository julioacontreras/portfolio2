class Render {
  constructor (THREE) {
    this.THREE = THREE
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    document.getElementById('canvas3D').appendChild(this.renderer.domElement)
  }

  render () {
    this.renderer.render()
  }
}
