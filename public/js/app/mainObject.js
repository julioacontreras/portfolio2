class MainObject {
  constructor (loader, scene) {
    const self = this
    loader.load('jc.obj', 'jc.mtl', (object, materials) => {
      self.obj = object
      self.obj.rotation.x = 90
      self.obj.scale.x = 3.5
      self.obj.scale.y = 3.5
      self.obj.scale.z = 3.5
      self.materials = materials
      scene.scene.add(self.obj)
    })
  }
}
