// https://greensock.com/forums/topic/25358-threejs-and-gsap-tween-update/
class Monument {
  constructor (callback) {
    this.force = new Force()
    this.forcePosition = new Force(5)
    const textureLoader = new THREE.TextureLoader()
    this.uniforms = {
      fogDensity: { value: 0.45 },
      fogColor: { value: new THREE.Vector3(0, 0, 0) },
      time: { value: 1.0 },
      uvScale: { value: new THREE.Vector2(3.0, 1.0) },
      texture1: { value: textureLoader.load('textures/lava/cloud.png') },
      texture2: { value: textureLoader.load('textures/lava/img01.png') }
    }
    this.uniforms.texture1.value.wrapS = this.uniforms.texture1.value.wrapT = THREE.RepeatWrapping
    this.uniforms.texture2.value.wrapS = this.uniforms.texture2.value.wrapT = THREE.RepeatWrapping
    const size = 0.65
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: document.getElementById('vertexShader').textContent,
      fragmentShader: document.getElementById('fragmentShader').textContent
    })
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(size, 20, 10), this.material)
    this.mesh.rotation.y = 0.3
    this.mesh.position.z = 3.8
    this.existObject = true
    callback(this.mesh)
  }

  acumulateForces (rotationForce, positionForce) {
    if (this.exist()) {
      this.force.acumulateForce(rotationForce)
      this.forcePosition.acumulateForce(positionForce)
    }
  }

  setLayer (id) {
    if (this.exist()) {
      this.mesh.layers.enable(id)
    }
  }

  exist () {
    return this.existObject
  }

  update (delta) {
    if (this.exist()) {
      this.uniforms.time.value += 0.2 * delta
      this.mesh.rotation.y += 0.0125 * delta
      this.mesh.position.z = this.forcePosition.restriction(3.8, 3.75, this.mesh.position.z - this.forcePosition.spentForce())
    }
  }
}
