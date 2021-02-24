class Background {
  constructor (THREE) {
    this.geometry = new THREE.PlaneGeometry(200, 200)
    this.material = new THREE.MeshBasicMaterial()
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.mesh.position.y = - 50
    this.mesh.rotation.x = - Math.PI * 0.5
  }
}