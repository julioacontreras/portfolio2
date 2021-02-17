class TestObject {
  constructor (THREE) {
    this.geometry = new THREE.BoxGeometry()
    this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    this.obj = new THREE.Mesh( this.geometry, this.material )
    this.existObject = true
  }

  exist () {
    return this.existObject
  }

  update () {
    if (this.exist()) {
      this.obj.rotation.z += 0.01
    }
  }
}
