class MainObject {
  constructor (loader, callback) {
    const self = this
    loader.load('jc.obj', 'jc.mtl', (object) => {
      self.obj = object
      self.obj.rotation.x = 90
      self.obj.scale.x = 3.5
      self.obj.scale.y = 3.5
      self.obj.scale.z = 3.5
      self.existObject = true
      callback(object)
    })
  }

  setLayer (id) {
    this.obj.layers.enable(id)
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
