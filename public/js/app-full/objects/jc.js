// https://greensock.com/forums/topic/25358-threejs-and-gsap-tween-update/
class Jc {
  constructor (loader, callback) {
    this.force = new Force()
    this.forcePosition = new Force(5)
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

  acumulateForces (rotationForce, positionForce) {
    if (this.exist()) {
      this.force.acumulateForce(rotationForce)
      this.forcePosition.acumulateForce(positionForce)
    }
  }

  setLayer (id) {
    if (this.exist()) {
      this.obj.layers.enable(id)
    }
  }

  exist () {
    return this.existObject
  }

  update () {
    if (this.exist()) {
      this.obj.rotation.z += this.force.spentForce()
      this.obj.position.z = this.forcePosition.restriction(2, -1, this.obj.position.z + this.forcePosition.spentForce())
    }
  }
}
